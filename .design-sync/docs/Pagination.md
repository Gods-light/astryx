# Pagination

Pagination lets users step through pages of content. Place it below a table, list, or card grid so users can move forward and backward through results. Pick a variant to match the context: numbered pages for data tables, a count for large lists, compact for tight spaces, or dots for carousels.

**Import:** `import {Pagination} from '@astryxdesign/core/Pagination';`

## Best Practices

- **Do:** Place pagination below the content it controls so users see results before navigating.
- **Do:** Use the pages variant for data tables where users need to jump to a specific page.
- **Do:** Use the count variant with a page size selector when users need to control how many items they see at once.
- **Do:** Use the dots variant for carousels and walkthroughs where the total is small and position matters more than a number.
- **Do:** Pass totalItems when the total is known so users can see how much content remains.
- **Don't:** Show pagination when all items fit on a single page; there is nothing to paginate.
- **Don't:** Use the dots variant for more than about 10 pages; the dots become too small to be useful.
- **Don't:** Place pagination above the content; users expect it at the bottom.

## Props

| Prop               | Type                         | Default        | Description                                                                                                                                         |
| ------------------ | ---------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`             | `number`                     | —              | Current page number (1-based). Page 1 is the first page. **(required)**                                                                             |
| `onChange`         | `(page: number) => void`     | —              | Called when the page changes. **(required)**                                                                                                        |
| `changeAction`     | `(page: number) => void      | Promise<void>` | —                                                                                                                                                   | Async action on page change. Fires after onChange and uses React transitions for built-in loading state. |
| `totalItems`       | `number`                     | —              | Total number of items. Used to calculate page count. Takes precedence over totalPages if both provided.                                             |
| `totalPages`       | `number`                     | —              | Total number of pages. Use when you know page count but not item count.                                                                             |
| `hasMore`          | `boolean`                    | —              | Whether more pages exist after the current one. Use for cursor-based pagination where total is unknown.                                             |
| `pageSize`         | `number`                     | `10`           | Number of items per page. Coerced to a positive integer; non-finite values fall back to the default.                                                |
| `pageSizeOptions`  | `number[]`                   | —              | Available page size options. Shows a page size selector dropdown when provided.                                                                     |
| `onPageSizeChange` | `(pageSize: number) => void` | —              | Called when the page size changes. Automatically resets to page 1.                                                                                  |
| `variant`          | `'pages'                     | 'count'        | 'compact'                                                                                                                                           | 'dots'                                                                                                   | 'none'` | `'pages'` | Visual variant controlling what appears between prev/next buttons. 'pages' shows page number buttons with ellipsis, 'count' shows 'X-Y of Z' text, 'compact' shows 'Page X of Y', 'dots' shows dot indicators, 'none' shows just prev/next buttons. |
| `siblingCount`     | `number`                     | `1`            | Number of page buttons to show on each side of the current page. Only applies when variant='pages'.                                                 |
| `size`             | `'sm'                        | 'md'`          | `'md'`                                                                                                                                              | Size of the pagination controls.                                                                         |
| `isDisabled`       | `boolean`                    | `false`        | Whether the component is disabled.                                                                                                                  |
| `label`            | `string`                     | `'Pagination'` | Accessible label for the navigation landmark.                                                                                                       |
| `xstyle`           | `StyleXStyles`               | —              | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value, not an inline style object like style={{}}. |

## Theming

| Component class         | Preferred data attributes   | Props                             | States |
| ----------------------- | --------------------------- | --------------------------------- | ------ |
| `astryx-pagination`     | `data-size`, `data-variant` | pages, count, compact, dots, none | —      |
| `astryx-pagination-dot` | `data-size`, `data-active`  | size                              | active |

Override in defineTheme:

```ts
components: {
  'pagination': {
    base: { /* CSS properties */ },
    'size:value': { /* variant-specific */ },
  },
  'pagination-dot': {
    base: { /* CSS properties */ },
    'active': { /* state-specific */ },
  },
}
```

Related block templates:

PaginationDotsCarousel
A review carousel using dot pagination to step through testimonial cards. Use the dots variant for carousels, galleries, and any paged content where the total is small and visible position matters more than a page number.
PaginationPageSize
A transactions table with pagination and a page size dropdown at the bottom. Shows how pagination works as a footer below real content, with adjustable rows per page.
PaginationVariants
All four display variants stacked: dots, compact, count, and pages. A quick visual reference for choosing the right variant.
PaginationWithTable
Pagination below a data table with client-side page slicing. Use the count variant with small size for dense data views where users need to see item ranges.
