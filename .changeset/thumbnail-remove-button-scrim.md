---
'@astryxdesign/core': patch
---

[chore] Thumbnail: the remove button now uses a fixed treatment — a translucent-black scrim that darkens on interaction (`rgba(0,0,0,.4)` at rest, `rgba(0,0,0,.5)` on hover/press) with a white (`--color-on-dark`) X — instead of detecting image luminance to adapt its colors. Because it sits over an image, every state is identical in light and dark mode, and it no longer depends on the theme's `--color-neutral` or mode-dependent overlay tokens.

@kentonquatman
