# RadioList

A group of options where only one can be selected at a time. All options are visible at once, making it easy to compare choices. Use it when users need to pick one option from a small set.

**Import:** `import {RadioList} from '@astryxdesign/core/RadioList';`

## Anatomy

| Element     | Required | Description                                              |
| ----------- | -------- | -------------------------------------------------------- |
| Header      | No       | Optional heading above the radio list.                   |
| Children    | Yes      | The radio list items rendered as selectable options.     |
| Label/Value | Yes      | The text label and associated value for each radio item. |

## Best Practices

- **Do:** Keep the number of options small: typically 2 to 7 choices.
- **Do:** Use clear, concise labels that differentiate each option at a glance.
- **Do:** Pre-select a default option when there's a sensible default; don't leave the group empty unless the choice is optional.
- **Don't:** Use when multiple selections are needed; use CheckboxList instead.
- **Don't:** Use for long lists; use Selector for better discoverability.
- **Don't:** Use horizontal layout with more than 4 options; it wraps awkwardly.
- **Don't:** Wrap a disabled RadioList in Tooltip to explain why it is disabled; disabled controls swallow the hover events the wrapper needs. Use the disabledMessage prop instead.

## Props

| Prop              | Type                      | Default       | Description                                                                                                                                                                                                                                                                                                                                                                        |
| ----------------- | ------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`           | `string`                  | —             | Label text for the radio group (always rendered for accessibility). **(required)**                                                                                                                                                                                                                                                                                                 |
| `value`           | `string`                  | —             | The currently selected value. **(required)**                                                                                                                                                                                                                                                                                                                                       |
| `onChange`        | `(value: string) => void` | —             | Callback fired when the selected value changes. **(required)**                                                                                                                                                                                                                                                                                                                     |
| `children`        | `ReactNode`               | —             | RadioListItem elements. **(required)**                                                                                                                                                                                                                                                                                                                                             |
| `isLabelHidden`   | `boolean`                 | `false`       | Whether to visually hide the label.                                                                                                                                                                                                                                                                                                                                                |
| `description`     | `string`                  | —             | Description text displayed below the label.                                                                                                                                                                                                                                                                                                                                        |
| `orientation`     | `'vertical'               | 'horizontal'` | `'vertical'`                                                                                                                                                                                                                                                                                                                                                                       | Layout direction of the radio items. |
| `isDisabled`      | `boolean`                 | `false`       | Whether all radio items are disabled.                                                                                                                                                                                                                                                                                                                                              |
| `htmlName`        | `string`                  | —             | The HTML name attribute shared by the radio inputs, useful for form submissions. When omitted, a unique internal name still groups the radios.                                                                                                                                                                                                                                     |
| `disabledMessage` | `string`                  | —             | Explains why the group is disabled. Applies to the whole-group disabled state (isDisabled), not per item. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the radios focusable via aria-disabled (selection stays blocked). Use this instead of wrapping a disabled RadioList in Tooltip. Disabled controls swallow the hover events an external Tooltip needs. |
| `isRequired`      | `boolean`                 | `false`       | Whether the radio group is required.                                                                                                                                                                                                                                                                                                                                               |
| `isOptional`      | `boolean`                 | `false`       | Whether the field is optional (mutually exclusive with isRequired).                                                                                                                                                                                                                                                                                                                |
| `status`          | `InputStatus`             | —             | Status indicator ({ type, message }).                                                                                                                                                                                                                                                                                                                                              |
| `size`            | `'sm'                     | 'md'`         | `'md'`                                                                                                                                                                                                                                                                                                                                                                             | Size of the radio controls.          |
| `labelTooltip`    | `string`                  | —             | Tooltip text for an info icon next to the label.                                                                                                                                                                                                                                                                                                                                   |
| `xstyle`          | `StyleXStyles`            | —             | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value: not an inline style object like style={{}}.                                                                                                                                                                                                                                |

## Components

### RadioListItem

See `astryx component RadioListItem` for props and usage.

## Theming

| Component class          | Preferred data attributes                    | Props             | States            |
| ------------------------ | -------------------------------------------- | ----------------- | ----------------- |
| `astryx-radio-list`      | `data-orientation`, `data-size`              | orientation, size | —                 |
| `astryx-radio-list-item` | —                                            | —                 | —                 |
| `astryx-radio`           | `data-size`, `data-checked`, `data-disabled` | size              | checked, disabled |
| `astryx-radio-dot`       | `data-size`                                  | size              | —                 |

Override in defineTheme:

```ts
components: {
  'radio-list': {
    base: { /* CSS properties */ },
    'orientation:value': { /* variant-specific */ },
  },
  'radio-list-item': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

RadioListHorizontalLayout
Radio list with horizontal orientation for compact selections.
RadioListPricingTier
Radio list with pricing info in end content for plan selection.
RadioListShowcase
RadioListWithDescriptions
Radio list with descriptions on the group and each item.
RadioListWithValidation
Required radio list with an error message when nothing is selected.
RadioListItemBasic
Radio items with labels and descriptions inside a controlled RadioList. Use for single-choice option groups like shipping methods.
RadioListItemShowcase
Radio list items with labels, descriptions, and different states including disabled.
