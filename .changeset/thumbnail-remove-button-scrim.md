---
'@astryxdesign/core': patch
---

[chore] Thumbnail: the remove button now uses a fixed treatment — a translucent-black scrim (`rgba(0,0,0,.25)`), a white (`--color-on-dark`) X, and fixed white hover/press tints — instead of detecting image luminance to adapt its colors. Because it sits over an image, every state is identical in light and dark mode, and it no longer depends on the theme's `--color-neutral` or mode-dependent overlay tokens.

@kentonquatman
