# HoverCard

HoverCard shows additional information when the user hovers or focuses a trigger element. Use it for profile cards, link summaries, or inline definitions where the user needs more context without navigating away.

**Import:** `import {HoverCard} from '@astryxdesign/core/HoverCard';`

## Anatomy

| Element | Required | Description                                                                              |
| ------- | -------- | ---------------------------------------------------------------------------------------- |
| Trigger | Yes      | The element that opens the hover card on hover or focus: a button, link, or inline text. |
| Card    | Yes      | The floating overlay with the preview content, anchored to the trigger.                  |
| Body    | Yes      | The main content area: profile info, link summary, or any rich content.                  |
| Actions | No       | Optional buttons inside the card for follow-up actions like Follow or Message.           |

## Best Practices

- **Do:** Keep content supplementary; hover cards should enhance understanding without blocking the primary workflow.
- **Do:** Provide a dashed underline on text triggers so users know the element is hoverable.
- **Do:** Use the hook API (useHoverCard) when you need more control over timing or placement.
- **Don't:** Place critical actions or required information inside a hover card; users may miss content that only appears on hover.
- **Don't:** Use a hover card when a simple Tooltip or Popover would suffice.
- **Don't:** Use a HoverCard for content the user must interact with; it disappears when the cursor leaves.
- **Don't:** Nest a HoverCard whose content has block elements directly inside phrasing-only contexts such as a <p>, <label>, or heading. The card renders inline, so block content there is invalid HTML the browser reparents. Wrap the surrounding text in a block element (e.g. a <div>) instead.

## Components

### HoverCard

Component wrapper for hover card display: a richer, larger overlay triggered on hover or focus.

| Prop                 | Type                        | Default  | Description                                                                                           |
| -------------------- | --------------------------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `children`           | `ReactNode`                 | —        | Trigger element that must accept a ref.                                                               |
| `content`            | `ReactNode`                 | —        | Hover card content. **(required)**                                                                    |
| `placement`          | `'above'                    | 'below'  | 'start'                                                                                               | 'end'`                                           | `'above'`                                                                                                                               | Position relative to the anchor element. Logical: start/end resolve against the popover's own inherited direction (RTL mirrors in pure CSS). |
| `alignment`          | `'start'                    | 'center' | 'end'`                                                                                                | `'center'`                                       | Alignment along the placement axis. Logical: start/end resolve against the popover's own inherited direction (RTL mirrors in pure CSS). |
| `delay`              | `number`                    | `300`    | Show delay in milliseconds.                                                                           |
| `hideDelay`          | `number`                    | `200`    | Hide delay in milliseconds.                                                                           |
| `focusTrigger`       | `'auto'                     | 'always' | 'never'`                                                                                              | `'auto'`                                         | Controls when focus events trigger the hover card.                                                                                      |
| `isEnabled`          | `boolean`                   | `true`   | Enables or disables the hover and focus triggers.                                                     |
| `onOpenChange`       | `(isOpen: boolean) => void` | —        | Callback fired when hover card visibility changes. Called with true when shown and false when hidden. |
| `hasHoverIndication` | `'auto'                     | boolean` | `'auto'`                                                                                              | Shows a dashed underline on the trigger element. |
| `isDefaultOpen`      | `boolean`                   | —        | Whether the hover card should be shown on mount. Still dismissible.                                   |

## Theming

| Component class    | Preferred data attributes | Props | States |
| ------------------ | ------------------------- | ----- | ------ |
| `astryx-hovercard` | —                         | —     | —      |

Override in defineTheme:

```ts
components: {
  'hovercard': {
    base: { /* CSS properties */ },
  },
}
```

Some properties are set via standard CSS in component overrides:

```ts
components: {
  hovercard: {
    base: {
      borderRadius: '...',
    },
  },
}
```

Related block templates:

HoverCardHookUsage
Custom profile preview using useHoverCard with direct trigger and render control.
HoverCardInlineTextHoverCard
Shows a term definition on hover within a paragraph. Use for technical terms, jargon, or concepts that some readers may not know, like a glossary built into the text.
HoverCardInteractiveContent
Shows a page summary when hovering a link: title, description, and URL. Use for documentation links, article references, or any URL where a preview helps the user decide whether to click.
HoverCardProfileHoverCard
Shows a user profile summary on hover with name, role, and bio. Use on usernames, avatars, or mentions to let users preview a profile without navigating away.
HoverCardShowcase
A hover card that shows a user profile preview when hovering over a trigger button. Starts open for preview.
