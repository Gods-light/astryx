---
'@astryxdesign/core': patch
---

[chore] Thumbnail: the remove button now uses a fixed translucent-black scrim (`rgba(0,0,0,.25)`) with a white (`--color-on-dark`) X, instead of detecting image luminance to adapt its colors. It reads consistently over any image and no longer depends on the theme's `--color-neutral`.

@kentonquatman
