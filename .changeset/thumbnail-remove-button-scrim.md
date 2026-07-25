---
'@astryxdesign/core': patch
---

[chore] Thumbnail: the remove button now uses a fixed backing (`rgba(0,0,0,.4)`) and a white (`--color-on-dark`) X in both light and dark mode, instead of detecting image luminance to adapt its colors. The hover/press feedback keeps the standard secondary Button overlay, and it no longer depends on the theme's `--color-neutral`.

@kentonquatman
