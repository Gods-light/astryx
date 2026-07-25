# StatusDot

A small colored dot that communicates status like online/offline presence or severity levels. Supports five semantic variants and an optional pulse animation. Always pair with a visible text label, as color alone should not carry meaning.

**Import:** `import {StatusDot} from '@astryxdesign/core/StatusDot';`

## Best Practices

- **Do:** Always pair with a visible text label so status is not conveyed by color alone.
- **Do:** Provide a descriptive `label` prop for screen reader accessibility.
- **Don't:** Use the pulse animation for purely decorative purposes; reserve it for states that require immediate attention.
- **Don't:** Rely on color alone to communicate status; always include text.

## Props

| Prop        | Type           | Default   | Description                                                                                                                                         |
| ----------- | -------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `variant`   | `'success'     | 'warning' | 'error'                                                                                                                                             | 'accent' | 'neutral'` | —   | Semantic color variant. **(required)** |
| `label`     | `string`       | —         | Accessible label surfaced via aria-label. **(required)**                                                                                            |
| `isPulsing` | `boolean`      | `false`   | Enables a pulse animation; respects prefers-reduced-motion: reduce.                                                                                 |
| `tooltip`   | `string`       | —         | Tooltip text shown on hover to explain the status meaning.                                                                                          |
| `xstyle`    | `StyleXStyles` | —         | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value, not an inline style object like style={{}}. |

## Theming

| Component class    | Preferred data attributes | Props                                    | States |
| ------------------ | ------------------------- | ---------------------------------------- | ------ |
| `astryx-statusdot` | `data-variant`            | success, warning, error, accent, neutral | —      |

Override in defineTheme:

```ts
components: {
  'statusdot': {
    base: { /* CSS properties */ },
    'variant:value': { /* variant-specific */ },
  },
}
```

Related block templates:

StatusDotPulsing
Animated pulsing dots for live, processing, and error states.
StatusDotShowcase
A positive status dot indicator.
StatusDotStatusIndicators
Labeled status dot list for presence indicators like online, away, and offline.
StatusDotVariants
All five semantic color variants displayed in a row.
TabListTabsWithStatusDot
Tabs with status dot indicators rendered via endContent to show live environment health at a glance.
