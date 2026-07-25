# TopNavMenu

Navigation item that displays a hover-triggered popover menu with rich items containing an icon, title, and optional description.

**Import:** `import {TopNavMenu} from '@astryxdesign/core/TopNav';`

## Props

| Prop        | Type                   | Default | Description                                                          |
| ----------- | ---------------------- | ------- | -------------------------------------------------------------------- |
| `label`     | `string`               | —       | Visible label for the trigger button. **(required)**                 |
| `items`     | `TopNavMenuItemData[]` | —       | Menu items to display in the hover popover. **(required)**           |
| `delay`     | `number`               | `150`   | Delay in milliseconds before showing the menu on hover.              |
| `hideDelay` | `number`               | `200`   | Delay in milliseconds before hiding the menu after the mouse leaves. |

Related block templates:

TopNavHoverMenu
Navigation bar with a hover-triggered dropdown menu showing product items with icons and descriptions.
TopNavMultipleDropdowns
Navigation bar with multiple hover-triggered dropdown menus that auto-close when switching between them.
TopNavMenuBasic
A dropdown menu inside a TopNav built from an items array with icons and descriptions. Use to group related destinations under a single trigger.
TopNavMenuShowcase
Demonstrates TopNavMenu with a hover-triggered dropdown containing items with icons and descriptions.
