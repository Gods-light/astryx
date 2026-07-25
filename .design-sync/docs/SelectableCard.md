# SelectableCard

A card that toggles between selected and unselected states with an accent border. For navigation use ClickableCard.

**Import:** `import {SelectableCard} from '@astryxdesign/core/SelectableCard';`

## Anatomy

| Element   | Required | Description                                      |
| --------- | -------- | ------------------------------------------------ |
| Container | Yes      | Interactive div with accent border on selection. |
| Content   | Yes      | Children rendered inside the card.               |

## Best Practices

- **Do:** Use for plan pickers, filter chips, or option grids.
- **Do:** For single-select track one ID; for multi-select use a Set.
- **Don't:** Use for navigation; use ClickableCard for that.

## Props

| Prop         | Type                            | Default       | Description                                                                                                                                         |
| ------------ | ------------------------------- | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`      | `string`                        | —             | Accessibility label. **(required)**                                                                                                                 |
| `isSelected` | `boolean`                       | —             | Controlled selection state. **(required)**                                                                                                          |
| `onChange`   | `(isSelected: boolean) => void` | —             | Called when toggled. **(required)**                                                                                                                 |
| `isDisabled` | `boolean`                       | `false`       | Disables the card.                                                                                                                                  |
| `children`   | `ReactNode`                     | —             | Card content.                                                                                                                                       |
| `padding`    | `SpacingStep`                   | `4`           | Inner padding.                                                                                                                                      |
| `variant`    | `'default'                      | 'transparent' | 'muted'                                                                                                                                             | 'blue' | 'cyan' | 'gray' | 'green' | 'orange' | 'pink' | 'purple' | 'red' | 'teal' | 'yellow'` | `'default'` | Background color variant. |
| `width`      | `SizeValue`                     | —             | Card width.                                                                                                                                         |
| `height`     | `SizeValue`                     | —             | Card height.                                                                                                                                        |
| `maxWidth`   | `SizeValue`                     | —             | Maximum card width.                                                                                                                                 |
| `xstyle`     | `StyleXStyles`                  | —             | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value, not an inline style object like style={{}}. |

## Theming

| Component class          | Preferred data attributes       | Props                                                                                         | States |
| ------------------------ | ------------------------------- | --------------------------------------------------------------------------------------------- | ------ |
| `astryx-selectable-card` | `data-selected`, `data-variant` | default, transparent, muted, blue, cyan, gray, green, orange, pink, purple, red, teal, yellow | —      |

Override in defineTheme:

```ts
components: {
  'selectable-card': {
    base: { /* CSS properties */ },
    'selected:value': { /* variant-specific */ },
  },
}
```

Related block templates:

SelectableCardMulti
Multi-select tag picker using color variant selectable cards with color-matched selection borders.
SelectableCardShowcase
A plan picker with single-select radio behavior. Cards show an accent border when selected.
