# BPL Study Sessions for SolveIt

Nine study dialogues following [Jeremy Howard's APL study group](https://www.youtube.com/playlist?list=PLfYUBJiXbdtSgU6S_3l6pX-4hQYKNJZFU), adapted while learning [BasedPL](https://answerdotai.github.io/basedpl/), with a shared glyph toolbar for SolveIt's editor.

The [Scratchpad](Scratchpad.ipynb) contains additional BPL experiments and a walkthrough of means with the Under operator.

These are learning notebooks: examples include experiments and comparisons between APL and BPL. Run them in lesson order; some cells deliberately redefine functions or demonstrate different behaviour.

## Install in SolveIt

Clone this repository into any folder on your SolveIt instance:

```bash
git clone https://github.com/ExploringML/bpl-study-sessions.git
```

Open any Study Session dialogue from the cloned folder. Keep the three CRAFT files together alongside the sessions. SolveIt loads them automatically for the folder and its subfolders. On each new kernel startup, CRAFT.ipynb checks PyPI and upgrades basedpl to the latest compatible stable release with pip install --upgrade. No release number is pinned. The update helper and package setup live in CRAFT.ipynb; no requirements file is needed. An internet connection is required for the update check.

Run check_bpl_versions() in a Python cell to list installed and available releases without changing packages, or ensure_latest_bpl() to check and install updates. If an upgrade changes a package already loaded in a kernel, restart that dialogue kernel and rerun: reinstalling a native library does not replace the loaded code. Session 9 reports both running and installed versions. Craft regenerates the keyboard and browser bootstrap from the installed package on startup. If an upstream browser API changes, the keyboard integration reports which patch needs updating.

The toolbar works in Code, Note, Prompt and Raw. No template or hidden helper folder is required. Duplicate Session 9 in the same folder to begin Session 10; its new kernel inherits the same Craft setup.

## Glyph Coverage

Checked against **BPL 0.1.61 installed in SolveIt**: **151 insertable entries** cover all 99 entries in `symbols` and every additional insertion from `layout.json`, including the original toolbar's menu combinations. The loader reads both sources from the installed package.

| Group | Entries | Includes |
|---|---:|---|
| Core symbols | 99 | Functions, operators and other catalogue symbols |
| Superscripts | 23 | `⁰`–`⁹`, `⁻`, `ᵀ`, `ᵘ`, and `⁻⁰`–`⁻⁹` |
| Subscripts | 25 | `₀`–`₉`, `₋`, `ₓ`, `ⱼ`, `ₑ`, `ᵣ`, and `₋₀`–`₋₉` |
| Other characters | 4 | `∆`, `⍙`, `^` and `_` |

**Additional characters** combines the last three groups: 30 special characters, 20 two-character combinations and two ordinary keyboard characters. For example, `⁻¹` inserts two characters together; it is not another individual glyph. The help panel identifies these combinations. `^` and `_` are grouped under Other characters, though they came from the original superscript and subscript menus.

Superscripts and subscripts are BPL syntax: `x²` squares a value, `f²` repeats a function twice, and `v₁` selects index 1. See the [official reference](https://answerdotai.github.io/basedpl/scripts.html). `^` is retained for keyboard-menu parity; BPL powers use `*` or superscript digits.

## Quick Start

1. Open a dialogue. The toolbar loads automatically; run `setup_bpl()` if you need to refresh it.
2. The strip starts with **Core symbols**. Click a glyph to insert it at the cursor, replacing any selected text.
3. In Code, click the small **BPL** button beside Filter to add `%%bpl` before typing. Glyph insertion also adds it when needed. Note, Prompt and Raw get plain text.
4. Use the filter icon to choose a category, or the book icon to browse and search.
5. Hide or show the toolbar with the **BPL** button beside Settings, **Ctrl+Shift+8** on Windows, or **⌘+Shift+8** on Mac.

Insertion never runs the cell. Use SolveIt's normal Submit/Run controls when ready.

## Search and Filters

Open the glyph browser with the book icon, then search by character, name or meaning. The search field receives keyboard focus when Browse opens. Word prefixes work: `eq` finds equality-related symbols, `range` finds `⍳` and `↦`, and `count` finds `≢`. Try `square`, `inverse`, `transpose`, `last`, `rational`, `delta`, `superscript` or `subscript` for the additions.

Filters start with **All**, **Core symbols**, **Additional characters**, **Favourites** and **Recently used**. These are followed by **Numbers**, **Compare**, **Range & index**, **Arrays**, **Functions**, **Writing code**, **Superscripts**, **Subscripts** and **Other characters**. Categories overlap: `²` appears under Numbers and Functions, while `₋₁` appears under Range & index and Arrays. Each setup starts on Core symbols.

Search applies within the selected filter. The header shows `All entries · 151`, a category and count, or the match count. Clear search and choose All to restore the complete list.

In **All**, the main strip shows the core glyphs plus three menus: **² Superscripts**, **₂ Subscripts** and **∆ Other characters**. Additional characters shows just those menus. They open upwards when there is room; selecting an entry inserts it and closes the menu. Escape returns focus to its menu button. Click elsewhere to dismiss it.

Choosing a specific category, Favourites or Recently used shows its entries directly. Search results also appear directly, so a matching extra is one click away. Browse always lists each matching entry in an equal-sized grid, including every combination.

The strip shrinks to the rows needed; hovering does not change its height. Browse and the character menus float outside the editor layout, above or below the controls as space allows. Narrow windows may need more rows. Browse results and help scroll independently.

## Browse, Pinning and Favourites

- **Hover a Browse glyph** to preview its description.
- **Click it** to pin the description. The button turns blue and the description says Pinned. Clicking the same glyph again unpins it.
- Hover another glyph to preview it; leave the results grid to restore the pinned description and reach its documentation or examples.
- **Insert** in the description inserts that glyph. Clicking a Browse glyph itself only pins it; main-strip clicks insert directly.
- The **star** adds or removes a favourite, saved in this browser's local storage.

Descriptions show one-input and two-input meanings for functions, or the kind and meaning for operators and syntax. Shortcut hints use Alt on Windows and Option on Mac. Links open the relevant BPL documentation. There are **96 checked practice examples for 70 entries**, including powers, inverses, indexing and number notation. Click an example to insert it without running it.

## Recently Used and Storage

**Recently used** keeps the last 20 different entries inserted through the toolbar, newest first. Using one again moves it to the front. Inserting an example records its associated entry; hovering, pinning and typing directly do not add anything. Undoing an insertion does not remove it from this history. **Clear history** in Browse empties the list.

Favourites and recent entries use this browser profile's local storage for the SolveIt site, shared across dialogues on that site. They survive reloads but do not sync to other browsers or devices; clearing site data removes them. Only entry strings are stored, not editor contents. If browser storage is unavailable, they last for the current palette session.

Storage keys: `solveit.bpl.favourites.v1` and `solveit.bpl.recent.v1`.

## Magic Headers and Undo

The **BPL** button beside Filter adds `%%bpl` on the first line and returns focus to the editor. It preserves your text and selection, leaves an existing cell-magic header unchanged, and never runs the cell. Repeated clicks do not add duplicates. One Undo removes the new header. The button is disabled in Note, Prompt and Raw; the separate BPL button beside Settings still shows or hides the toolbar.

Only **Code** adds a magic header, for both individual glyphs and examples. Existing `%%bpl` or `%%apl` first lines are preserved, including options such as `--animate`. Repeated insertions do not add another header. If the cursor is on an existing magic line, insertion moves below it.

Existing text is retained; adding `%%bpl` makes that cell run as BPL. The cursor stays after the insertion. One Undo removes the insertion and any new header together. Examples get line breaks when needed and remain plain text outside Code.

## Keyboard Controls

| Action | Windows | Mac |
|---|---|---|
| Show/hide toolbar | Ctrl+Shift+8 | ⌘+Shift+8 |
| Close Browse and return to editor | Escape | Escape |
| Close a character menu and return to its button | Escape | Escape |
| Undo insertion | Ctrl+Z | ⌘+Z |

Use **8 on the number row**, not the numeric keypad. The toggle uses the physical key, regardless of the character Shift produces, and works in every message type. The BPL button's tooltip shows the shortcut.

Tab moves through controls; Enter or Space activates a button. Focusing a Browse glyph previews help unless a selection is pinned. Existing backtick completion and direct glyph shortcuts remain available: for example, In a Code cell beginning with %%bpl, Windows Alt+M inserts `×`; Alt+Minus followed by Space inserts `¯`.

## Customisation and Craft Files

| File | Contents |
|---|---|
| `CRAFT.ipynb` | Package setup, `bpl_examples`, keyboard integration, refresh and rebuild functions |
| `CRAFT.js` | Palette, catalogue builder and generated browser startup data |
| `CRAFT.css` | Toolbar and Browse layout, colours and sizing |

The former `examples.json` is the editable `bpl_examples` dictionary in the Craft dialogue. The former `keyboard.py` is `_bpl_keyboard()`. The catalogue builder is the first function in `CRAFT.js`. There are no reads from `.bpl-palette` or machine-specific absolute paths.

Browser startup data is generated so the toolbar appears immediately on opening or reloading, including before a code cell runs. After changing the examples or keyboard function in the Craft dialogue, run the changed definition cells, then `rebuild_bpl_browser()`. Reload open study dialogues to load the rebuilt JavaScript. `setup_bpl()` refreshes the current dialogue; it does not reset lesson variables.

For main-strip sizes, edit the defaults near the start of `window.bplCraftPalette` in `CRAFT.js` and the `size` dictionary in `setup_bpl()`:

```python
size = dict(fontSize=19, buttonWidth=21, buttonHeight=26, gap=0.5)
```

All values are pixels. Wider combinations use at least 32px; menu launchers span two columns. Browse uses uniform 40×40px buttons with 21px glyphs, controlled in `CRAFT.css`. Reload after changing CSS or JavaScript.

## Adding Sessions and Publishing Updates

Duplicate a study session within this folder, rename it, and keep the three Craft files alongside it. A template is intentionally not included. The copied setup cells are short checks and a `setup_bpl()` refresh call; they contain no toolbar implementation.

From the repository folder's terminal, review and publish your changes:

```bash
git status
git add "Study Session 10.ipynb"
git commit -m "Add study session 10"
git push
```

When changing the shared setup, stage the relevant `CRAFT.*` files and README too. Notebook files can contain saved outputs and attachments: review `git diff --stat` and the files you are publishing. Temporary checks and backups are excluded by `.gitignore`.

Other users can update their copy with `git pull --ff-only` when their working tree is clean. Keep personal work committed or backed up before updating. Reload a dialogue after pulling browser changes; a new dialogue kernel picks up the current Craft Python code.

## Validation and Credits

Migration checks covered all six session kernels using BPL 0.1.61, a sum evaluating to 6, automatic toolbar loading, all 151 entries, Code-only magic insertion, plain insertion in Note, Windows Alt+M, backtick `noteq` completion and Ctrl+Shift+8. Lesson cells and their saved outputs were compared against the pre-migration backup. Upgrade checks also ran all 104 %%bpl cells from Sessions 3-6 in isolated processes without exceptions. Sessions 1-2 have no %%bpl cells. Saved lesson outputs were preserved; these checks do not assert every numerical result or rerun every Python/APL cell. All six isolated dialogue copies loaded the updated toolbar and Browse panel without browser errors. The 34 custom practice examples also ran without exceptions. Mac hardware testing remains outstanding.

BasedPL is developed by Answer.AI and contributors under Apache-2.0. The keyboard integration adapts its browser input code and the APL language bar by Nikolay G. Nikolov and Adam Brudzevski; full attribution and licence texts are retained in the opening comment of CRAFT.js. The study material follows Jeremy Howard's linked course; it is not an official course distribution.

An annotator, snippet library and separate playground remain future ideas.

Latest-release update checks (22 October 2026): Craft startup, its keyboard patches and browser bootstrap generation passed in a fresh BPL 0.1.67 process. Sum, geometric mean and axis-catenate checks passed. The installer checks for the newest compatible stable release rather than retaining that test version.

Publication checks (22 October 2026): all 11 notebooks passed format validation. All 44 BPL cells in Session 9 and 13 in Scratchpad ran successfully in isolated BPL 0.1.67 processes; the Craft Python cells compiled.
