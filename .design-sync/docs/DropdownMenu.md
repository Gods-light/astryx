# DropdownMenu

A dropdown menu that displays a list of actionable items in a popup triggered by a button. Use to present action options as a next step in a process, or to offer contextual actions without cluttering the interface.

**Import:** `import {DropdownMenu} from '@astryxdesign/core/DropdownMenu';`

## Best Practices

- **Do:** Keep menu items concise and action-oriented so users can scan options quickly.
- **Do:** Use sections and dividers to group related actions when the menu has many items.
- **Don't:** Use a DropdownMenu for navigation; use a navigation component instead.
- **Don't:** Place more than 10–12 items in a single menu without grouping them into sections.

## Props

| Prop           | Type                                        | Default             | Description                                                                                                                                                                                                            |
| -------------- | ------------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `button`       | `DropdownMenuButtonProps`                   | `{ label: 'Menu' }` | Props for the trigger button (Button props except onClick).                                                                                                                                                            |
| `items`        | `DropdownMenuOption[]`                      | —                   | Array of menu entries. Each entry is one of: an action item `{label, onClick?, icon?, isDisabled?}`, a divider `{type: "divider"}`, or a section `{type: "section", title?, items: [...action items]}`. **(required)** |
| `isMenuOpen`   | `boolean`                                   | —                   | Controlled open state for the menu.                                                                                                                                                                                    |
| `onOpenChange` | `(isOpen: boolean) => void`                 | —                   | Callback fired when the open state changes.                                                                                                                                                                            |
| `menuWidth`    | `number                                     | string`             | —                                                                                                                                                                                                                      | Custom menu width; defaults to matching the trigger button width. |
| `onClick`      | `() => void`                                | —                   | Callback fired when the trigger button is clicked.                                                                                                                                                                     |
| `hasChevron`   | `boolean`                                   | `true`              | Whether to show a chevron icon on the trigger button. Set to false for icon-only triggers.                                                                                                                             |
| `children`     | `(item: DropdownMenuItemData) => ReactNode` | —                   | Custom render function for each item in the list.                                                                                                                                                                      |

## Components

### DropdownMenuItem

See `astryx component DropdownMenuItem` for props and usage.

## Theming

| Component class             | Preferred data attributes | Props | States |
| --------------------------- | ------------------------- | ----- | ------ |
| `astryx-dropdown-menu`      | —                         | —     | —      |
| `astryx-dropdown-menu-item` | `data-size`               | size  | —      |

Override in defineTheme:

```ts
components: {
  'dropdown-menu': {
    base: { /* CSS properties */ },
  },
  'dropdown-menu-item': {
    base: { /* CSS properties */ },
  },
}
```

Some properties are set via standard CSS in component overrides:

```ts
components: {
  dropdown-menu: {
    base: {
      borderRadius: '...',
      padding: '...',
    },
  },
}
```

Related block templates:

ChatComposerFooterActions
Chat composer with dropdown menus for a model selector and settings in the footer, and a mic button in the send actions slot.
ChatComposerFullFeatured
Chat composer with all slots populated: collapsible attachment drawer, header actions, context progress bar, footer dropdown menus, and mic button. Shows the maximum composer configuration.
DropdownMenuActions
Action menu with dividers separating safe and destructive operations. Use for row-level actions on items like documents, projects, or records.
DropdownMenuNoChevron
Overflow menu triggered by an icon-only button with no chevron or label text. Use for row-level actions in tables, cards, or lists where a text button would take too much space.
DropdownMenuShowcase
A button that opens a dropdown menu with action items. The menu starts open for preview.
DropdownMenuWithDisabledItems
Menu with selectively disabled items based on permissions. Use when some actions require higher privileges, like admin-only operations.
DropdownMenuWithSections
Menu items organized into titled sections for easy scanning. Use when you have 6+ actions that fall into distinct categories, like Create vs Manage.
DropdownMenuItemBasic
Dropdown menu items with labels and secondary descriptions. Use DropdownMenuItem to render custom menu entries with consistent styling.
DropdownMenuItemShowcase
Dropdown menu with custom-rendered items using DropdownMenuItem for icons and descriptions.
OverflowListOverflowDropdownActions
Action toolbar that collapses overflow buttons into a dropdown menu
