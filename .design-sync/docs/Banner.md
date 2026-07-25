# Banner

Banner shows a persistent message at the top of a page or section. Use it for form errors, system updates, maintenance notices, or success confirmations that the user needs to see until they act on it.

**Import:** `import {Banner} from '@astryxdesign/core/Banner';`

## Anatomy

| Element             | Required | Description                                                               |
| ------------------- | -------- | ------------------------------------------------------------------------- |
| Icon                | Yes      | Automatically set based on the status (info, warning, error, success).    |
| Title               | No       | The main message. Required if no description is provided.                 |
| Description         | No       | Additional detail below the title. Required if no title is provided.      |
| Action button       | No       | A button for the user to act on the message, like "Review" or "Retry".    |
| Dismiss button      | No       | Lets the user close the banner. Enabled by setting isDismissable.         |
| Collapsible content | No       | Extra detail that expands below the banner header, like a list of errors. |

## Best Practices

- **Do:** Pick a status that matches the message: info for updates, warning for caution, error for problems, success for confirmations.
- **Do:** Use the card container inside page content and the section container for full-width messages that span the entire page.
- **Do:** Make info and success banners dismissable. Keep error banners visible until the user fixes the issue.
- **Do:** Keep titles short and scannable: "Payment failed" not "There was a problem processing your most recent payment."
- **Don't:** Use Banner for short-lived messages that disappear on their own; use Toast instead.
- **Don't:** Stack multiple banners with the same status; combine related messages into one banner.

## Props

| Prop                | Type           | Default    | Description                                                                                                                                         |
| ------------------- | -------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `status`            | `'info'        | 'warning'  | 'error'                                                                                                                                             | 'success'`                                                                                              | —   | Status type controlling icon and color. **(required)** |
| `title`             | `ReactNode`    | —          | Title text or ReactNode displayed in the header. **(required)**                                                                                     |
| `description`       | `ReactNode`    | —          | Description text rendered below the title in the header.                                                                                            |
| `icon`              | `ReactNode`    | —          | Override the default status icon.                                                                                                                   |
| `isDismissable`     | `boolean`      | `false`    | Whether the banner can be dismissed by the user.                                                                                                    |
| `onDismiss`         | `() => void`   | —          | Called when the dismiss button is clicked; banner hides itself regardless of whether this is provided.                                              |
| `endContent`        | `ReactNode`    | —          | Action content rendered in the header area, end-aligned. Typically a button or link.                                                                |
| `container`         | `'card'        | 'section'` | `'card'`                                                                                                                                            | Container type: card has border-radius; section is full-width with no border-radius for page-level use. |
| `children`          | `ReactNode`    | —          | Content rendered in the card-background area below the colored header.                                                                              |
| `defaultIsExpanded` | `boolean`      | `false`    | Whether the content area (children) starts expanded. Only relevant when children are provided.                                                      |
| `xstyle`            | `StyleXStyles` | —          | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value, not an inline style object like style={{}}. |

## Theming

| Component class         | Preferred data attributes       | Props             | States |
| ----------------------- | ------------------------------- | ----------------- | ------ |
| `astryx-banner`         | `data-container`, `data-status` | container, status | —      |
| `astryx-banner-icon`    | `data-status`                   | status            | —      |
| `astryx-banner-content` | `data-container`, `data-status` | container, status | —      |

Override in defineTheme:

```ts
components: {
  'banner': {
    base: { /* CSS properties */ },
    'container:value': { /* variant-specific */ },
  },
  'banner-icon': {
    base: { /* CSS properties */ },
  },
}
```

Some properties are set via standard CSS in component overrides:

```ts
components: {
  banner: {
    base: {
      borderRadius: '...',
    },
  },
}
```

Related block templates:

AppShellWithBanner
Full layout with TopNav, SideNav, and a dismissable info banner between the nav and content.
BannerCollapsibleContent
Combine an action button, dismiss control, and expandable detail area in one banner. Use for complex notifications like config changes or deployment summaries.
BannerDismissable
Let the user close a banner after reading it. Use for maintenance notices, feature tips, or any non-critical message the user can acknowledge.
BannerSectionVariant
A full-width banner with no border radius for page-level notifications. Use at the top of a page for site-wide announcements or maintenance alerts.
BannerShowcase
All four status banners stacked: info, success, warning, and error. A quick visual reference for choosing the right status.
BannerStatuses
All 4 banner statuses: info, success, warning, and error. Use to show persistent messages like updates, confirmations, cautions, or problems at the top of a page or section.
BannerWithActionButton
Add a button to a banner so the user can act on the message. Use for trial expirations, payment failures, or anything that needs a response.
