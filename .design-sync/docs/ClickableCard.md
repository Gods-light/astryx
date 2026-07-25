# ClickableCard

An interactive card for navigation or action targets. Nested interactive elements work independently.

**Import:** `import {ClickableCard} from '@astryxdesign/core/ClickableCard';`

## Anatomy

| Element   | Required | Description                                              |
| --------- | -------- | -------------------------------------------------------- |
| Container | Yes      | Interactive div with hover/focus/active states.          |
| Content   | Yes      | Children, which may include nested interactive elements. |

## Best Practices

- **Do:** Use for cards that navigate to a detail page or trigger a single action.
- **Do:** Nest buttons or links freely inside; they handle their own events.
- **Don't:** Use for toggling selection; use SelectableCard for that.

## Props

| Prop         | Type                          | Default       | Description                                                                                                                                         |
| ------------ | ----------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`      | `string`                      | —             | Accessibility label. **(required)**                                                                                                                 |
| `onClick`    | `(event: MouseEvent) => void` | —             | Click handler: fires on card surface only.                                                                                                          |
| `href`       | `string`                      | —             | Navigation URL.                                                                                                                                     |
| `target`     | `string`                      | `'_self'`     | Link target.                                                                                                                                        |
| `isDisabled` | `boolean`                     | `false`       | Disables the card.                                                                                                                                  |
| `children`   | `ReactNode`                   | —             | Card content.                                                                                                                                       |
| `padding`    | `SpacingStep`                 | `4`           | Inner padding.                                                                                                                                      |
| `variant`    | `'default'                    | 'transparent' | 'muted'                                                                                                                                             | 'blue' | 'cyan' | 'gray' | 'green' | 'orange' | 'pink' | 'purple' | 'red' | 'teal' | 'yellow'` | `'default'` | Background color variant. |
| `width`      | `SizeValue`                   | —             | Card width.                                                                                                                                         |
| `height`     | `SizeValue`                   | —             | Card height.                                                                                                                                        |
| `maxWidth`   | `SizeValue`                   | —             | Maximum card width.                                                                                                                                 |
| `xstyle`     | `StyleXStyles`                | —             | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value, not an inline style object like style={{}}. |

## Theming

| Component class         | Preferred data attributes | Props                                                                                         | States |
| ----------------------- | ------------------------- | --------------------------------------------------------------------------------------------- | ------ |
| `astryx-clickable-card` | `data-variant`            | default, transparent, muted, blue, cyan, gray, green, orange, pink, purple, red, teal, yellow | —      |

Override in defineTheme:

```ts
components: {
  'clickable-card': {
    base: { /* CSS properties */ },
    'variant:value': { /* variant-specific */ },
  },
}
```

Related block templates:

ClickableCardShowcase
A clickable card that navigates on click. Nested interactive elements work independently.
ClickableCardWithNestedButton
A product card that navigates on click but has an independent "Add to cart" button inside.
