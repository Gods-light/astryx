# Lightbox

A fullscreen overlay for viewing images and videos at full resolution. Supports single-item and gallery modes with prev/next navigation, optional zoom and pan for images, and native video controls.

**Import:** `import {Lightbox} from '@astryxdesign/core/Lightbox';`

## Best Practices

- **Do:** Always provide alt text for every image for screen reader accessibility.
- **Do:** Use gallery mode with onIndexChange for multi-image sets.
- **Do:** Enable hasZoom only when viewing high-resolution images that benefit from close inspection.
- **Don't:** Use the lightbox for non-image content; it is specialized for images.
- **Don't:** Nest interactive content inside captions; keep them plain text.

## Props

| Prop            | Type                        | Default          | Description                                                            |
| --------------- | --------------------------- | ---------------- | ---------------------------------------------------------------------- |
| `isOpen`        | `boolean`                   | —                | Whether the lightbox is open. **(required)**                           |
| `onOpenChange`  | `(isOpen: boolean) => void` | —                | Callback when the lightbox open state changes. **(required)**          |
| `media`         | `LightboxMedia              | LightboxMedia[]` | —                                                                      | Media to display. Pass a single object for one item, or an array for gallery mode with prev/next navigation. Each item has src, alt, optional caption and type. **(required)** |
| `index`         | `number`                    | —                | Current index in gallery mode (when media is an array).                |
| `onIndexChange` | `(index: number) => void`   | —                | Callback when the gallery index changes via prev/next navigation.      |
| `hasZoom`       | `boolean`                   | `false`          | Enable zoom on double-click (images only). When zoomed, drag to pan.   |
| `xstyle`        | `StyleXStyles`              | —                | StyleX styles for layout customization. Must be stylex.create() value. |

## Theming

| Component class   | Preferred data attributes | Props | States |
| ----------------- | ------------------------- | ----- | ------ |
| `astryx-lightbox` | —                         | —     | —      |

Override in defineTheme:

```ts
components: {
  'lightbox': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

LightboxGallery
A thumbnail grid that opens a fullscreen gallery. Clicking any thumbnail opens the lightbox at that index. Prev/next navigation lets users browse all images without closing.
LightboxShowcase
A fullscreen image viewer with caption.
LightboxVideo
Opens a video in the lightbox. Native browser controls are available. Zoom and pan are disabled for video items.
LightboxZoom
A lightbox with zoom and pan enabled. Double-click the image to zoom in; drag to pan around. Double-click again or use the close button to exit.
