# design-sync notes — Astryx Design System

## Fixes made 2026-07-25/26 (second run — first run never uploaded)

**Starting state:** the pinned project `c44120e4-…` was EMPTY (`list_files` → `[]`) and no
`_ds_sync.json` anchor existed — the 2026-07-20 run did all the debugging below but died
before uploading, and no grades survived locally. So this run re-verified everything from
scratch. DS source itself was unchanged (no commits between the runs).

- **[GENERAL] NEVER run other CPU-heavy work while `package-validate.mjs`'s render check is
  running.** I generated 98 CLI doc files concurrently with the first validate and got 11
  failures — 9 of them "root empty" on the _alphabetically last_ components (Token → VisuallyHidden).
  Every one was a starvation artifact: the render-check JSON showed `errs: 0, caught: 0,
firstErr: null` with `rootEmpty: true` (a real component fault produces errors). Re-running
  validate alone: 96/98 clean, matching the prior run exactly. Diagnostic tell: zero errors +
  empty root + a contiguous alphabetical tail = starvation, not a component bug.

- **`docs: 0/98` → `98/98`. [GENERAL for this repo]** Astryx documents every component in
  `packages/core/src/<Name>/<Name>.doc.mjs` — JS modules exporting a `ComponentDoc` object.
  The converter only ingests `.md`/`.mdx` (`lib/docs.mjs`: "is not .md/.mdx — skipped"), so it
  matched nothing and every `.prompt.md` shipped without usage guidance, best practices, or
  anatomy — exactly what the claude.ai/design agent reads to compose components. Bridged with
  the repo's OWN renderer, which already emits markdown:

  ```bash
  for d in ds-bundle/components/core/*/; do n=$(basename "$d");
    node packages/cli/bin/astryx.mjs component "$n" > ".design-sync/docs/$n.md"; done
  ```

  then `"docsDir": "../../.design-sync/docs"` (PKG_DIR-relative, like `extraEntries`).
  **Regenerate `.design-sync/docs/` whenever `*.doc.mjs` changes** — they are committed
  build inputs, so a stale file silently ships stale guidance. A few large docs (Layout, Text)
  are truncated to the converter's ~8 KB per-doc cap; that is expected, not a failure.

- **`ToastViewport` was missing from `window.Astryx` → Toast's `ToastOverDialog` story threw
  "Element type is invalid".** (The 2026-07-20 notes guessed "a Dialog-related subpart"; the
  real cause is that `ToastViewport` is exported ONLY from the `./Toast` subpath —
  `packages/core/dist/Toast/index.js` — and never re-exported from the main `dist/index.js`,
  so the story-import shim redirected it to an undefined global.) Fixed by adding
  `"./dist/Toast/index.js"` to `cfg.extraEntries`. **This was a real bundle defect, not just a
  preview one** — a design agent composing `<ToastViewport>` would have hit the same undefined.
  A systematic scan of every story's `@astryxdesign/core/*` named imports against the live
  `window.Astryx` key list confirmed `ToastViewport` is the ONLY missing runtime value; the
  other 7 flagged names (`ISODateString`, `DateRange`, `TokenColor`, `ChatToolCallItem`,
  `ChatComposerTrigger`, `ChatComposerToken`, `ChatComposerInputHandle`) are TypeScript types,
  erased at compile — harmless.

- **`MediaTheme` 15s `page.goto` timeout = an INFINITE image-refetch loop, upstream in the DS.**
  Not slowness and not a network problem (egress verified: unsplash 200 in 0.28s). The page
  actually renders fine (41 928 chars, 6 images, 0 broken) in 169 ms, but fires **6871 requests**
  and never reaches networkidle — one image requested 2556× in 8 s. Cause: the
  `RegionalDetection` story's `RegionalDetectDemo` calls
  `useImageMode(url, {region: {...}})` with the options object **created inline on every
  render** — a new identity each pass re-triggers the hook's effect → refetch → setState →
  re-render, forever. **Verified upstream:** the same story in the reference storybook fires
  2632 requests in 8 s (the sibling `AutoDetectFromImage` story fires only 10). Skipped via
  `cfg.overrides.MediaTheme.skip: ["core-mediatheme--regional-detection"]`. This is a genuine
  `useImageMode` API/story bug worth fixing upstream — an unstable object dep.
  ⚠️ To probe the reference storybook, you MUST serve it over HTTP
  (`python3 -m http.server` in `.design-sync/sb-reference`) — `file://` makes chromium
  CORS-block its module scripts and every story renders as an empty root, which looks
  exactly like a component failure.

- **🟡 [RENDER_THIN] "DOM content present but rendered height is 0px" fires for ALL 98
  components — SYSTEMATIC FALSE POSITIVE, triaged, do not chase.** It appeared the moment
  `cssEntry` started pointing at the real CSS, and that is exactly why it is benign: the
  provider-chain wrapper each story mounts into (`<div class="xjp7ctv x1tgivj0 x9ynric
x19aimcq">`) resolves to **`display: contents`**, which generates no box, so
  `getBoundingClientRect().height === 0` while its children paint normally. Under the old
  mismatched storybook CSS those atomic classes matched no rule, so the div fell back to
  `display:block` and measured a real height — the warning's _absence_ was the bug, not its
  presence. Verified by screenshotting cards directly (Card/Button render fully: colour
  variants, callouts, spacing, borders all correct) and by `pngBytes` of 100–300 KB with rich
  `texts` in `.render-check.json`. `package-validate.mjs` still exits 0 — RENDER_THIN is a
  warn, not an error.

- **`[RENDER_THIN] NavIcon` (the older "mounts have no text and paint nothing" variant) is also a FALSE POSITIVE — triaged, do not chase.** It renders 8 SVG
  icons at 16×16 correctly; it just has no text, so the heuristic reads it as hollow forever.

- **26 `[GRID_OVERFLOW]` components** got the remedy validate named: `cardMode: "column"` for
  the 24 `wide` ones, `cardMode: "single"` + `primaryStory: "Default"` for the 2 `escape`
  ones (`Carousel`, `TabList`).

- **🔴 THE BIG ONE — `cfg.cssEntry` was never set, so previews shipped a ~1/3-complete
  stylesheet.** Symptom: in the very first Button compare, Primary/Loading/Disabled rendered
  **nothing** (invisible white-on-white) and Destructive was mis-colored. Cause: with no
  `cssEntry`, the converter fell back to `[CSS_FROM_STORYBOOK]` and scraped
  `sb-reference/assets/iframe-*.css`. But **storybook compiles StyleX with a different config
  than `dist` does** — storybook's atomic classes are prefixed `astryx…` (`astryx1n2onr6`),
  dist's are plain `x…` (`x1n2onr6`). The preview loads dist's JS, so its class names could
  never match storybook's CSS: only **7 of Button's 21 atomic classes** existed in the shipped
  sheet. Fix: `"cssEntry": "./dist/astryx-with-reset.css"` (see next bullet).
  **Diagnostic recipe for "component renders but is unstyled/invisible":** read the rendered
  element's `class` list in the browser, then grep each atomic class against the shipped
  `_ds_bundle.css`. A low hit-rate means the CSS came from the wrong compilation.

- **`reset.css` must be concatenated with `astryx.css` — the converter takes only ONE
  `cssEntry`.** Astryx expects consumers to import BOTH `@astryxdesign/core/reset.css` and
  `@astryxdesign/core/astryx.css` (storybook's `preview.tsx` imports reset.css explicitly);
  `dist/astryx.css` alone omits the reset. Visible symptom: an empty 38×38 black-bordered
  square in the bottom-right of EVERY preview — the `ToastViewport` that `LayerProvider`
  always renders (`Layer/LayerProvider.tsx` wraps children in `<ToastViewport>`), showing the
  UA default `[popover]{border:3px solid}` because reset's
  `:where(*,*::before,*::after){border-width:0}` was missing. `cfg.cssEntry` is bounded to
  **pkgRoot** (`cfgPath(cfg.cssEntry,'cssEntry',pkgRoot)`), so the combined file cannot live in
  `.design-sync/` — it must sit inside `packages/core/`. **REQUIRED PRE-STEP before every
  sync** (`dist/` is gitignored, so `pnpm build` wipes this file):

  ```bash
  { cat packages/core/src/reset.css; echo; cat packages/core/dist/astryx.css; } \
    > packages/core/dist/astryx-with-reset.css
  ```

- **🟡 [GENERAL, EXPECTED — do NOT "fix"] Storybook and the published dist disagree about
  theme component overrides.** `neutralTheme` overrides **7 components**: `button, badge,
banner, switch, progressbar, card, section` (e.g. `button['variant:destructive']` →
  `--color-error-muted` pastel bg + `--color-error` text). Those overrides are injected at
  runtime into `@layer astryx-theme` scoped by `[data-astryx-theme="neutral"]`.
  - **dist/preview:** atomics live in `@layer astryx-base` → **theme override wins**
    (destructive = pastel `--color-error-muted`, badges = blue). Measured via
    `getComputedStyle` and CDP `CSS.getMatchedStylesForNode`.
  - **storybook:** atomics live in `@layer priority1..priority10` → **base style wins**
    (destructive = filled crimson `--color-error`, badges = dark). Measured the same way.
  - ⚠️ **The exact cascade cause is NOT pinned down — don't repeat my first explanation.**
    I initially wrote that the `priority*` layers "sort last because they're absent from
    `@layer reset, astryx-base, astryx-theme, product;`". On re-checking that does not hold:
    the storybook static CSS contains **no comma-list ordering statement at all** (only
    `@layer reset{`, `@layer priority1;`, `@layer priority2 {` …), and the base destructive
    rule sits in `priority4`, which by first-declaration order should sort BEFORE the
    runtime-injected `astryx-theme` — i.e. the theme should have won there, but measurably
    doesn't. Something else (scope proximity, insertion order, or an unlayered rule) is
    involved. **The divergence itself is reproducible and verified on both sides; only the
    mechanism is open.** If you need the mechanism, re-derive it — don't trust a tidy story.
    Since `./astryx.css` is a real published export, **the preview matches what consumers and the
    claude.ai/design agent actually render; storybook is the outlier.** Grade stories touching
    those 7 components `close` with this explanation — do not chase it, and do NOT "fix" the
    preview to match storybook (that would falsify the shipped artifact). Worth raising upstream:
    the DS's own storybook does not show what its published package renders.

- **🔴 [GENERAL] Story-local `stylex.create()` CSS is emitted to `_preview/stylex.css`, which
  NO card HTML ever links — so those styles silently do nothing.** Found by fan-out wave 1
  (Collapsible's gray padded page-wrapper decorator rendered flat; AspectRatio's
  `Ultrawide21x9` gradient placeholder rendered blank). Why it mostly hides: StyleX atomic
  classes are content-addressed, so a story-local style that reuses a property:value pair some
  real component already ships (`padding: var(--spacing-4)`) collides with an existing class
  and "just works"; only one-off values (a literal gradient, `--spacing-6` padding on a bare
  div) have no coincidental match and render as nothing.
  The clean fix would be linking `_preview/stylex.css` from the card template, but
  **`emit.mjs` is app-contract surface the skill forbids forking.** Supported workaround —
  a **two-pass build**, folding only the referenced-but-missing classes (2.5 KB, 39 classes;
  the whole file is 335 KB, so do NOT append it wholesale into the CSS every design receives):

  ```bash
  # pass 1: build, then extract classes referenced by _preview/*.js but absent from dist CSS
  #         → .design-sync/story-local.css   (script inlined in the run; ~20 lines of node)
  # pass 2: cat reset.css + astryx.css + story-local.css > dist/astryx-with-reset.css; rebuild
  ```

  `.design-sync/story-local.css` is committed so a fresh clone builds correctly in ONE pass;
  regenerate it only when story-local demo styles change. Verified fixed: Collapsible 6/6 and
  AspectRatio 6/6 now match.

- **🟡 [GENERAL, ACCEPTED — candidate fix for a future run] StyleX SHORTHAND properties in
  story-local styles are dropped by the story-compile fork.** Distinct from the unlinked-CSS
  bug above: there the class was emitted but had no rule; here the **class is never emitted at
  all**. `@stylexjs/unplugin/esbuild` (wired in `.design-sync/overrides/story-imports.mjs`)
  silently drops `border: '1px solid #ddd'`, `borderTop`/`borderBottom` shorthands and
  `background: 'linear-gradient(...)'`, while storybook's own StyleX config expands them.
  Evidence: in `ds-bundle/_preview/FormLayout.js` the container element has 4 style props but
  only 3 emitted classes, and the missing one is always the shorthand.
  Affected story files (grep for `stylex.create()` blocks with a shorthand + literal value):
  `FormLayout.stories.tsx`, `Layout.stories.tsx`, `Layer.stories.tsx`,
  `ChatAutoScroll.stories.tsx` — i.e. only 2 synced components (FormLayout, Layout), and only
  their DECORATIVE demo borders. **Deliberately not fixed:** the likely knob is a
  `styleResolution` option on the plugin in the fork, but the fork is part of the grade
  contract, so touching it clears grades for ALL 98 components — a disproportionate price for
  demo-wrapper borders. Graded `close`. Longhands (`borderWidth`/`borderStyle`/`borderColor`,
  `backgroundImage`) compile fine, so the upstream-friendly fix is authoring story styles in
  longhand — which is already the convention in `packages/core`.

- **🔴 A `@astryxdesign/charts` story was mis-paired into core `Tooltip` — FIXED, and the
  mechanism will bite any future name collision.** The charts story
  `charts-chrome-tooltip--default` has the storybook title **`Charts/Chrome/Tooltip`**;
  `titleParts()` (lib/common.mjs) walks the title's segments from the END and takes the first
  one that is a package export, so it resolved to `Tooltip` and merged into core Tooltip's
  story set as a 13th story — with export name `Default`, colliding with Tooltip's own
  `Default` grade key. Two real consequences: the Tooltip card rendered a bar chart, and the
  whole charts library got bundled into the preview (**`_preview/Tooltip.js` was 167 KB vs
  ~20 KB for its peers**).
  - **Why the existing guard missed it:** `source-storybook.mjs` has an "own-package stories
    win the name" rule (`if (comp.own && !isOwn(e)) continue`), but `isOwn()` tests whether the
    story's `importPath` resolves inside **PKG_DIR** (`packages/core`). In this repo EVERY
    story lives in `apps/storybook/stories/`, so `isOwn` is false for all of them and the
    guard — and the sort that depends on it — is inert. Do not rely on it here.
  - **`titleMap` CANNOT fix this**: it is keyed by the derived _segment_ (`Tooltip`), so
    `{"Tooltip": null}` would exclude the real component too.
  - **Fix used** (config-only, and only Tooltip re-grades):
    `cfg.overrides.Tooltip.skip: ["charts-chrome-tooltip--default"]`. Result: 12 stories, no
    chart cell, preview back to 15 KB.
  - **Watch for repeats:** any `Charts/**/<X>` or `Lab/**/<X>` title whose LAST segment equals
    a core export will silently merge the same way. Audit after a re-sync with:
    `node -e "const m=require('./ds-bundle/.stories-map.json');for(const c of m.components)
for(const s of c.stories||[]) if(!s.id.startsWith('core-')) console.log(c.name,s.id)"`
    — it should print nothing.

- **🟡 [GENERAL, ACCEPTED — best candidate fix for the next run] `Theme`'s 5 stories render
  BASE tokens because the story compile splits `ThemeContext` in two.** Precise root cause
  (found in wave 4, distinct from the CSS-layer divergence above): `Theme.stories.tsx` does
  `import {Theme, defineTheme, useTheme} from '@astryxdesign/core/theme'`. In the compiled
  preview, that barrel gets a **mixed resolution** — `Theme` matches a component filename so
  the ds-shim redirects it to `window.Astryx.Theme` (closing over the DIST bundle's
  `ThemeContext`), while `useTheme` is NOT a shimmed component name and is therefore compiled
  fresh **from source**, constructing a _second, unrelated_ `ThemeContext`. The provider
  writes to dist's context; the consumer reads the source-compiled one, always gets `null`,
  and falls back to base defaults — which is why Token Inspector prints `name:"default"`,
  `mode:"light"` no matter which `<Theme theme={…} mode="dark">` wraps it, and why
  `--color-accent` shows `#0064E0` instead of neutral's `#262626`.
  **Only affects previews, NOT the shipped artifact** — a design agent calls
  `window.Astryx.Theme` and `window.Astryx.useTheme`, both from the same dist bundle, so their
  contexts match. Left as `close` because the fix (`cfg.storyImports.shim` forcing the whole
  `@astryxdesign/core/theme` subpath through the global, or bundling that subpath as one unit)
  lives in the **grade contract** — changing it clears grades for all 98 components, a
  disproportionate price for 5 stories. `useTheme` IS already a `window.Astryx` export, so the
  shim pattern is expected to work; try it at the START of a future run, before grading.

- **[GENERAL grading discipline] Grade from the images, not from the prior.** Wave-4 correctly
  found that `Switch` — although on the 7-component theme-override list — shows NO divergence
  across all 21 of its stories (its status props colour the _description banner_, not the
  track), and graded it `match` rather than the `close` the standing guidance predicted.
  Blanket "expect a delta" hints are a starting point, never a verdict.

- **🟡 [GENERAL — SCOPE LIMIT OF THIS VERIFICATION] Portal/overlay components are only ever
  captured in their CLOSED state.** Nothing in the capture path clicks a trigger, so for
  `Popover` (9/9 stories), `MobileNav`, `MoreMenu`, `MultiSelector`, `DropdownMenu`,
  `ContextMenu`, `HoverCard`, `Dialog`, `CommandPalette`, `Lightbox` etc. both panels show
  only the trigger button/icon. That means the trigger is verified but **the open panel's
  content, positioning and z-index are NOT verified by this sync** — there is no fidelity
  signal either way. Not a defect and not actionable per-component (`compare.mjs` is the
  oracle and is never forked), but state it plainly when reporting coverage. A future run
  wanting real overlay coverage would need stories that render the open state statically
  (e.g. `defaultOpen`) rather than requiring interaction.

- **The theme-override divergence is NOT specific to `neutralTheme`.** Confirmed with the Y2K
  theme (built via `themeFactory`): its lime-green Primary/Secondary button override wins in
  the dist preview and loses to the storybook base style (plain grey). Same root cause as
  above (whatever it turns out to be), so it applies to every Astryx theme, not just neutral.

- **🟡 [GENERAL] `compare.mjs` truncates the PREVIEW panel for tall stories — a capture
  artifact, not a defect.** The storybook side uses an _element_ screenshot of
  `#storybook-root` (auto-expands to full content height); the preview side uses a
  viewport-clipped `page.screenshot({fullPage:false})` bound to 900x700 unless the component
  declares `viewport="WxH"`. So any module-mode component whose story is taller than ~700px
  looks cut off on the right panel only. Verified on `Markdown` (body scrollHeight 1090px; the
  "missing" Table/Task-List content is present in the DOM). Do NOT grade this as a mismatch,
  and do not fork `compare.mjs` — it is the oracle. Judge tall stories from the raw
  `…__ds.png` plus a direct check if needed.

- **[GENERAL grading tip] Never judge a subtle hue difference from the contact sheet.** The
  sheet downscales each panel heavily; Icon's `Negative` story looked pinker on the preview
  side in the thumbnail but was an exact match at full resolution. Always confirm against the
  `raw/` pair before writing `close`/`mismatch` for a colour delta.

- **`cfg.readmeHeader` resolves from the CONFIG HOME = the REPO ROOT, not `PKG_DIR` and not
  `.design-sync/`.** Three different bases are in play, which is why this costs two wasted
  builds if you guess:

  | key                                                                                     | resolved relative to                                                                                                               | correct value here                |
  | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
  | `cssEntry`                                                                              | `PKG_DIR` (`packages/core`), and bounded to it                                                                                     | `./dist/astryx-with-reset.css`    |
  | `docsDir`, `extraEntries`                                                               | `PKG_DIR`                                                                                                                          | `../../.design-sync/docs`         |
  | `readmeHeader`                                                                          | **config home** — `package-build.mjs` computes `dirname(cfgDir)` when the config sits in a `.design-sync/` dir, i.e. the repo root | **`.design-sync/conventions.md`** |
  | Both `"../../.design-sync/conventions.md"` and bare `"conventions.md"` log              |
  | `! readmeHeader: … not found at the config home — skipped` and the README ships with NO |
  | header — easy to miss, since it is one `!` line among many and the build still exits 0. |
  | **Always verify with `grep -c xstyle ds-bundle/README.md` after a build.**              |

- **AspectRatio stories load `https://picsum.photos/<w>/<h>`, which returns a RANDOM image per
  request.** The photos therefore differ between the storybook and preview panels on every
  capture. This is content non-determinism, not a fidelity defect — grade the ratio frame,
  label and radius, ignore the photo. (Only the `/seed/…` URL form is deterministic.)

- **[GENERAL] Don't `pkill -f "<pattern>"` from a Bash tool call** whose own command line
  contains that pattern — pkill matches the shell running it and kills your own call
  (exit 144, command never runs). Same self-match trap the skill documents for `pgrep`.
  Use `fuser -k <port>/tcp` for servers.

## Fixes made in the 2026-07-20 first sync

- **`storybookConfigDir` must be the `.storybook/` directory itself** (`apps/storybook/.storybook`), NOT its parent package dir (`apps/storybook`). [GENERAL] The converter's `resolveStorySources` takes `dirname(storybookConfigDir)` to find the storybook project root that `index.json` `importPath`s are relative to — setting it one level too high (the package dir) silently broke ALL story→export pairing (`0/0 stories paired`), which meant every one of the 98 components fell back to the floor card with zero real preview generation. Fixed → `1478/1478 stories paired`.

- **`cfg.provider` needed to replace decorator auto-bundling.** `apps/storybook/.storybook/preview.tsx`'s decorator wraps every story in `<Theme theme={neutralTheme} mode={mode}><LayerProvider>`. Auto-bundling that decorator file failed (`Cannot read directory "packages/core/src/reset.css": not a directory` — an esbuild resolution quirk on the `import '@astryxdesign/core/reset.css'` CSS side-effect import). Set explicitly instead:

  ```json
  "provider": {"component": "Theme", "props": {"theme": {"$ref": "previewNeutralTheme"}, "mode": "light"}, "inner": {"component": "LayerProvider"}}
  ```

  Backed by `.design-sync/extra-entries/preview-theme.mjs` (re-exports `neutralTheme` from the theme package's **built dist** — `packages/themes/neutral/dist/source.mjs` via a relative path, NOT the bare `@astryxdesign/theme-neutral` specifier: workspace packages are only symlinked into each **app's** own `node_modules` (`apps/storybook/node_modules/@astryxdesign/*`), never into the repo-root `node_modules` the converter's `--node-modules` points at, and never into `packages/core/node_modules` at all (it doesn't exist — `packages/*` siblings resolve via Vite aliases in storybook's own config, which esbuild knows nothing about). `cfg.extraEntries` paths resolve relative to `PKG_DIR` (`packages/core`), not the repo root or the config file's directory — hence `../../.design-sync/extra-entries/...`.

- **[GENERAL] `stylex.create()` calls in story files need a StyleX transform the converter doesn't run by default.** This was the actual root cause of 23 "root empty" renders across foundational components (Button, Card, Grid, Stack, Dialog, Divider, Item, Layout, Section, FormLayout, AspectRatio, Table, Center, Overlay, ContextMenu, Collapsible, Field, AppShell, Avatar, AvatarGroup, Carousel, MediaTheme, Theme) — every one of those stories calls `stylex.create(...)` at module scope for local demo styling (e.g. `Button.stories.tsx`'s `buttonStoryStyles`), and uncompiled StyleX throws `Unexpected 'stylex.create' call at runtime` the instant the story module loads — before the component itself ever mounts. This had NOTHING to do with the `cfg.provider` theme-context fix above (which I tried first, based on a wrong hypothesis — it was a red herring; the two fixes are independent and both were needed). Fixed via a fork: `.design-sync/overrides/story-imports.mjs` adds `@stylexjs/unplugin/esbuild` to the front of the story-compile plugin list (declared in `cfg.libOverrides`). Fixed 23/24 render failures → 96/98 clean.

## Known issues, not yet fixed (revisit during grading)

- **`Toast`**: primary content renders correctly (visible buttons render fine), but a secondary console error fires — `An error occurred in the <DialogContext> component` + `Element type is invalid ... got: undefined`. Likely a compound-component subpart (Dialog-related) referenced by the Toast story that isn't captured by the export shim. Non-blocking (`! [RENDER_ERRORS]`, not `✗`) but worth chasing during the solo/grading phase since Toast is a natural "compound/overlay" pick anyway (§4b step 2).
- **`MediaTheme`**: `page.goto: Timeout 15000ms exceeded` during the render check. Story imports `defineTheme`/`Theme` and demos custom theming — timeout suggests either a genuinely slow/hanging render or a network-dependent asset. Needs investigation with the browser open, not just the render-check log.

## ⚠️ FIRST: `projectId` is deliberately NOT committed — re-pin before syncing

`config.json` has **no `projectId`**; it was stripped so the ID wouldn't sit in a shared repo.
Consequence: a fresh clone looks like a FIRST sync to the skill, and it will **create a second,
duplicate Claude Design project** instead of updating the existing one.

**Before running a sync from a fresh clone**, re-pin it:

1. `DesignSync(list_projects)` → find the project named **"Astryx Design System"**
   (type `PROJECT_TYPE_DESIGN_SYSTEM`).
2. Put its id back as `"projectId"` in `.design-sync/config.json` (keep it uncommitted, or
   commit it if the repo is private).
3. Confirm with `DesignSync(list_files)` that it already contains `components/`, `_ds_bundle.js`
   and `_ds_sync.json` — that anchor is what makes the re-sync fast (carried-forward grades).

If you skip this you get a duplicate project and a full re-verification of all 98 components.

## conventions.md validation log

- **2026-07-26 (re-sync):** every component, token and prop named in `conventions.md`
  re-verified against a fresh build — 12/12 tokens, 10/10 props, 21/21 components, plus the
  4 bundle-only exports (`LayerProvider`, `useLinkComponent`, `LinkProvider`, `useTheme`).
  **One claim failed:** it said "Every component takes an `xstyle` prop" — actually **93 of
  98**. `Icon`, `Theme`, `MediaTheme`, `Toast`, `Tooltip` have none (confirmed in source, not
  just a d.ts extraction gap). Corrected, since the README is inlined into the design agent's
  prompt and the agent would have written `<Icon xstyle={…}>`. **Re-check this ratio whenever
  components are added:** `grep -l xstyle ds-bundle/components/core/*/*.d.ts | wc -l`.

## Re-sync risks (rewritten 2026-07-26 — supersedes the 2026-07-20 list)

**Read this first; these are the things that silently go stale.**

1. **🔴 `packages/core/dist/astryx-with-reset.css` is a GENERATED file in a gitignored dir —
   `pnpm build` wipes it and `cfg.cssEntry` points AT it.** If it is missing, the build falls
   back to `[CSS_FROM_STORYBOOK]` and every preview silently regresses to the broken
   ⅓-complete stylesheet (invisible filled buttons). **Regenerate before every sync:**
   ```bash
   { cat packages/core/src/reset.css; echo; cat packages/core/dist/astryx.css; echo;
     cat .design-sync/story-local.css; } > packages/core/dist/astryx-with-reset.css
   ```
   Sanity check after building: `grep -c astryx-button ds-bundle/_ds_bundle.css` is not the
   test — use `grep -c "border-width: 0" ds-bundle/_ds_bundle.css` (reset present) and confirm
   the log says `css: packages/core/dist/astryx-with-reset.css`, NOT `[CSS_FROM_STORYBOOK]`.
2. **`.design-sync/story-local.css` is derived from a previous build's `_preview/stylex.css`.**
   If story-local demo styles change, it goes stale and those styles render flat again.
   Regenerate via the two-pass recipe in the story-local bullet above.
3. **`.design-sync/docs/*.md` are generated from `packages/core/src/**/<Name>.doc.mjs` via the
   repo's own CLI.** They are committed build inputs — regenerate whenever a `.doc.mjs`
   changes, or `.prompt.md` ships stale guidance to the design agent.
4. **`previewNeutralTheme` is pinned to the BUILT `packages/themes/neutral/dist/source.mjs`.**
   Run `pnpm -F @astryxdesign/theme-neutral build` before re-syncing (deterministic no-op if
   unchanged). If that path/filename moves, `extraEntries` breaks.
5. **`.design-sync/sb-reference/` is gitignored** — a fresh clone must rebuild it
   (`npx storybook build -c apps/storybook/.storybook -o "$(git rev-parse --show-toplevel)/.design-sync/sb-reference"`),
   and so must any run where DS source changed (else `[REFERENCE_STALE?]` and you grade against
   the OLD design). Also gitignored and needed on a fresh clone: the `.ds-sync/` deps +
   chromium, and `ln -sfn ../.ds-sync/node_modules .design-sync/node_modules` for the fork.
6. **`.design-sync/previews/AspectRatio.tsx` is an OWNED preview that SHADOWS the generated
   one forever.** It exists only because the story authors its gradient with the `background`
   shorthand, which the story-compile fork drops. **If the shorthand bug is ever fixed
   (see the ACCEPTED bullet above), DELETE this file** so the generated preview takes over.
7. **Verified only PARTIALLY:** overlay/portal components were graded in their CLOSED state
   only (see the scope-limit bullet); `[STORY_CAP]` capped several components at their first 6
   stories (Button was raised to 14 deliberately as the canary); and 41 stories are accepted
   `close` — 35-ish of those are the theme-override divergence, the rest are the shorthand and
   tall-story-capture items. None are unexplained.
8. **Toolchain assumptions:** node v26, chromium via the staged `.ds-sync/`, and network egress
   to `picsum.photos` / `i.pravatar.cc` / `images.unsplash.com` during capture. Without egress
   those stories blank on BOTH panels and grades falsely pass — `[ASSETS_BLOCKED]` naming only
   `invalid-url.example` / `also-invalid.example` is the benign case (deliberate fallback URLs).
9. _*67 storybook titles (Chart*, Chat, CoordinatedViews, …) belong to
   `@astryxdesign/charts` / `vega` / `lab`, not `core`_* — correctly excluded, not a bug. They
   could be synced as separate design-system projects later.
10. **The `story-imports.mjs` fork** is tied to Astryx's pattern of calling `stylex.create()`
    directly in story files. Harmless if that pattern disappears (compiling files that don't
    call it is a no-op), but it IS in the grade contract — editing it re-grades all 98.
