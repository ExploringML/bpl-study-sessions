# BPL Study Sessions for SolveIt

I started this project to learn BasedPL (BPL) by working through the fast.ai APL Study Group videos in SolveIt. This repository contains the complete set of 17 study session dialogs, one per video, with runnable BPL examples and notes. The dialogs share a toolbar for entering BPL symbols. Run the cells in order so later examples have the definitions they need. [APL Study Group playlist](https://www.youtube.com/playlist?list=PLfYUBJiXbdtSgU6S_3l6pX-4hQYKNJZFU) · [BasedPL documentation](https://answerdotai.github.io/basedpl/)

## About SolveIt

SolveIt is Answer.AI's online workspace for coding and learning with AI. A dialog is a notebook that holds your notes, code and results together.

[SolveIt homepage](https://solve.it.com/) · [Sign up for SolveIt](https://solve.it.com/signup)

## Install in SolveIt

Open the terminal in your SolveIt workspace and clone this repository into the folder where you want to keep the sessions.

```bash
git clone https://github.com/ExploringML/bpl-study-sessions.git
```

Open any Study Session dialog from the cloned folder. Keep the three CRAFT files together alongside the sessions. SolveIt loads them automatically for the folder and its subfolders. On each new kernel startup, CRAFT.ipynb checks PyPI and upgrades basedpl to the latest compatible stable release with pip install --upgrade. No release number is pinned. The update helper and package setup live in CRAFT.ipynb; no requirements file is needed. An internet connection is required for the update check.

Run check_bpl_versions() in a Python cell to list installed and available releases without changing packages, or ensure_latest_bpl() to check and install updates. If an upgrade changes a package already loaded in a kernel, restart that dialog kernel and rerun: reinstalling a native library does not replace the loaded code. Session 9 reports both running and installed versions. Craft regenerates the keyboard and browser bootstrap from the installed package on startup. If an upstream browser API changes, the keyboard integration reports which patch needs updating.

The toolbar works in Code, Note, Prompt and Raw. No template or hidden helper folder is required.

## Extra Examples

The [Scratchpad](Scratchpad.ipynb) contains additional BPL experiments and a walkthrough of means with the Under operator.

[BPL Dots](BPL%20Dots.ipynb) is a self-contained dialog for displaying arrays as static or animated dots: run its setup cell, then use `%%bpl --dots` or `%%bpl --adots`. Animated cells use their own browser workspace and need internet access to load BPL.

## Quick Start

The toolbar gets its glyphs from the installed BPL package. [Official BPL glyph reference](https://answerdotai.github.io/basedpl/glyphs.html)

1. Open a dialog. The toolbar loads automatically; run `setup_bpl()` if you need to refresh it.
2. The strip starts with **Core symbols**. Click a glyph to insert it at the cursor, replacing any selected text.
3. In Code, click the small **BPL** button beside Filter to add `%%bpl` before typing. Glyph insertion also adds it when needed. Note, Prompt and Raw get plain text.
4. Use the filter icon to choose a category, or the book icon to browse and search.
5. Hide or show the toolbar with the **BPL** button beside Settings, **Ctrl+Shift+8** on Windows, or **⌘+Shift+8** on Mac.

Insertion never runs the cell. Use SolveIt's normal Submit/Run controls when ready.

## Search and Filters

Open the glyph browser with the book icon, then search by character, name or meaning. The search field receives keyboard focus when Browse opens. Word prefixes work: `eq` finds equality-related symbols, `range` finds `⍳` and `↦`, and `count` finds `≢`. Try `square`, `inverse`, `transpose`, `last`, `rational`, `delta`, `superscript` or `subscript` for the additions.

Filters start with **All**, **Core symbols**, **Additional characters**, **Favourites** and **Recently used**. These are followed by **Numbers**, **Compare**, **Range & index**, **Arrays**, **Functions**, **Writing code**, **Superscripts**, **Subscripts** and **Other characters**. Categories overlap: `²` appears under Numbers and Functions, while `₋₁` appears under Range & index and Arrays. Each setup starts on Core symbols.

Search applies within the selected filter. The header shows the number of entries in the current category or the number of search matches. Clear search and choose All to restore the complete list.

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

Favourites and recent entries use this browser profile's local storage for the SolveIt site, shared across dialogs on that site. They survive reloads but do not sync to other browsers or devices; clearing site data removes them. Only entry strings are stored, not editor contents. If browser storage is unavailable, they last for the current palette session.

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

The former `examples.json` is the editable `bpl_examples` dictionary in the Craft dialog. The former `keyboard.py` is `_bpl_keyboard()`. The catalogue builder is the first function in `CRAFT.js`. There are no reads from `.bpl-palette` or machine-specific absolute paths.

Browser startup data is generated so the toolbar appears immediately on opening or reloading, including before a code cell runs. After changing the examples or keyboard function in the Craft dialog, run the changed definition cells, then `rebuild_bpl_browser()`. Reload open study dialogs to load the rebuilt JavaScript. `setup_bpl()` refreshes the current dialog; it does not reset lesson variables.

For main-strip sizes, edit the defaults near the start of `window.bplCraftPalette` in `CRAFT.js` and the `size` dictionary in `setup_bpl()`:

```python
size = dict(fontSize=19, buttonWidth=21, buttonHeight=26, gap=0.5)
```

All values are pixels. Wider combinations use at least 32px; menu launchers span two columns. Browse uses uniform 40×40px buttons with 21px glyphs, controlled in `CRAFT.css`. Reload after changing CSS or JavaScript.

## Publishing Updates

From the repository folder's terminal, review and publish your changes:

```bash
git status
git add "Study Session 10.ipynb"
git commit -m "Update Study Session 10"
git push
```

When changing the shared setup, stage the relevant `CRAFT.*` files and README too. Notebook files can contain saved outputs and attachments: review `git diff --stat` and the files you are publishing. Temporary checks and backups are excluded by `.gitignore`.

Other users can update their copy with `git pull --ff-only` when their working tree is clean. Keep personal work committed or backed up before updating. Reload a dialog after pulling browser changes; a new dialog kernel picks up the current Craft Python code.

## Credits

BasedPL is developed by Answer.AI and contributors under Apache-2.0. The keyboard integration adapts its browser input code and the APL language bar by Nikolay G. Nikolov and Adam Brudzevski; full attribution and licence texts are retained in the opening comment of CRAFT.js. The study material follows Jeremy Howard's linked course; it is not an official course distribution.

A snippet library and separate playground remain future ideas.

[Validation History](VALIDATION.md) records the migration, publication and Expression Explorer checks.

## Expression Explorer

Run a `%%bpl` cell, then click **↳** beside it. Read the whole-expression overview first. If the cell contains several expressions, choose one from the dropdown.

- **Parts:** select a complete section of the expression, then use **Explore inside** to see its smaller sections. The breadcrumbs take you back out. **Glyph reference** explains individual symbols.
- **Focus:** move the selection window across the expression and drag either edge to resize it. The start and end sliders also work with the keyboard. **Snap to complete section** selects the surrounding BPL section when your selection is only a fragment.
- **Grouping:** matching colours connect the source to its functions, arguments and operands. Select a group to inspect it. The disclosure below shows BPL's fully bracketed expression.
- **Walk Through:** follow the native intermediate values and shapes. Expand **Inside this operation** to inspect inner steps. Printed output is shown separately from the returned value.
- **Compare:** edit a copy of the cell and click **Compare expressions**. Both versions use the saved starting inputs; the lesson cell and its variables stay unchanged.

Click **Explain in context** for short explanations of the whole expression and its meaningful sections. This uses the dialog's existing SolveIt model. BPL still supplies the structure and values; model-written explanations are labelled **SolveIt**. No separate model API key is needed. The temporary prompt is removed after the browser confirms saving the notes. If generation fails, the prompt remains so you can inspect the error.

The Craft starts the explorer automatically. In an already running study dialog, use its small refresh cell:

```python
await reload_bpl_explorer()
```

Then rerun the BPL cell you want to inspect. If an already open browser page still shows the previous interface, reload the page. Refreshing the inspector clears its saved captures, but keeps the lesson variables. Contextual notes are saved in that browser for the inspected capture; a new capture may need a new explanation.

Try `3 4{⎕←⍺ ⍵ ⋄ ⍺=⍵}3 5`: open the function body to see the printing and comparison statements. In **Compare**, change `=` to `≡` to compare element-wise equality with whole-array matching.

### Where the Information Comes From

BPL's native parser supplies syntax and source positions. Its `]dissect` command supplies the fully bracketed expression, and native function inspection supplies the operands of derived functions. The explorer matches these structures back to the source; it does not use an LLM or a second set of precedence rules.

The walkthrough reproduces operations with the cell's saved inputs in a separate BPL process and checks the final result against the saved run. This isolation is necessary because BPL workspace handles in one Python process share a session. Opening the panel does not rerun the notebook cell or change its variables.

The displayed steps explain the language-level calculation. They are **not a debugger trace** of BPL's internal, potentially optimised execution. Key, Rank and Each use the native operators to obtain the groups or cells passed to their operands. Other expanded cases include composition, forks, Over, numeric Power, invertible numeric Under, small reductions, outer products and simple dfns.

The audit also examined `workspace.inspect`, `•explain` and the Rust recording structures. `inspect` provides function source and help; `•explain` describes optimisation. The richer Rust recording structures are not exposed as a general Python tracing API. See the [native dissection implementation](https://github.com/AnswerDotAI/basedpl/blob/main/src/eval/dissect.rs) and [BPL's Python interface](https://answerdotai.github.io/basedpl/python.html).

### Limits and Maintenance

Input requests, random operations and external effects are not replayed. Explicit display statements such as `⎕←` can be replayed in isolation, with their printed output kept separate from the returned result. Large arrays, long computations and deep expansions have limits. When an inner operation cannot be expanded, its verified inputs and result remain available; the explorer does not invent missing steps. A mismatch with the saved result suppresses intermediate values and asks you to rerun the cell.

Captures stay in the current kernel, with the latest 32 cell/source captures retained. Restarting or refreshing the inspector clears them. Native inspection uses some private BPL interfaces, so new BPL releases may need compatibility updates. The separate replay process currently requires SolveIt's Linux host.

All runtime code lives in the Craft files: one marked Python cell in `CRAFT.ipynb`, and one marked JavaScript block in `CRAFT.js`, and scoped styles in a marked block in `CRAFT.css`. There are no additional explorer runtime files to install.

To remove it, delete the cell marked `BEGIN BPL EXPRESSION EXPLORER SETUP` and the complete JavaScript block between `BEGIN BPL EXPRESSION EXPLORER V2` and its matching `END` marker. Remove the matching `BEGIN BPL EXPRESSION EXPLORER` CSS block and any `setup_bpl_explorer()` or `reload_bpl_explorer()` calls, then restart the dialog kernel and reload the page. The palette and output scrolling remain separate.
