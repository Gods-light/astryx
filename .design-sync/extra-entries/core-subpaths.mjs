// Components reachable only via @astryxdesign/core's SUBPATH exports (119 of
// them) and absent from the main dist/index.js barrel. Story files import them
// by subpath, the preview shim redirects those imports to window.Astryx.<Name>,
// and a name the bundle never exported lands as `undefined` — React then throws
// "Element type is invalid ... got: undefined" the moment the story mounts.
// Re-exporting them here puts them on the global so both the previews and the
// claude.ai/design agent can reach them.
//
// Path note: this file is resolved relative to ITS OWN location
// (.design-sync/extra-entries/), while cfg.extraEntries resolves relative to
// PKG_DIR (packages/core) — hence the '../../' on both sides.
export { ToastViewport } from '../../packages/core/dist/Toast/index.js';
