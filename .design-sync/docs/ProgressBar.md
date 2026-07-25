# ProgressBar

A horizontal bar showing the completion progress of a task. Use it for operations where the duration is known, or as an animated indicator when progress can't be calculated. Supports semantic color variants, value labels, and custom formatting.

**Import:** `import {ProgressBar} from '@astryxdesign/core/ProgressBar';`

## Best Practices

- **Do:** Use a determinate bar when the total amount of work is known, and indeterminate when it's not.
- **Do:** Choose a color variant that matches the context: accent for general progress, success for completion, warning or error for alerts.
- **Do:** Always provide a label, even if hidden; screen readers need it to announce what's loading.
- **Don't:** Place icons or labels inside the bar; compose them alongside it using layout components.
- **Don't:** Use a progress bar for instant actions; it's meant for operations that take noticeable time.
- **Don't:** Use multiple progress bars stacked together for the same operation; use one bar with a value label instead.

## Props

| Prop               | Type                                     | Default   | Description                                                                                                                                         |
| ------------------ | ---------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`            | `string`                                 | —         | accessible label **(required)**                                                                                                                     |
| `value`            | `number`                                 | `0`       | Current value (ignored when indeterminate).                                                                                                         |
| `max`              | `number`                                 | `100`     | Maximum value.                                                                                                                                      |
| `isLabelHidden`    | `boolean`                                | `false`   | Visually hide the label (remains accessible).                                                                                                       |
| `hasValueLabel`    | `boolean`                                | `false`   | Show formatted value text (ignored when indeterminate).                                                                                             |
| `formatValueLabel` | `(value: number, max: number) => string` | —         | Custom value label formatter; defaults to a percentage string.                                                                                      |
| `variant`          | `'accent'                                | 'success' | 'warning'                                                                                                                                           | 'error' | 'neutral'` | `'accent'` | Semantic color variant. |
| `isIndeterminate`  | `boolean`                                | `false`   | Animated loading indicator for unknown progress.                                                                                                    |
| `isDisabled`       | `boolean`                                | `false`   | Visually disabled state: grays out the fill and text. Use for canceled or inactive operations.                                                      |
| `xstyle`           | `StyleXStyles`                           | —         | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value, not an inline style object like style={{}}. |

## Theming

| Component class            | Preferred data attributes | Props                                    | States |
| -------------------------- | ------------------------- | ---------------------------------------- | ------ |
| `astryx-progressbar`       | `data-variant`            | accent, success, warning, error, neutral | —      |
| `astryx-progressbar-fill`  | `data-variant`            | accent, success, warning, error, neutral | —      |
| `astryx-progressbar-track` | —                         | —                                        | —      |

Override in defineTheme:

```ts
components: {
  'progressbar': {
    base: { /* CSS properties */ },
    'variant:value': { /* variant-specific */ },
  },
  'progressbar-fill': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

ChatComposerFullFeatured
Chat composer with all slots populated: collapsible attachment drawer, header actions, context progress bar, footer dropdown menus, and mic button. Shows the maximum composer configuration.
ChatComposerDrawerWithProgress
Drawer paired with a context progress bar in the header. Show context window usage when attachments consume part of the available token budget.
ProgressBarCustomFormat
Progress bar with a custom value label showing disk usage in GB.
ProgressBarIndeterminate
Indeterminate progress bar for operations with unknown duration.
ProgressBarSemanticVariants
All semantic color variants stacked vertically.
ProgressBarShowcase
A progress bar filled to 60%.
ProgressBarWithValueLabel
Progress bar with its current percentage displayed.
