# AppShell

The outermost layout for an application. Provides slots for top navigation, side navigation, banners, and main content. Use it as the root wrapper for every page. It handles responsive mobile navigation and skip-to-content automatically. Configure side nav collapse on SideNav with its collapsible prop.

**Import:** `import {AppShell} from '@astryxdesign/core/AppShell';`

## Best Practices

- **Do:** Choose the right height: use "fill" for dashboards with internal scrolling and "auto" for pages that grow with content.
- **Do:** Set `contentPadding` based on content type: 4 for forms and settings, 0 for tables and dashboards.
- **Don't:** Nest one AppShell inside another; it's the outermost layout frame.
- **Don't:** Use for sub-page layouts; use Layout for content areas within AppShell.

## Props

| Prop             | Type           | Default   | Description                                                                                                                                         |
| ---------------- | -------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`       | `ReactNode`    | —         | Main content area, rendered inside a <main> element.                                                                                                |
| `contentPadding` | `0             | 0.5       | 1                                                                                                                                                   | 1.5                                                                                                                                                                                 | 2            | 3                                                                                                                                                                                                                                                                       | 4   | 5   | 6   | 8   | 10` | `0` | Padding for the main content area. Set based on the dominant content pattern: 4 (16px) for forms/settings/text, 0 for dashboards/maps/tables. Override individual sections with Section. |
| `topNav`         | `ReactNode`    | —         | Top navigation slot, typically TopNav.                                                                                                              |
| `sideNav`        | `ReactNode`    | —         | Side navigation slot, typically SideNav.                                                                                                            |
| `mobileNav`      | `ReactNode`    | —         | Mobile navigation configuration. Accepts false (disable), config object (tune auto behavior), or ReactNode (full custom drawer).                    |
| `banner`         | `ReactNode`    | —         | Banner slot for system-wide announcements, placed above the topNav.                                                                                 |
| `height`         | `'fill'        | 'auto'`   | `'fill'`                                                                                                                                            | Height behavior: 'fill' makes the shell fill the viewport (100dvh) with independent scroll containers; 'auto' lets the shell grow with content and uses sticky positioning for nav. |
| `variant`        | `'wash'        | 'surface' | 'section'                                                                                                                                           | 'elevated'`                                                                                                                                                                         | `'elevated'` | Navigation background style controlling how nav areas contrast with content. 'wash' uses wash background, 'surface' uses surface background, 'section' adds dividers between nav and content, 'elevated' uses wash nav with elevated surface content and border radius. |
| `xstyle`         | `StyleXStyles` | —         | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value, not an inline style object like style={{}}. |

## Theming

| Component class            | Preferred data attributes | Props                            | States |
| -------------------------- | ------------------------- | -------------------------------- | ------ |
| `astryx-app-shell`         | `data-variant`            | wash, surface, section, elevated | —      |
| `astryx-app-shell-header`  | `data-variant`            | wash, surface, section, elevated | —      |
| `astryx-app-shell-sidenav` | `data-variant`            | wash, surface, section, elevated | —      |

Override in defineTheme:

```ts
components: {
  'app-shell': {
    base: { /* CSS properties */ },
    'variant:value': { /* variant-specific */ },
  },
  'app-shell-header': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

AppShellContentOnly
Minimal shell with no navigation, useful for full-bleed pages, auth screens, or embedded views.
AppShellMobileHookUsage
Custom mobile navigation trigger built with useAppShellMobile. The trigger consumes the surrounding AppShell context instead of rendering its own shell.
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
MobileNavToggleBasic
A nav toggle with a custom icon and accessible label instead of the default hamburger. It opens a MobileNav drawer via the AppShell mobile context, which AppShell provides automatically.
