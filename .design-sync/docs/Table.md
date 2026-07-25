# Table

Table displays structured data in rows and columns with consistent dimensionality. It supports rich cell content, sorting, selection, pagination, and column management through a composable plugin system. Use Table for data sets with uniform structure; for simpler or inconsistent data, consider a list or card layout instead.

**Import:** `import {Table} from '@astryxdesign/core/Table';`

## Anatomy

| Element        | Required | Description                                            |
| -------------- | -------- | ------------------------------------------------------ |
| Column Header  | Yes      | Displays titles, sorting controls, and bulk selection. |
| Body Rows      | Yes      | Rows with consistent data structure.                   |
| Footer         | No       | Displays summary or totals.                            |
| Top Bar        | No       | Contains title, toolbar, and filters.                  |
| Bottom Bar     | No       | Contains pagination controls.                          |
| Support Panels | No       | Displays row details in a side panel.                  |

## Best Practices

- **Do:** Use density and divider variants to match the information density and scanning needs of your data.
- **Do:** Compose rich cell content with Astryx components like Badge, StatusDot, and Avatar via renderCell.
- **Do:** Set explicit width on every column using proportional() or pixel(). proportional(1) gives equal flex distribution with a 120px minimum that prevents columns from collapsing on narrow viewports. Omitting width skips the minimum.
- **Do:** Use the data-driven API from React Server Components: proportional(), pixel(), and column definitions without function props are server-safe. Columns using renderCell (or any function prop) need the table wrapped in a "use client" component, since functions cannot cross the server-client boundary.
- **Don't:** Use a table for data without consistent columns. Use a list or card layout for heterogeneous content.
- **Don't:** Enable every plugin at once. Add only the features your use case requires to keep the interface focused.
- **Don't:** Omit width on text-heavy columns; without an explicit proportional() width they have no minimum and can squish to near-zero on mobile.

## Props

| Prop            | Type                             | Default              | Description                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --------------- | -------------------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `data`          | `T[]`                            | —                    | Array of data items to render as rows. T must extend Record<string, unknown> (use `interface MyRow extends Record<string, unknown>` for custom types).                                                                                                                                                                                                                                                                                          |
| `columns`       | `TableColumn<T>[]`               | —                    | Column definitions: each column has {key, header, width?, align?, renderCell?}. The `header` field sets the column heading text. If omitted, columns are auto-generated from data object keys. The `width` field is typed as `ColumnWidth` (not a number) — use `proportional(n)` or `pixel(n)` helpers imported from `@astryxdesign/core/Table`. Example: `width: pixel(120)` for 120px fixed, `width: proportional(1)` for flex distribution. |
| `idKey`         | `(keyof T & string)              | ((item: T) => string | number)`                                                                                                                                                                                                                                                                                                                                                                                                                                        | —                                                                                                                                                                                                                                            | Row key for React reconciliation. Pass a property name string or a function. Falls back to row index if omitted. |
| `density`       | `'compact'                       | 'balanced'           | 'spacious'`                                                                                                                                                                                                                                                                                                                                                                                                                                     | `'balanced'`                                                                                                                                                                                                                                 | Row density controlling cell padding and font size.                                                              |
| `dividers`      | `'rows'                          | 'columns'            | 'grid'                                                                                                                                                                                                                                                                                                                                                                                                                                          | 'none'`                                                                                                                                                                                                                                      | `'rows'`                                                                                                         | Divider style rendered between cells. |
| `isStriped`     | `boolean`                        | `false`              | Applies a background wash to even-numbered rows.                                                                                                                                                                                                                                                                                                                                                                                                |
| `hasHover`      | `boolean`                        | `false`              | Applies a hover highlight background to rows on pointer devices.                                                                                                                                                                                                                                                                                                                                                                                |
| `verticalAlign` | `'middle'                        | 'top'                | 'bottom'`                                                                                                                                                                                                                                                                                                                                                                                                                                       | `'middle'`                                                                                                                                                                                                                                   | Vertical alignment for body row cells. Controls `vertical-align` on the `<td>` elements.                         |
| `textOverflow`  | `'wrap'                          | 'truncate'`          | `'wrap'`                                                                                                                                                                                                                                                                                                                                                                                                                                        | How body cell text behaves when it exceeds the column width. 'wrap' lets text wrap and the row grow taller; 'truncate' clips with an ellipsis (default-rendered cells show a tooltip on hover when truncated). Header cells always truncate. |
| `plugins`       | `Record<string, TablePlugin<T>>` | —                    | Named plugins that extend table behavior via the transform pipeline. Converted to an ordered array internally.                                                                                                                                                                                                                                                                                                                                  |
| `children`      | `ReactNode`                      | —                    | Children mode: render TableRow/TableCell directly instead of using data-driven rendering.                                                                                                                                                                                                                                                                                                                                                       |
| `xstyle`        | `StyleXStyles`                   | —                    | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value: not an inline style object like style={{}}.                                                                                                                                                                                                                                                                                             |

## Components

### TableRow

See `astryx component TableRow` for props and usage.

### TableCell

See `astryx component TableCell` for props and usage.

### TableHeaderCell

See `astryx component TableHeaderCell` for props and usage.

### useTableSelection

See `astryx component useTableSelection` for props and usage.

### useTableSelectionState

See `astryx component useTableSelectionState` for props and usage.

### useTableSortable

See `astryx component useTableSortable` for props and usage.

### useTablePagination

See `astryx component useTablePagination` for props and usage.

### useTableColumnSettings

See `astryx component useTableColumnSettings` for props and usage.

### useTableFiltering

See `astryx component useTableFiltering` for props and usage.

### useTableFilterState

See `astryx component useTableFilterState` for props and usage.

## Theming

| Component class               | Preferred data attributes | Props | States |
| ----------------------------- | ------------------------- | ----- | ------ |
| `astryx-base-table`           | —                         | —     | —      |
| `astryx-table`                | —                         | —     | —      |
| `astryx-table-scroll-wrapper` | —                         | —     | —      |
| `astryx-table-header`         | —                         | —     | —      |
| `astryx-table-body`           | —                         | —     | —      |
| `astryx-table-footer`         | —                         | —     | —      |
| `astryx-table-row`            | —                         | —     | —      |
| `astryx-table-cell`           | —                         | —     | —      |
| `astryx-table-header-cell`    | —                         | —     | —      |

Override in defineTheme:

```ts
components: {
  'base-table': {
    base: { /* CSS properties */ },
  },
  'table': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

PaginationPageSize
A transactions table with pagination and a page size dropdown at the bottom. Shows how pagination works as a footer below real content, with adjustable rows per page.
PaginationWithTable
Pagination below a data table with client-side page slicing. Use the count variant with small size for dense data views where users need to see item ranges.
PowerSearchSearchWithTable
Composition of PowerSearch with Table using usePowerSearchConfig to auto-generate config and filter data.
ColumnResizeHookUsage
A Table using useTableColumnResize. Drag the right edge of any column header to resize; widths are committed on release. The last proportional column flexes to fill remaining space.
StickyColumnsHookUsage
A Table using useTableStickyColumns to pin the Name column to the start edge and Status to the end edge. Scroll horizontally; pinned columns stay in view with a soft shadow over the scrolling content.
TableColumnSettingsTable
Table with a column visibility picker in the toolbar. Toggle columns on and off.
TableFilterableTable
Table with popover filter controls triggered by icons in column headers.
TableGridDividersTable
Compact table with grid dividers showing both row and column borders, suited for dense numeric data.
TableInCard
Table composed inside a card with a heading, demonstrating container bleed alignment.
TableInlineFilterTable
Table with inline filter controls rendered directly below each column header.
TablePaginatedTable
Paginated data table navigating through a larger dataset page by page.
TableResizableTable
Table with draggable column resize handles. Drag the right edge of any header to resize.
TableRichCellTable
Table with rich cell content using Link for emails and Badge for role labels.
TableRowExpansionTable
A tree table using useTableRowExpansion with inherited columns. Child rows use the same columns as parents, indented by depth. Click the chevron or right-click to expand/collapse.
TableSelectableTable
Table with row selection checkboxes and a select-all header checkbox.
TableShowcase
Data-driven table with proportional and pixel column widths and hover highlighting.
TableSortableTable
Table with sortable columns, click headers to sort ascending or descending.
TableStripedTable
Table with alternating row colors and hover highlighting for easy scanning.
ToolbarBulkActions
A compact toolbar with the muted variant for showing bulk selection actions. Use when the user selects multiple items in a list or table and needs quick access to batch operations.
ToolbarTableFilter
A compact toolbar with a search input, Status and Priority filter selectors, and an overflow menu. Use above a data table to let users search, filter, and access view options.
