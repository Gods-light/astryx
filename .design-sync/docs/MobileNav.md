# MobileNav

A slide-out drawer for mobile navigation. MobileNav is the mobile counterpart to SideNav and accepts the same children. Use it on narrow viewports where a persistent sidebar is not practical. Inside AppShell, use MobileNavToggle as the trigger; it reads state from context automatically.

**Import:** `import {MobileNav} from '@astryxdesign/core/MobileNav';`

## Best Practices

- **Do:** Share the same nav items between MobileNav and SideNav by extracting them into a variable.
- **Do:** Provide a header when the drawer's purpose is not obvious from its content.
- **Do:** Inside AppShell, use MobileNavToggle to open the drawer; it reads state from context. Do not pass isOpen/onOpenChange to the toggle.
- **Don't:** Use MobileNav on desktop: use a persistent SideNav instead.

## Components

### MobileNav

A slide-out drawer for mobile navigation. Accepts SideNav children.

| Prop           | Type                        | Default | Description                                                                                                                                                            |
| -------------- | --------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isOpen`       | `boolean`                   | —       | Whether the drawer is open. Inside AppShell, this is managed automatically via context. Outside AppShell, provide this prop to control the drawer yourself.            |
| `onOpenChange` | `(isOpen: boolean) => void` | —       | Called when the drawer visibility changes (backdrop click, Escape key, or close button). Inside AppShell, this is managed automatically via context.                   |
| `children`     | `ReactNode`                 | —       | Drawer content: typically SideNavSection/SideNavItem, or any ReactNode. **(required)**                                                                                 |
| `header`       | `ReactNode`                 | —       | Header content for the drawer. Rendered next to the close button. Pass a string for a simple text heading, or a ReactNode for custom content (logo, search bar, etc.). |
| `width`        | `number`                    | `320`   | Drawer width in pixels. Capped at 85vw to prevent overflow on small screens.                                                                                           |
| `side`         | `'start'                    | 'end'   | 'auto'`                                                                                                                                                                | `'auto'` | Which side the drawer slides from. Start is left in LTR, right in RTL. Auto picks a side based on the trigger position. |

### MobileNavToggle

Hamburger button that opens/closes the mobile nav drawer. Reads open state from AppShell context automatically: does NOT accept isOpen or onOpenChange props. Renders nothing above the mobile breakpoint.

| Prop       | Type        | Default             | Description                                                     |
| ---------- | ----------- | ------------------- | --------------------------------------------------------------- |
| `children` | `ReactNode` | —                   | Custom content to render instead of the default hamburger icon. |
| `label`    | `string`    | `'Open navigation'` | Accessible label for the toggle button.                         |

## Theming

| Component class     | Preferred data attributes | Props | States |
| ------------------- | ------------------------- | ----- | ------ |
| `astryx-mobile-nav` | `data-side`               | side  | —      |

Override in defineTheme:

```ts
components: {
  'mobile-nav': {
    base: { /* CSS properties */ },
    'side:value': { /* variant-specific */ },
  },
}
```

Related block templates:

MobileNavBasicMobileNav
Mobile navigation drawer with sectioned nav items triggered by a menu button
MobileNavEndSideMobileNav
Navigation drawer that slides in from the right side of the screen
MobileNavShowcase
MobileNavWithoutTitleMobileNav
Mobile navigation drawer without a title header
MobileNavToggleBasic
A nav toggle with a custom icon and accessible label instead of the default hamburger. It opens a MobileNav drawer via the AppShell mobile context, which AppShell provides automatically.
MobileNavToggleShowcase
Demonstrates MobileNavToggle as a standalone hamburger button for opening the mobile navigation drawer.
