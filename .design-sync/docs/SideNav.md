# SideNav

A sidebar navigation component for organizing application pages with sections, nested items, and icons. Use SideNav as the primary navigation when an app has 5 or more destinations or requires hierarchical grouping.

**Import:** `import {SideNav} from '@astryxdesign/core/SideNav';`

## Anatomy

| Element                | Required | Description                                |
| ---------------------- | -------- | ------------------------------------------ |
| Product icon and name  | No       | Branding area at the top of the nav.       |
| Navigation items       | Yes      | Sections and groups of navigable links.    |
| Collapse/expand toggle | No       | Toggle to collapse or expand the side nav. |

## Best Practices

- **Do:** Use sections to group related navigation items and help users scan for their destination.
- **Do:** Pair outline and filled icon variants so the selected state is visually distinct.
- **Don't:** Include a SideNavHeading when a TopNav is already providing app identity; this duplicates branding.
- **Don't:** Use for filtering content; use tabs or filter buttons instead.

## Props

| Prop          | Type                                   | Default                                                                                                                                                 | Description                                                                                                                                                        |
| ------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `header`      | `ReactNode`                            | —                                                                                                                                                       | Header area (typically SideNavHeading). Sticky.                                                                                                                    |
| `topContent`  | `ReactNode`                            | —                                                                                                                                                       | Content below the header, e.g., a create button.                                                                                                                   |
| `children`    | `ReactNode`                            | —                                                                                                                                                       | Navigation sections and items. Scrollable.                                                                                                                         |
| `footer`      | `ReactNode`                            | —                                                                                                                                                       | Footer area above the icon bar.                                                                                                                                    |
| `footerIcons` | `ReactNode`                            | —                                                                                                                                                       | Footer icon bar.                                                                                                                                                   |
| `collapsible` | `boolean                               | { defaultIsCollapsed?: boolean; isCollapsed?: boolean; onCollapsedChange?: (isCollapsed: boolean) => void; hasButton?: boolean; buttonLabel?: string }` | `false`                                                                                                                                                            | Enables collapse behavior. true for uncontrolled with default toggle button, or an object for controlled mode and advanced config (defaultIsCollapsed, isCollapsed + onCollapsedChange, hasButton, buttonLabel).                                                  |
| `resizable`   | `boolean                               | { defaultWidth?: number; minWidth?: number; maxWidth?: number; autoSaveId?: string; onWidthChange?: (width: number) => void }`                          | `false`                                                                                                                                                            | Enables a resize handle at the inline-end edge. true for defaults (260px initial, 180-480px range), or a ResizableConfig object (defaultWidth, minWidth, maxWidth, autoSaveId for localStorage persistence, onWidthChange). The handle is hidden while collapsed. |
| `handleRef`   | `Ref<SideNavImperativeCollapseHandle>` | —                                                                                                                                                       | Imperative collapse handle for SideNavCollapseButton instances rendered outside this SideNav. Separate from `ref`, which continues to expose the root HTMLElement. |
| `xstyle`      | `StyleXStyles`                         | —                                                                                                                                                       | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value: not an inline style object like style={{}}.                |

## Components

### SideNavHeading

See `astryx component SideNavHeading` for props and usage.

### SideNavItem

See `astryx component SideNavItem` for props and usage.

### SideNavSection

See `astryx component SideNavSection` for props and usage.

### SideNavCollapseButton

See `astryx component SideNavCollapseButton` for props and usage.

## Theming

| Component class           | Preferred data attributes    | Props | States   |
| ------------------------- | ---------------------------- | ----- | -------- |
| `astryx-side-nav`         | `data-mode`                  | mode  | —        |
| `astryx-side-nav-heading` | —                            | —     | —        |
| `astryx-side-nav-item`    | `data-size`, `data-selected` | size  | selected |
| `astryx-side-nav-section` | —                            | —     | —        |

Override in defineTheme:

```ts
components: {
  'side-nav': {
    base: { /* CSS properties */ },
    'mode:value': { /* variant-specific */ },
  },
  'side-nav-heading': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

AppShellShowcase
A basic app shell with content padding.
AppShellSideNavOnly
App shell with SideNav header providing app identity, no TopNav needed.
AppShellTopNavWithSideNav
The most common layout with TopNav for app identity and SideNav for page-level navigation.
AppShellWithBanner
Full layout with TopNav, SideNav, and a dismissable info banner between the nav and content.
MobileNavBasicMobileNav
Mobile navigation drawer with sectioned nav items triggered by a menu button
MobileNavEndSideMobileNav
Navigation drawer that slides in from the right side of the screen
MobileNavShowcase
MobileNavWithoutTitleMobileNav
Mobile navigation drawer without a title header
MobileNavToggleShowcase
Demonstrates MobileNavToggle as a standalone hamburger button for opening the mobile navigation drawer.
NavHeadingMenuShowcase
NavHeadingMenu passed as the menu prop of SideNavHeading, letting the heading act as a product switcher popover trigger.
SideNavEndContent
Side navigation items with badges, counts, and context menus as trailing content.
SideNavNestedItems
Side navigation with collapsible nested items for settings or hierarchical menus.
SideNavShowcase
SideNavWithHeaderMenu
Side navigation with an account switcher dropdown in the header for multi-account apps.
SideNavCollapseButtonBasic
Place a collapse button in the SideNav footer to let users toggle the rail between expanded and collapsed states. Disable the built-in button via collapsible={{hasButton: false}} when positioning it yourself.
SideNavCollapseButtonShowcase
Demonstrates SideNavCollapseButton inside a collapsible SideNav.
SideNavHeadingBasic
A SideNav header with an app icon and a linked title. Pass it to the SideNav header prop to identify the product or workspace at the top of the navigation rail.
SideNavHeadingShowcase
Demonstrates SideNavHeading with an app name, logo icon, superheading, and subheading.
SideNavItemBasic
Navigation links inside a SideNav, each with a label, an icon, and an href. Mark the item for the current page with isSelected.
SideNavItemShowcase
Demonstrates SideNavItem with selected, icon, disabled, and nested states.
SideNavSectionBasic
Group related SideNavItems under titled sections. Use sections to organize longer navigation lists into scannable clusters like Overview and Account.
SideNavSectionShowcase
Demonstrates SideNavSection with titled groups of navigation items.
