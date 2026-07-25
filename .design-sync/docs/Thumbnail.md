# Thumbnail

Thumbnail displays a compact, square preview of an image attachment. It shows a shimmer effect while uploading, the image on success, and a placeholder icon when no source is set. Use it in chat composers, file upload lists, or anywhere you need a small image preview with optional remove and click actions.

**Import:** `import {Thumbnail} from '@astryxdesign/core/Thumbnail';`

## Anatomy

| Element        | Required | Description                                                                                                                                 |
| -------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Image          | No       | The preview image, displayed as a square with cover fit.                                                                                    |
| Placeholder    | No       | An image silhouette icon shown when no src is provided.                                                                                     |
| Remove button  | No       | An overlaid close button in the top-right corner. Appears when onRemove is set. Uses APCA luminance detection to stay visible on any image. |
| Upload overlay | No       | A semi-transparent overlay with a spinner, shown when isLoading is true and a src preview is available.                                     |
| Skeleton       | No       | A shimmer animation shown when isLoading is true and no src is set.                                                                         |

## Best Practices

- **Do:** Always provide a label prop with the file name so the thumbnail and its remove button are accessible to screen readers and show a tooltip on hover.
- **Do:** Use isLoading without a src to show a skeleton during initial upload, and isLoading with a src to show a spinner overlay once a preview URL is available.
- **Do:** Pair onClick with a lightbox or detail view so users can inspect the full image; the thumbnail adds button semantics and a hover shadow automatically.
- **Don't:** Don't use Thumbnail for non-image file types like PDFs or spreadsheets; use a file attachment component with an appropriate icon instead.
- **Don't:** Don't omit alt text when a src is provided; screen readers need a description of the image content, not just the file name from label.

## Props

| Prop          | Type                            | Default | Description                                                                                                                                         |
| ------------- | ------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src`         | `string`                        | —       | Image source URL.                                                                                                                                   |
| `alt`         | `string`                        | —       | Alt text for the image.                                                                                                                             |
| `label`       | `string`                        | —       | Accessible label (e.g. file name). Shown as tooltip on hover.                                                                                       |
| `onRemove`    | `(e: React.MouseEvent) => void` | —       | Callback for the overlaid remove button.                                                                                                            |
| `onClick`     | `(e: React.MouseEvent) => void` | —       | Click handler. Adds button semantics and hover shadow.                                                                                              |
| `isLoading`   | `boolean`                       | `false` | Shows skeleton (no src) or upload overlay (with src).                                                                                               |
| `isDisabled`  | `boolean`                       | `false` | Whether the thumbnail is disabled.                                                                                                                  |
| `xstyle`      | `StyleXStyles`                  | —       | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value, not an inline style object like style={{}}. |
| `className`   | `string`                        | —       | CSS class name for the root element. Prefer xstyle for styling; className is provided for integration with non-StyleX systems.                      |
| `style`       | `CSSProperties`                 | —       | Inline styles for the root element. Prefer xstyle for styling; inline styles bypass StyleX optimization.                                            |
| `data-testid` | `string`                        | —       | Test selector for automated testing frameworks.                                                                                                     |

## Theming

| Component class    | Preferred data attributes | Props | States |
| ------------------ | ------------------------- | ----- | ------ |
| `astryx-thumbnail` | —                         | —     | —      |

Override in defineTheme:

```ts
components: {
  'thumbnail': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

ChatComposerDrawerAttachments
Drawer with two rows: a scrollable carousel of image thumbnails and a row of removable file tokens. Omit count to keep the drawer always expanded.
LightboxGallery
A thumbnail grid that opens a fullscreen gallery. Clicking any thumbnail opens the lightbox at that index. Prev/next navigation lets users browse all images without closing.
LightboxZoom
A lightbox with zoom and pan enabled. Double-click the image to zoom in; drag to pan around. Double-click again or use the close button to exit.
ThumbnailDisabled
Thumbnails in the disabled state with reduced opacity. The remove button and click handler are suppressed when disabled.
ThumbnailGallery
A row of clickable thumbnails with labels that open a detail view. Use for image attachment lists where users need to preview and manage uploads.
ThumbnailRemovable
Thumbnails with a remove button overlay. The close button uses APCA luminance detection to stay visible on both dark and light images.
ThumbnailShowcase
A thumbnail with an image and label.
ThumbnailStates
All visual states side by side: image loaded, placeholder, skeleton loading, and upload overlay. Demonstrates the full lifecycle of a thumbnail from empty to loaded.
