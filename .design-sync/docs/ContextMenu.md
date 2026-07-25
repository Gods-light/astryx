# ContextMenu

A right-click context menu that appears at the cursor position. Use to provide contextual actions for specific elements or regions without cluttering the UI with visible buttons.

**Import:** `import {ContextMenu} from '@astryxdesign/core/ContextMenu';`

## Best Practices

- **Do:** Keep menu items concise and action-oriented; users expect quick access to contextual actions.
- **Do:** Use sections and dividers to group related actions when the menu has many items.
- **Do:** Ensure all context menu actions are also accessible via other UI elements for keyboard-only users.
- **Don't:** Use a ContextMenu as the only way to access important actions; not all users know to right-click.
- **Don't:** Place more than 10–12 items in a single menu without grouping them into sections.

## Props

| Prop          | Type                  | Default          | Description                                                                                                                                                                                                            |
| ------------- | --------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`    | `ReactNode`           | —                | The trigger area: right-click on this content to open the menu. **(required)**                                                                                                                                         |
| `items`       | `ContextMenuOption[]` | —                | Array of menu entries. Each entry is one of: an action item `{label, onClick?, icon?, isDisabled?}`, a divider `{type: "divider"}`, or a section `{type: "section", title?, items: [...action items]}`. **(required)** |
| `menuContent` | `ReactNode`           | —                | Custom JSX menu content for compound mode. Use instead of items for dynamic or stateful menus.                                                                                                                         |
| `menuWidth`   | `number               | string`          | `'160px'`                                                                                                                                                                                                              | Custom menu width. |
| `size`        | `'sm'                 | 'md'             | 'lg'`                                                                                                                                                                                                                  | `'md'`             | Size of menu items: controls padding density. |
| `label`       | `string`              | `'Context menu'` | Accessible name for the menu surface, announced when it opens.                                                                                                                                                         |
| `isDisabled`  | `boolean`             | `false`          | When true, right-click shows the native browser context menu instead.                                                                                                                                                  |

## Components

### ContextMenuItem

See `astryx component ContextMenuItem` for props and usage.

## Theming

| Component class       | Preferred data attributes | Props | States |
| --------------------- | ------------------------- | ----- | ------ |
| `astryx-context-menu` | —                         | —     | —      |

Override in defineTheme:

```ts
components: {
  'context-menu': {
    base: { /* CSS properties */ },
  },
}
```

Some properties are set via standard CSS in component overrides:

```ts
components: {
  context-menu: {
    base: {
      borderRadius: '...',
      padding: '...',
    },
  },
}
```

Related block templates:

ContextMenuBasic
A right-click area with action items and a divider separating a destructive action. Use to provide contextual actions for a specific element or region.
ContextMenuShowcase
A right-click area that opens a context menu with action items.
ContextMenuItemBasic
Context menu items with labels and secondary descriptions. Use ContextMenuItem to render custom menu entries with consistent styling.
ContextMenuItemShowcase
Context menu with custom-rendered items using ContextMenuItem for icons and descriptions.
