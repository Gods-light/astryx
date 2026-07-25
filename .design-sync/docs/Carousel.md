# Carousel

Carousel scrolls a row of items horizontally when they overflow the available width. Use it for card grids, image galleries, product lists, or any set of items that should be browsable without taking up the full page.

**Import:** `import {Carousel} from '@astryxdesign/core/Carousel';`

## Anatomy

| Element            | Required | Description                                                                                                                               |
| ------------------ | -------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Scroll container   | Yes      | The horizontal overflow area that holds all items.                                                                                        |
| Items              | Yes      | The children rendered in a row inside the scroll container. With hasSnap, each item snaps to the start edge.                              |
| Fade edges         | No       | Gradient fades on the left and right edges that indicate more content is available. Enabled by default, disable with hasEdgeFade={false}. |
| Navigation buttons | No       | Prev/next buttons that appear when the content can scroll in that direction. Enabled by default, disable with hasButtons={false}.         |

## Best Practices

- **Do:** Enable scroll-snap when each item should land precisely at the start edge, like a gallery or product list.
- **Do:** Always provide an aria-label that describes what the carousel contains, like "Featured products" or "Team members".
- **Do:** Use a consistent gap and item width so the carousel looks intentional, not like content overflowing by accident.
- **Don't:** Use a carousel for content every user must see. Not everyone scrolls horizontally, so put critical content above the fold.
- **Don't:** Auto-advance items. Let the user scroll at their own pace.
- **Don't:** Nest carousels. A carousel inside a carousel is confusing and breaks keyboard navigation.

## Props

| Prop          | Type                        | Default      | Description                                                                                             |
| ------------- | --------------------------- | ------------ | ------------------------------------------------------------------------------------------------------- |
| `children`    | `ReactNode`                 | —            | Carousel items rendered in a horizontal scroll container. **(required)**                                |
| `gap`         | `0                          | 0.5          | 1                                                                                                       | 1.5 | 2   | 3   | 4`  | `1` | Gap between items using the spacing token scale. |
| `hasButtons`  | `boolean`                   | `true`       | Show prev/next navigation buttons when content is scrollable.                                           |
| `hasEdgeFade` | `boolean`                   | `true`       | Show a gradient edge-fade mask when content overflows, signalling that more items exist off-screen.     |
| `hasSnap`     | `boolean`                   | `false`      | Enable scroll-snap so each child snaps to the start edge.                                               |
| `padding`     | `0                          | 0.5          | 1                                                                                                       | 1.5 | 2   | 3   | 4   | 5   | 6                                                | 8   | 10` | —   | Inline padding inside the scroll container, with matching scroll-padding so snap points align to the content edge. |
| `aria-label`  | `string`                    | `'Carousel'` | Accessible label for the carousel region.                                                               |
| `ref`         | `React.Ref<HTMLDivElement>` | —            | Ref forwarded to the root element.                                                                      |
| `xstyle`      | `StyleXStyles`              | —            | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value. |
| `className`   | `string`                    | —            | CSS class name for the root element. Prefer xstyle for styling.                                         |
| `style`       | `CSSProperties`             | —            | Inline styles for the root element. Prefer xstyle.                                                      |
| `data-testid` | `string`                    | —            | Test selector for automated testing frameworks.                                                         |

## Theming

| Component class   | Preferred data attributes | Props | States |
| ----------------- | ------------------------- | ----- | ------ |
| `astryx-carousel` | —                         | —     | —      |

Override in defineTheme:

```ts
components: {
  'carousel': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

CarouselCards
A horizontally scrollable row of cards with snap scrolling enabled. Use for feature grids, product lists, or any set of cards that overflows the available width. The carousel adds fade edges and navigation buttons automatically.
CarouselShowcase
A horizontal carousel of cards with scroll-snap and navigation buttons. Scroll or click the arrows to browse.
CarouselSnap
Scroll-snap carousel with navigation buttons and team member cards. Each card snaps to the start edge on scroll. Use when items should be viewed one at a time rather than as a continuous strip.
ChatComposerDrawerAttachments
Drawer with two rows: a scrollable carousel of image thumbnails and a row of removable file tokens. Omit count to keep the drawer always expanded.
