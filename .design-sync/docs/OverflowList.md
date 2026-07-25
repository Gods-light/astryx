# OverflowList

A horizontal list that automatically hides items when they exceed the available width. Use OverflowList for breadcrumbs, toolbars, tag lists, or any row that needs to collapse gracefully at smaller sizes.

**Import:** `import {OverflowList} from '@astryxdesign/core/OverflowList';`

## Best Practices

- **Do:** Provide a meaningful overflowRenderer: a "+N more" badge, a dropdown, or a count indicator.
- **Do:** Set minVisibleItems to keep key items visible regardless of container size.
- **Don't:** Use OverflowList for vertical layouts; it only works with horizontal rows.

## Props

| Prop               | Type                                           | Default          | Description                                                                                                                                        |
| ------------------ | ---------------------------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`         | `ReactNode`                                    | —                | Items to render. Each child should be a single element. **(required)**                                                                             |
| `overflowRenderer` | `(overflowItems: OverflowItem[]) => ReactNode` | —                | Render function for the overflow indicator. Receives the list of hidden items (each with child and index). Only called when items are overflowing. |
| `gap`              | `SpacingStep`                                  | `2`              | Gap between items as a spacing token step (0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10).                                                                  |
| `minVisibleItems`  | `number`                                       | `0`              | Minimum number of items to always show, even when overflowing.                                                                                     |
| `collapseFrom`     | `'start'                                       | 'end'`           | `'end'`                                                                                                                                            | Which end to collapse items from when overflow occurs.                                                                                                                                                                                   |
| `behavior`         | `'observeSelf'                                 | 'observeParent'` | `'observeSelf'`                                                                                                                                    | Controls which element is measured for available width. 'observeSelf' uses the container's own width. 'observeParent' observes the parent element, useful when the list should stay content-sized while still detecting available space. |
| `xstyle`           | `StyleXStyles`                                 | —                | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value, not an inline style object.                |

## Theming

| Component class        | Preferred data attributes | Props | States |
| ---------------------- | ------------------------- | ----- | ------ |
| `astryx-overflow-list` | —                         | —     | —      |

Override in defineTheme:

```ts
components: {
  'overflow-list': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

OverflowListCollapseFromStartList
Overflow list that hides items from the start, keeping the latest visible
OverflowListOverflowBadges
Resizable row of badges that collapses into a count badge on overflow
OverflowListOverflowDropdownActions
Action toolbar that collapses overflow buttons into a dropdown menu
OverflowListShowcase
A list of buttons that collapses overflowing items into a +N indicator.
