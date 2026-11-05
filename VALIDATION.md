# Validation History

These checks record the versions used at the time. For current setup instructions, see the [README](README.md#install-in-solveit).

## Toolbar Migration

The migration checks ran in six session kernels with BPL 0.1.61. They covered a sum returning 6, automatic toolbar loading, the 151 insertable entries available at the time, BPL magic insertion in Code, plain text insertion in Note, Windows Alt+M, backtick completion for `noteq` and the Ctrl+Shift+8 toggle.

Lesson cells and saved outputs were compared with the pre-migration backup. All 104 BPL cells in Sessions 3–6 ran in isolated processes without exceptions. Sessions 1–2 had no BPL cells. Six isolated dialog copies loaded the toolbar and Browse panel without browser errors, and all 34 custom practice examples ran without exceptions. The checks preserved saved lesson outputs and covered selected results. Mac hardware testing was outstanding at the time.

## Package Updates and Publication

On 22 October 2026, Craft startup, the keyboard patches and browser bootstrap generation passed in a fresh BPL 0.1.67 process. The sum, geometric mean and axis-catenate checks passed.

The same day, all 11 notebooks passed format validation. All 44 BPL cells in Session 9 and all 13 in Scratchpad ran in isolated BPL 0.1.67 processes, and the Craft Python cells compiled.

## Expression Explorer

On 24 October 2026, the native regression checks passed with BPL 0.1.73. Study Session 11 testing also covered contextual explanations, saved-note acknowledgement, temporary-prompt cleanup, section selection, printed output and expression comparison.
