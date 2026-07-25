---
'@astryxdesign/core': patch
---

[chore] Standardize dev-time console warnings behind `useDevWarning`, `devWarn`, `devError`, and `warnOnce` utilities. Component warnings now fire once per mount via a ref + effect (never on every render) and share a consistent `Component: message` format. Warning text is unchanged in substance; the message prefix is now normalized (e.g. `[Table]`/`[Astryx]` become `Table:`/`Theme:`).

@cixzhang
