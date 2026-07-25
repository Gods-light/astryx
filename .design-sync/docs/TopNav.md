# TopNav

TopNav is a horizontal navigation bar for product-level navigation in application headers. Use TopNav for 5 or fewer always-visible navigation items, or minimal navigation paired with search and controls. For complex navigation hierarchies, use a sidebar; to filter content, use tabs or filter buttons instead.

**Import:** `import {TopNav} from '@astryxdesign/core/TopNav';`

## Anatomy

| Element               | Required | Description                                                            |
| --------------------- | -------- | ---------------------------------------------------------------------- |
| Product icon and name | Yes      | Identifies the product in the navigation bar.                          |
| Navigation items      | Yes      | Primary links for product-level destinations.                          |
| More menu             | No       | Overflow menu for additional navigation items.                         |
| Flex area             | No       | Flexible region for search, primary action buttons, or other controls. |

## Best Practices

- **Do:** Include a product logo and name in the heading slot to clearly identify the application.
- **Do:** Limit primary navigation items to 5 or fewer for quick scanning and minimal cognitive load.
- **Don't:** Avoid using TopNav to filter page content; use Tabs or filter controls instead.
- **Don't:** Avoid deeply nested navigation hierarchies; keep menus to one level of depth.

## Props

| Prop            | Type           | Default | Description                                                                                                                                                                           |
| --------------- | -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `heading`       | `ReactNode`    | —       | Heading slot content (logo, brand): positioned at the left edge of the nav bar.                                                                                                       |
| `startContent`  | `ReactNode`    | —       | Start content slot for navigation items or breadcrumbs: positioned after the heading, left-aligned.                                                                                   |
| `children`      | `ReactNode`    | —       | Alias for startContent. Prefer startContent when composing with heading, centerContent, or endContent; children keeps the common React nav-item pattern from silently dropping items. |
| `centerContent` | `ReactNode`    | —       | Center content slot (tabs, search bar, primary navigation): when provided, switches the layout to a three-column CSS grid for true horizontal centering.                              |
| `endContent`    | `ReactNode`    | —       | End content slot for search, icons, or user profile: positioned at the right edge.                                                                                                    |
| `label`         | `string`       | —       | Accessible label for the navigation landmark, applied as aria-label on the <nav> element.                                                                                             |
| `xstyle`        | `StyleXStyles` | —       | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value: not an inline style object like style={{}}.                                   |

## Components

### TopNavHeading

See `astryx component TopNavHeading` for props and usage.

### TopNavItem

See `astryx component TopNavItem` for props and usage.

### TopNavMenu

See `astryx component TopNavMenu` for props and usage.

### TopNavMegaMenu

See `astryx component TopNavMegaMenu` for props and usage.

### TopNavMegaMenuItem

See `astryx component TopNavMegaMenuItem` for props and usage.

### TopNavMegaMenuFeaturedCard

See `astryx component TopNavMegaMenuFeaturedCard` for props and usage.

## Theming

| Component class                          | Preferred data attributes    | Props | States         |
| ---------------------------------------- | ---------------------------- | ----- | -------------- |
| `astryx-top-nav`                         | `data-mode`                  | —     | mode           |
| `astryx-top-nav-item`                    | `data-mode`, `data-selected` | —     | mode, selected |
| `astryx-top-nav-heading`                 | —                            | —     | —              |
| `astryx-top-nav-mega-menu`               | `data-mode`                  | —     | mode           |
| `astryx-top-nav-mega-menu-item`          | `data-mode`                  | —     | mode           |
| `astryx-top-nav-mega-menu-featured-card` | —                            | —     | —              |
| `astryx-top-nav-menu`                    | —                            | —     | —              |

Override in defineTheme:

```ts
components: {
  'top-nav': {
    base: { /* CSS properties */ },
    'mode': { /* state-specific */ },
  },
  'top-nav-item': {
    base: { /* CSS properties */ },
    'mode': { /* state-specific */ },
  },
}
```

Related block templates:

AppShellTopNavOnly
Simple layout with TopNav and no side navigation, suitable for landing pages.
AppShellTopNavWithSideNav
The most common layout with TopNav for app identity and SideNav for page-level navigation.
AppShellWithBanner
Full layout with TopNav, SideNav, and a dismissable info banner between the nav and content.
TopNavCenteredNavigation
Navigation layout with center-aligned nav items flanked by a logo heading and end actions.
TopNavEnterpriseDashboard
Full-featured navigation bar with icon-labeled nav items, search, notifications, and a primary CTA.
TopNavHoverMenu
Navigation bar with a hover-triggered dropdown menu showing product items with icons and descriptions.
TopNavMegaMenu
Marketing-style navigation with a full-width mega menu featuring product items and a promotional featured card.
TopNavMultipleDropdowns
Navigation bar with multiple hover-triggered dropdown menus that auto-close when switching between them.
TopNavShowcase
TopNavWithLogo
Navigation bar with a branded logo icon, heading link, nav items, and a profile action.
TopNavHeadingBasic
A product heading with a logo inside a TopNav, linked to the home page. Use as the leading brand element of a top navigation bar.
TopNavHeadingShowcase
Demonstrates TopNavHeading with a logo and text, both as a plain display and as a clickable link.
TopNavItemBasic
Navigation links inside a TopNav with one item marked as selected. Use for top-level pages of an application.
TopNavItemShowcase
Demonstrates TopNavItem with selected, icon, disabled, and default states.
TopNavMegaMenuBasic
A mega menu trigger inside a TopNav that opens a panel of rich link items. Use when a navigation section has multiple destinations worth describing.
TopNavMegaMenuShowcase
Demonstrates TopNavMegaMenu with items and a featured card in the mega menu panel.
TopNavMegaMenuFeaturedCardShowcase
Demonstrates TopNavMegaMenuFeaturedCard with a title, description, and CTA link inside a mega menu.
TopNavMegaMenuItemShowcase
Demonstrates TopNavMegaMenuItem with icons, titles, and descriptions inside a mega menu.
TopNavMenuBasic
A dropdown menu inside a TopNav built from an items array with icons and descriptions. Use to group related destinations under a single trigger.
TopNavMenuShowcase
Demonstrates TopNavMenu with a hover-triggered dropdown containing items with icons and descriptions.
