# MoreMenu

MoreMenu is a three-dot button that opens a list of actions. Use it for secondary actions that don't need to be always visible, like in table rows, card headers, or toolbars.

**Import:** `import {MoreMenu} from '@astryxdesign/core/MoreMenu';`

## Best Practices

- **Do:** Use for overflow or secondary actions; keep primary actions visible outside the menu.
- **Do:** Use dividers or sections to group related actions when the menu has many items.
- **Don't:** Hide primary actions inside a MoreMenu; they should be directly visible.

## Props

| Prop         | Type                   | Default          | Description                                                                                                                                         |
| ------------ | ---------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`      | `DropdownMenuOption[]` | —                | Menu items: data array of actions, dividers, and sections. Same type as DropdownMenu items prop. **(required)**                                     |
| `label`      | `string`               | `'More options'` | Accessible label for the trigger button (aria-label) and tooltip text.                                                                              |
| `variant`    | `ButtonVariant`        | `'ghost'`        | Visual style variant of the trigger button.                                                                                                         |
| `size`       | `ButtonSize`           | `'md'`           | Size of the trigger button.                                                                                                                         |
| `icon`       | `ReactNode`            | —                | Override the default three-dot icon. Accepts any ReactNode.                                                                                         |
| `isDisabled` | `boolean`              | `false`          | Whether the menu trigger is disabled.                                                                                                               |
| `xstyle`     | `StyleXStyles`         | —                | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value, not an inline style object like style={{}}. |

## Theming

| Component class    | Preferred data attributes | Props | States |
| ------------------ | ------------------------- | ----- | ------ |
| `astryx-more-menu` | —                         | —     | —      |

Override in defineTheme:

```ts
components: {
  'more-menu': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

MoreMenuDefaultMoreMenu
Basic three-dot overflow menu with simple text-only action items.
MoreMenuShowcase
A basic three-dot menu with simple action items.
MoreMenuWithDividers
A three-dot menu with a divider separating destructive actions from safe ones.
MoreMenuWithSections
A three-dot menu with actions organized into labeled groups.
SideNavEndContent
Side navigation items with badges, counts, and context menus as trailing content.
ToolbarTableFilter
A compact toolbar with a search input, Status and Priority filter selectors, and an overflow menu. Use above a data table to let users search, filter, and access view options.
