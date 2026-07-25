# Link

A styled anchor for inline and standalone text navigation. Supports external links, underline variants, tooltips, and custom link components for router integration. Use it for navigating between pages or to external URLs.

**Import:** `import {Link} from '@astryxdesign/core/Link';`

## Anatomy

| Element    | Required | Description                                                   |
| ---------- | -------- | ------------------------------------------------------------- |
| Label      | Yes      | The visible text of the link.                                 |
| Right icon | No       | Icon placed after the label to indicate an action affordance. |
| Left icon  | No       | Icon placed before the label to represent meaning.            |

## Best Practices

- **Do:** Write descriptive, concise link text that clearly communicates the destination.
- **Do:** Set `isStandalone` when the link appears outside of inline text, so it receives proper base font sizing.
- **Do:** Only set `label` when the link content is not descriptive text (e.g. an icon-only link). For text links, the visible text is already the accessible name; adding `label` overrides it for screen readers, which is harmful.
- **Don't:** Use Link for actions that do not navigate; use a Button instead.
- **Don't:** Use generic text like "click here" or "read more"; describe the destination.
- **Don't:** Set `label` on text links; `aria-label` prevents assistive technology from reading the actual link content.

## Components

### Link

Styled anchor link with variants, external link support, and polymorphic rendering.

| Prop             | Type                | Default                | Description                                                                                                                                                       |
| ---------------- | ------------------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `as`             | `LinkComponentType` | —                      | Custom component to render instead of <a>                                                                                                                         |
| `label`          | `string`            | —                      | Accessible label (aria-label). Only use when children are not self-descriptive (e.g. icon-only links). Omit for text links; the link text is the accessible name. |
| `href`           | `string`            | —                      | Link destination URL                                                                                                                                              |
| `hasUnderline`   | `boolean`           | `false`                | Always show underline                                                                                                                                             |
| `isDisabled`     | `boolean`           | `false`                | Disables the link                                                                                                                                                 |
| `isExternalLink` | `boolean`           | `false`                | Opens in new tab with external icon and safe rel tokens                                                                                                           |
| `newTabLabel`    | `string`            | `'(opens in new tab)'` | Screen-reader text announcing that an external link opens in a new tab. Override for localization.                                                                |
| `target`         | `string`            | —                      | Where to open linked document. target="_blank" automatically adds noopener noreferrer.                                                                            |
| `rel`            | `string`            | —                      | Link relationship tokens. noopener noreferrer are merged automatically for target="_blank".                                                                       |
| `onClick`        | `MouseEventHandler` | —                      | Click event handler                                                                                                                                               |
| `tooltip`        | `string`            | —                      | Tooltip text displayed on hover                                                                                                                                   |
| `isStandalone`   | `boolean`           | `false`                | Applies base font sizing                                                                                                                                          |
| `children`       | `ReactNode`         | —                      | Link content **(required)**                                                                                                                                       |

### LinkProvider

Provider that sets the default link component for all Astryx link-rendering components in the subtree. Wrap your app root to replace native <a> elements with your framework router (Next.js Link, React Router Link, etc.).

| Prop        | Type                | Default | Description                                           |
| ----------- | ------------------- | ------- | ----------------------------------------------------- |
| `component` | `LinkComponentType` | —       | Component to use for all link elements **(required)** |
| `children`  | `ReactNode`         | —       | Subtree **(required)**                                |

## Theming

| Component class | Preferred data attributes | Props | States |
| --------------- | ------------------------- | ----- | ------ |
| `astryx-link`   | `data-color`              | color | —      |

Override in defineTheme:

```ts
components: {
  'link': {
    base: { /* CSS properties */ },
    'color:value': { /* variant-specific */ },
  },
}
```

Related block templates:

HoverCardInteractiveContent
Shows a page summary when hovering a link: title, description, and URL. Use for documentation links, article references, or any URL where a preview helps the user decide whether to click.
LinkExternalLinks
A vertical list of external links that open in a new tab with an indicator icon.
LinkInlineLink
A link embedded within a paragraph of body text.
LinkShowcase
A standalone link.
LinksWithTooltips
Horizontal row of standalone links with descriptive hover tooltips.
LinkProviderCustomLink
Routes every Astryx link through a custom component that intercepts the click, the hook frameworks like Next.js use for client-side navigation. Click the link to see the custom handler fire instead of a full-page load.
TableRichCellTable
Table with rich cell content using Link for emails and Badge for role labels.
ToastAction
Persistent toasts with a trailing button or link so the user can act on the notification, like undoing a delete or viewing a report.
