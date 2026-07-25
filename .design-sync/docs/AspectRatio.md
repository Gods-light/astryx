# AspectRatio

Maintains a fixed width-to-height ratio for its children, regardless of screen size. Use it for media containers like videos, images, thumbnails, or any content that needs consistent proportions.

**Import:** `import {AspectRatio} from '@astryxdesign/core/AspectRatio';`

## Best Practices

- **Do:** Express the ratio as a fraction like `16/9` or `4/3` for readability.
- **Do:** Use for media that needs consistent proportions across screen sizes.
- **Do:** Use `fit="cover"` for images and video so the component sizes the child; the child should not repeat `width`/`height`/`objectFit` styles.
- **Don't:** Use for general layout containers; use standard layout components instead.
- **Don't:** Nest AspectRatio containers; one level is sufficient.

## Props

| Prop       | Type           | Default    | Description                                                                                                                                         |
| ---------- | -------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ratio`    | `number`       | —          | Aspect ratio as width/height (e.g. 16/9, 1). **(required)**                                                                                         |
| `shape`    | `'rectangle'   | 'ellipse'` | `'rectangle'`                                                                                                                                       | Container shape. Both respect the `ratio`. `ellipse` clips to an oval (a circle when `ratio={1}`). |
| `fit`      | `'cover'       | 'contain'  | 'center'`                                                                                                                                           | —                                                                                                  | How the child is sized inside the ratio box. `cover` fills and crops media, `contain` fills and letterboxes, `center` keeps the natural size centered. When omitted, the child styles itself. |
| `children` | `ReactNode`    | —          | Content positioned absolutely to fill the container. **(required)**                                                                                 |
| `xstyle`   | `StyleXStyles` | —          | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value, not an inline style object like style={{}}. |

## Theming

| Component class       | Preferred data attributes | Props | States |
| --------------------- | ------------------------- | ----- | ------ |
| `astryx-aspect-ratio` | `data-shape`              | shape | —      |

Override in defineTheme:

```ts
components: {
  'aspect-ratio': {
    base: { /* CSS properties */ },
    'shape:value': { /* variant-specific */ },
  },
}
```

Related block templates:

AspectRatioCircleImage
Circular container via shape="ellipse" with ratio={1}, ideal for avatars and profile images.
AspectRatioImageGallery
Grid of images with consistent 4:3 aspect ratios.
AspectRatioShowcase
Three aspect ratio containers at equal height (1:1, 4:3, and 16:9), each showing an image with its ratio labeled below.
AspectRatioSquareImage
1:1 square aspect ratio, ideal for avatars and Instagram-style images.
AspectRatioWidescreen
16:9 widescreen aspect ratio wrapping an image.
AspectRatioWithSkeleton
Aspect ratio container with a skeleton loading placeholder.
MediaThemeImageOverlay
A common image card pattern: place text and actions over a dark gradient and wrap the overlay content in MediaTheme mode="dark".
MediaThemeLightScrim
A light scrim over an image. Use MediaTheme mode="light" so text and ghost buttons use dark-on-light tokens.
OverlayBottomStrip
Places compact supporting content in a bottom scrim strip without covering the entire image.
OverlayHoverReveal
Reveals an overlay action on hover or keyboard focus. Use when actions should stay visually quiet until the media receives attention.
OverlayShowcase
A media card with an always-visible scrim and centered action content.
