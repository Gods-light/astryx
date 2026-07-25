# Toolbar

Toolbar is a horizontal bar with left, center, and right areas. Use it for contextual actions within a content area (above a table, inside a card, or in a panel), not as a page-level header. Set the size once on the toolbar and all buttons, inputs, and tabs inside it match automatically.

**Import:** `import {Toolbar} from '@astryxdesign/core/Toolbar';`

## Best Practices

- **Do:** Put secondary actions like "Back" on the left, and primary actions like "Save" on the right.
- **Do:** Make temporary toolbars like bulk selection visually distinct so users can tell they're contextual, for example with a background color or border.
- **Do:** Visually separate the toolbar from the content below it, with a divider, a background variant, or both.
- **Do:** Use Toolbar as a card header when the header has interactive actions like filter or add; it gives you slot layout, keyboard navigation, and size cascading. If the header is just a title with no actions, a LayoutHeader or Section is enough.
- **Don't:** Put too many actions in one toolbar; move less common items into a MoreMenu.
- **Don't:** Set size on individual child buttons; set it once on the toolbar and it cascades automatically.
- **Don't:** Use Toolbar for app-wide navigation like main menu links or sign out; use TopNav or LayoutHeader for that.

## Components

### Toolbar

General-purpose toolbar container with three content slots and roving tabindex.

| Prop            | Type             | Default         | Description                                                              |
| --------------- | ---------------- | --------------- | ------------------------------------------------------------------------ |
| `label`         | `string`         | —               | Accessible label for the toolbar, applied as aria-label. **(required)**  |
| `startContent`  | `ReactNode`      | —               | Content aligned to the start (left in LTR).                              |
| `centerContent` | `ReactNode`      | —               | Centered content. Switches layout to CSS grid (1fr auto 1fr).            |
| `endContent`    | `ReactNode`      | —               | Content aligned to the end (right in LTR).                               |
| `size`          | `'sm'            | 'md'            | 'lg'`                                                                    | `'md'`                                                             | Size of the toolbar. Controls minimum height and coordinates with Button, TextInput, TabList, and Selector; children inherit this size as their default via SizeContext. |
| `gap`           | `SpacingStep`    | `1`             | Gap between items within each slot.                                      |
| `orientation`   | `'horizontal'    | 'vertical'`     | `'horizontal'`                                                           | Orientation for keyboard navigation. Controls arrow key direction. |
| `variant`       | `SectionVariant` | `'transparent'` | Visual variant passed to Section.                                        |
| `xstyle`        | `StyleXStyles`   | —               | StyleX styles for layout customization. Must be a stylex.create() value. |

## Theming

| Component class  | Preferred data attributes | Props | States |
| ---------------- | ------------------------- | ----- | ------ |
| `astryx-toolbar` | `data-size`               | —     | size   |

Override in defineTheme:

```ts
components: {
  'toolbar': {
    base: { /* CSS properties */ },
    'size': { /* state-specific */ },
  },
}
```

Related block templates:

useKeyboardHintHookUsage
Toolbar shows an ephemeral "← → to navigate" hint on first keyboard focus via useKeyboardHint, teaching sighted keyboard users that arrows move within the group.
TableColumnSettingsTable
Table with a column visibility picker in the toolbar. Toggle columns on and off.
ToolbarBulkActions
A compact toolbar with the muted variant for showing bulk selection actions. Use when the user selects multiple items in a list or table and needs quick access to batch operations.
ToolbarCardHeader
A toolbar as a card header with a left-aligned title and icon actions on the right. Use Toolbar instead of LayoutHeader when your card header has interactive actions; Toolbar adds start/end slot layout, keyboard navigation, and automatic size cascading. If the header is just a title with no actions, a LayoutHeader or Section is enough.
ToolbarSizes
Small, medium, and large toolbars side by side. The size prop cascades to child buttons and inputs automatically. Use small in dense UIs like cards, medium for most cases, and large for spacious layouts.
ToolbarTableFilter
A compact toolbar with a search input, Status and Priority filter selectors, and an overflow menu. Use above a data table to let users search, filter, and access view options.
ToolbarThreeSlot
A toolbar with start, center, and end content using the three-column grid layout. Use when you need a centered title or heading with navigation and actions on either side.
ToolbarWithTabs
A toolbar with tabs in the start slot and an action button at the end. Use as a card or section header when content is split into tabs with a primary action alongside.
