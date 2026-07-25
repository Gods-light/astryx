# NavIcon

NavIcon is a circular icon container with an accent-colored background. Use it in navigation headers such as TopNavHeading and PageNavHeader to visually identify a section or application.

**Import:** `import {NavIcon} from '@astryxdesign/core/NavIcon';`

## Best Practices

- **Do:** Use in navigation headers to provide a recognizable visual anchor for the section.
- **Do:** Pass an Icon or similarly sized icon component to ensure proper proportions.
- **Don't:** Use NavIcon for interactive purposes; it is a display-only container, not a button.

## Props

| Prop   | Type        | Default | Description                                                                                                            |
| ------ | ----------- | ------- | ---------------------------------------------------------------------------------------------------------------------- |
| `icon` | `ReactNode` | —       | The icon element to render inside the circular background. Should be an Icon or similar icon component. **(required)** |

## Theming

| Component class  | Preferred data attributes | Props | States |
| ---------------- | ------------------------- | ----- | ------ |
| `astryx-navicon` | —                         | —     | —      |

Override in defineTheme:

```ts
components: {
  'navicon': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

AppShellShowcase
A basic app shell with content padding.
AppShellSideNavOnly
App shell with SideNav header providing app identity, no TopNav needed.
AppShellTopNavOnly
Simple layout with TopNav and no side navigation, suitable for landing pages.
AppShellTopNavWithSideNav
The most common layout with TopNav for app identity and SideNav for page-level navigation.
AppShellWithBanner
Full layout with TopNav, SideNav, and a dismissable info banner between the nav and content.
NavIconBasic
Circular icon containers wrapping semantic icons. Use as logos or accent icons in navigation headers such as TopNavHeading.
NavIconShowcase
Circular icon containers for navigation headers with accent backgrounds.
SideNavWithHeaderMenu
Side navigation with an account switcher dropdown in the header for multi-account apps.
TopNavCenteredNavigation
Navigation layout with center-aligned nav items flanked by a logo heading and end actions.
TopNavEnterpriseDashboard
Full-featured navigation bar with icon-labeled nav items, search, notifications, and a primary CTA.
TopNavHoverMenu
Navigation bar with a hover-triggered dropdown menu showing product items with icons and descriptions.
TopNavMegaMenu
Marketing-style navigation with a full-width mega menu featuring product items and a promotional featured card.
TopNavWithLogo
Navigation bar with a branded logo icon, heading link, nav items, and a profile action.
TopNavHeadingBasic
A product heading with a logo inside a TopNav, linked to the home page. Use as the leading brand element of a top navigation bar.
