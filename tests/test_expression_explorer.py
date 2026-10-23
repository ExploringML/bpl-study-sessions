"""Test the isolated Expression Explorer cell in CRAFT.ipynb.

Run from the repository root with the installed BPL version. BPL_CRAFT_PATH
may point to another CRAFT.ipynb or to an exported copy of its explorer cell.
The test executes the cell's setup definition with start=False, so it does not
connect to SolveIt, start listeners, or run other CRAFT code.
"""
import ast
import asyncio
import json
import os
from pathlib import Path
import unittest

import basedpl as bp


def load_craft_explorer():
    configured = os.environ.get("BPL_CRAFT_PATH")
    here = Path(__file__).resolve().parent
    candidates = [Path(configured)] if configured else [here.parent / "CRAFT.ipynb", Path.cwd() / "CRAFT.ipynb", here / "CRAFT.ipynb", here / "expression-explorer-craft.py"]
    path = next((p for p in candidates if p.is_file()), None)
    if path is None:
        raise FileNotFoundError("Set BPL_CRAFT_PATH to the CRAFT.ipynb containing Expression Explorer.")
    source = path.read_text(encoding="utf-8")
    if path.suffix == ".ipynb":
        cells = json.loads(source)["cells"]
        sources = ["".join(c.get("source", "")) for c in cells if c.get("cell_type") == "code"]
        matches = [s for s in sources if "# BEGIN BPL EXPRESSION EXPLORER BACKEND" in s]
        if len(matches) != 1:
            raise AssertionError(f"Expected one isolated explorer code cell; found {len(matches)}.")
        source = matches[0]
    parsed = ast.parse(source)
    definitions = [n for n in parsed.body if isinstance(n, ast.AsyncFunctionDef) and n.name == "setup_bpl_explorer"]
    if len(definitions) != 1:
        raise AssertionError("CRAFT must define setup_bpl_explorer exactly once in the isolated cell.")
    namespace = {"__name__": "bpl_explorer_craft_test"}
    definition = ast.Module(body=definitions, type_ignores=[])
    exec(compile(definition, str(path), "exec"), namespace)
    return asyncio.run(namespace["setup_bpl_explorer"](start=False))


backend = load_craft_explorer()


class ExplorerChecks(unittest.TestCase):
    def setUp(self):
        self.workspace = bp._Workspace()
        self.explorer = backend.Explorer(self.workspace, cell_id_provider=lambda: "testcell")
        self.explorer.install_capture()

    def tearDown(self):
        self.explorer.uninstall_capture()

    def run_source(self, source):
        self.workspace(source)
        result = self.explorer.inspect_source("%%bpl\n" + source, "testcell")
        self.assertEqual(result["status"], "ok")
        return result["lines"]

    def test_execution_header_cell_identity(self):
        parent = {"header": {"msg_type": "execute_request", "msg_id": "3504da2f.b6ba7995"}, "metadata": {}}
        self.assertEqual(backend._cell_id_from_parent(parent), "3504da2f")
        for bad in (None, {}, {"header": None}, {"header": {"msg_type": "execute_request", "msg_id": None}},
                    {"header": {"msg_type": "execute_request", "msg_id": "3504da2f"}},
                    {"header": {"msg_type": "execute_request", "msg_id": "3504da2f.b6ba7995.extra"}},
                    {"header": {"msg_type": "execute_request", "msg_id": "xxxxxxxx.b6ba7995"}},
                    {"header": {"msg_type": "execute_reply", "msg_id": "3504da2f.b6ba7995"}}):
            with self.subTest(parent=bad):
                self.assertEqual(backend._cell_id_from_parent(bad), "")

    def test_native_function_trees_and_spans(self):
        for body, kind in [("+/~=", "fork"), ("+/~∘=", "∘"), ("(+/~)=", "∘")]:
            with self.subTest(body=body):
                line = self.explorer.inspect_source("f ← " + body)["lines"][0]
                self.assertEqual(line["grouping"]["status"], "exact", line)
                self.assertEqual(line["grouping"]["kind"], kind)
                self.assertEqual(line["grouping"]["assignment"]["span"], [0, 1])
                for node in line["grouping"]["nodes"]:
                    self.assertEqual(line["source"][slice(*node["span"])], node["text"])
        line = self.explorer.inspect_source("f ← (+/~)=")["lines"][0]
        self.assertEqual(len(line["grouping"]["nodes"]), 2)
        self.assertEqual(len(line["grouping"]["nodes"][0]["children"]), 2)

    def test_dna_recording_and_magic_normalisation(self):
        self.workspace('leftDNA←"GAGCCTACTAACGGGAT" ⋄ rightDNA←"CATCGTAATGACGGCCT"')
        lines = self.run_source("f ← +/~∘=\nleftDNA f rightDNA")
        for line in lines:
            self.assertEqual(line["walkthrough"]["status"], "exact", line)
            self.assertEqual(line["walkthrough"]["steps"][-1]["result"], 7)
        source = "f ← +/~∘=\nleftDNA f rightDNA"
        fresh = self.explorer.inspect_source("\n%%bpl\n" + source, "testcell")
        self.assertEqual(fresh["capture"]["status"], "recorded")

    def test_not_and_without_labels_follow_native_operand_valence(self):
        def leaves(nodes):
            for node in nodes:
                if node["children"]:
                    yield from leaves(node["children"])
                else:
                    yield node
        for source, title, valence in [("f←+/~∘=", "Not", 1), ("f←(+/~)=", "Not", 1), ("f←+/~=", "Without", 2), ("~", "Not / Without", None)]:
            with self.subTest(source=source):
                nodes = self.explorer.inspect_source(source)["lines"][0]["grouping"]["nodes"]
                item = next(node for node in leaves(nodes) if node["text"].strip("() ") == "~")
                self.assertEqual(item["annotation"]["title"], title)
                self.assertEqual(item["valence"], valence)

    def test_cell_identity_and_edits_do_not_reuse_values(self):
        self.workspace('leftDNA←"A" ⋄ rightDNA←"T"')
        source = "f ← +/~∘=\nleftDNA f rightDNA"
        self.run_source(source)
        self.assertEqual(self.explorer.inspect_source(source, "differentcell")["capture"]["status"], "not-recorded")
        self.assertEqual(self.explorer.inspect_source(source + " ⍝ edited", "testcell")["capture"]["status"], "not-recorded")

    def test_same_cell_array_reassignment_is_not_misrepresented(self):
        self.workspace('a←"A" ⋄ c←"ACGT"')
        lines = self.run_source('a←"TT"\nc =⊗ a')
        self.assertEqual(lines[-1]["walkthrough"]["status"], "unavailable")

    def test_reassigned_function_is_not_kept(self):
        self.workspace('leftDNA←"A" ⋄ rightDNA←"T"')
        source = "f ← +/~∘=\nf ← 1\nleftDNA f rightDNA"
        try:
            self.workspace(source)
        except Exception:
            pass
        lines = self.explorer.inspect_source(source, "testcell")["lines"]
        self.assertEqual(lines[-1]["walkthrough"]["status"], "unavailable")
        self.assertEqual(lines[0]["walkthrough"]["status"], "unavailable")

    def test_failed_run_never_invents_later_results(self):
        self.workspace('leftDNA←"A" ⋄ rightDNA←"T"')
        source = "f ← +/~=\nleftDNA f rightDNA"
        with self.assertRaises(Exception):
            self.workspace(source)
        lines = self.explorer.inspect_source(source, "testcell")["lines"]
        self.assertEqual(lines[0]["grouping"]["kind"], "fork")
        self.assertEqual(lines[-1]["walkthrough"]["status"], "unavailable")
        self.assertTrue(lines[-1].get("execution_error"))

    def test_outer_product_and_last_axis_sum(self):
        self.workspace('c←"ACGT" ⋄ a←"AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC"')
        for source in ("c ,⊗ a", "c =⊗ a", "+/ c =⊗ a"):
            line = self.run_source(source)[0]
            self.assertEqual(line["grouping"]["status"], "exact", line)
            self.assertEqual(line["walkthrough"]["status"], "exact", line)
            if source.startswith("+/"):
                self.assertEqual(line["walkthrough"]["steps"][-1]["result"], [20, 12, 17, 21])

    def test_monadic_key_and_tally(self):
        self.workspace('a←"banana"')
        for source in (",⌸ a", "{≢ ⍵}⌸ a"):
            line = self.run_source(source)[0]
            self.assertEqual(line["grouping"]["status"], "exact", line)
            self.assertEqual(line["walkthrough"]["status"], "exact", line)
            steps = line["walkthrough"]["steps"]
            self.assertEqual(steps[0]["rows"][1]["values"], [0, 1, 2, 3, 4, 5])
            self.assertEqual([(r["label"], r["values"]) for r in steps[1]["rows"]], [("b", [0]), ("a", [1, 3, 5]), ("n", [2, 4])])
            if source.startswith("{"):
                self.assertEqual(line["walkthrough"]["steps"][-1]["result"], [1, 3, 2])
            else:
                self.assertEqual([r["values"] for r in steps[-1]["rows"]], [["b", 0], ["a", 1, 3, 5], ["n", 2, 4]])

    def test_arbitrary_source_is_never_executed_by_inspection(self):
        self.workspace("untouched←123")
        for source in ('untouched←999', '•nput "payload"', ']clear', 'f←{⍵}', '[1 2)', '"😀"'):
            result = self.explorer.inspect_source(source)
            json.dumps(result, ensure_ascii=False)
        self.assertEqual(self.workspace("untouched").py, 123)
        self.assertNotIn("f", self.workspace.names())

    def test_multiline_body_does_not_get_top_level_grouping(self):
        result = self.explorer.inspect_source("f ← {\n +/~=\n}")
        self.assertTrue(all(line["grouping"]["status"] == "unavailable" for line in result["lines"]))


if __name__ == "__main__":
    unittest.main(verbosity=2)
