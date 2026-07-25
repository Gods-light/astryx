# Grid

A CSS grid layout container for arranging children in rows and columns. Use Grid for card galleries, dashboards, and any multi-column layout. Supports fixed column counts and responsive columns that reflow based on available width.

**Import:** `import {Grid} from '@astryxdesign/core/Grid';`

## Best Practices

- **Do:** Use responsive columns for layouts that should adapt to screen size: `columns={{minWidth: 280}}`.
- **Do:** Cap the column count with `max` to prevent rows from getting too wide on large screens.
- **Do:** Use `repeat: 'fill'` (the default) for consistent item widths. Use `'fit'` when items should stretch to fill leftover space.
- **Don't:** Write manual CSS grid; Grid handles spacing and responsive behavior for you.
- **Don't:** Use `HStack` with wrapping for grids; use Grid instead.
- **Do:** Track templates use CSS-variable indirection (not raw inline styles), so `xstyle` overrides of `gridTemplateColumns` (including inside `@media` queries) take effect.

## Props

| Prop            | Type            | Default                                          | Description                                                                                                                                         |
| --------------- | --------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `columns`       | `number         | {minWidth: number, max?: number, repeat?: 'fill' | 'fit'}`                                                                                                                                             | —   | Column configuration. Use a number for fixed columns (e.g. `columns={3}`). Use an object for responsive columns: `minWidth` sets the minimum column width in px, `repeat` controls track behavior (`"fill"` preserves empty tracks for consistent widths, `"fit"` collapses empty tracks so items stretch; defaults to `"fill"`), and `max` caps the maximum number of columns. |
| `minChildWidth` | `number`        | —                                                | Deprecated: use `columns={{minWidth: 280}}` instead. Minimum item width in px; enables responsive auto-fit.                                         |
| `width`         | `SizeValue`     | —                                                | Container width. Numbers are treated as pixels, strings are used as-is.                                                                             |
| `height`        | `SizeValue`     | —                                                | Container height. Numbers are treated as pixels, strings are used as-is.                                                                            |
| `maxWidth`      | `SizeValue`     | —                                                | Maximum container width. Numbers are treated as pixels, strings are used as-is.                                                                     |
| `minHeight`     | `SizeValue`     | —                                                | Minimum container height. Numbers are treated as pixels, strings are used as-is.                                                                    |
| `gap`           | `SpacingStep`   | —                                                | Spacing between all items.                                                                                                                          |
| `rowGap`        | `SpacingStep`   | —                                                | Row spacing; overrides `gap` for the row axis.                                                                                                      |
| `columnGap`     | `SpacingStep`   | —                                                | Column spacing; overrides `gap` for the column axis.                                                                                                |
| `align`         | `GridAlignment` | `'stretch'`                                      | Vertical alignment of items.                                                                                                                        |
| `justify`       | `GridAlignment` | `'stretch'`                                      | Horizontal alignment of items.                                                                                                                      |
| `children`      | `ReactNode`     | —                                                | Grid content.                                                                                                                                       |
| `xstyle`        | `StyleXStyles`  | —                                                | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value: not an inline style object like style={{}}. |

## Components

### GridSpan

See `astryx component GridSpan` for props and usage.

## Theming

| Component class    | Preferred data attributes                                | Props                        | States |
| ------------------ | -------------------------------------------------------- | ---------------------------- | ------ |
| `astryx-grid`      | `data-align`, `data-columns`, `data-gap`, `data-justify` | align, columns, gap, justify | —      |
| `astryx-grid-span` | —                                                        | —                            | —      |

Override in defineTheme:

```ts
components: {
  'grid': {
    base: { /* CSS properties */ },
    'align:value': { /* variant-specific */ },
  },
  'grid-span': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

AspectRatioImageGallery
Grid of images with consistent 4:3 aspect ratios.
BlockquoteTestimonials
Multiple quotes arranged in a card grid for a testimonials section. Combine with Card and Grid to create social-proof layouts.
GridDashboardLayout
Dashboard layout with mixed-size widgets and a full-width summary row
GridGalleryExample
Card gallery with responsive columns that maintain consistent widths
GridResponsiveAutoFit
Responsive grid where cards stretch to fill remaining space
GridShowcase
GridWithGridSpan
Grid with featured items spanning multiple columns and rows
GridSpanColumns
Grid items spanning two of three columns. Wrap a grid child in GridSpan to make it occupy multiple columns for asymmetric layouts.
GridSpanShowcase
GridSpan lets a grid item span multiple columns or rows within an Grid, enabling masonry-style and asymmetric layouts.
LightboxGallery
A thumbnail grid that opens a fullscreen gallery. Clicking any thumbnail opens the lightbox at that index. Prev/next navigation lets users browse all images without closing.
ThemeShowcase
Two visually distinct theme providers wrapping identical content to show how Theme changes the visual treatment of child components.
TopNavMegaMenuItemBasic
Rich link items with an icon, title, and description. Use inside the items slot of a TopNavMegaMenu to describe each destination.
