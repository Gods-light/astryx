# Tooltip

A short text hint that appears on hover or focus, anchored to a trigger element. Use it to describe icon-only buttons, show the full text of truncated labels, or provide supplementary context without cluttering the UI.

**Import:** `import {Tooltip} from '@astryxdesign/core/Tooltip';`

## Best Practices

- **Do:** Keep tooltip content concise: aim for under 140 characters of plain text.
- **Do:** Add a tooltip to icon-only buttons and controls that lack a visible label.
- **Don't:** Place interactive elements like links or buttons inside a tooltip; use HoverCard or Popover instead.
- **Don't:** Use tooltips for essential information that users must see to complete a task.

## Components

### Tooltip

Component wrapper for tooltip display triggered on hover or focus.

| Prop                 | Type                        | Default  | Description                                                                                        |
| -------------------- | --------------------------- | -------- | -------------------------------------------------------------------------------------------------- |
| `children`           | `ReactNode`                 | —        | Trigger element(s) that activate the tooltip.                                                      |
| `anchorRef`          | `RefObject<HTMLElement>`    | —        | External anchor ref for sibling mode.                                                              |
| `content`            | `ReactNode`                 | —        | Tooltip content, typically short text.                                                             |
| `placement`          | `'above'                    | 'below'  | 'start'                                                                                            | 'end'`                                           | `'above'`                                                                                                                               | Position relative to the anchor element. Logical: start/end resolve against the popover's own inherited direction (RTL mirrors in pure CSS). |
| `alignment`          | `'start'                    | 'center' | 'end'`                                                                                             | `'center'`                                       | Alignment along the placement axis. Logical: start/end resolve against the popover's own inherited direction (RTL mirrors in pure CSS). |
| `delay`              | `number`                    | `200`    | Show delay in milliseconds.                                                                        |
| `hideDelay`          | `number`                    | `0`      | Hide delay in milliseconds.                                                                        |
| `focusTrigger`       | `'auto'                     | 'always' | 'never'`                                                                                           | `'auto'`                                         | Controls when focus events trigger the tooltip.                                                                                         |
| `isEnabled`          | `boolean`                   | `true`   | Enables or disables the tooltip triggers.                                                          |
| `onOpenChange`       | `(isOpen: boolean) => void` | —        | Callback fired when tooltip visibility changes. Called with true when shown and false when hidden. |
| `hasHoverIndication` | `'auto'                     | boolean` | `'auto'`                                                                                           | Shows a dashed underline on the trigger element. |
| `isDefaultOpen`      | `boolean`                   | —        | Whether the tooltip should be shown on mount. Still dismissible.                                   |

## Theming

| Component class  | Preferred data attributes | Props | States |
| ---------------- | ------------------------- | ----- | ------ |
| `astryx-tooltip` | —                         | —     | —      |

Override in defineTheme:

```ts
components: {
  'tooltip': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

TooltipActionBarTooltips
Tooltips on an action button bar with contextual descriptions.
TooltipHookUsage
Tooltip using the useTooltip hook for programmatic control.
TooltipInlineTextTooltips
Tooltips on inline text terms for definitions.
TooltipShowcase
