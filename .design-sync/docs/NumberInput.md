# NumberInput

A form input for numeric values with built-in validation, min/max constraints, and step controls. Use NumberInput for quantities, measurements, percentages, and similar inputs.

**Import:** `import {NumberInput} from '@astryxdesign/core/NumberInput';`

## Anatomy

| Element     | Required | Description                                     |
| ----------- | -------- | ----------------------------------------------- |
| Label       | Yes      | The label for the number input.                 |
| Description | No       | Additional description text below the label.    |
| Icon        | No       | An optional icon within the input.              |
| Placeholder | No       | Placeholder text shown when the input is empty. |
| Spinner     | No       | Increment and decrement controls for the value. |

## Best Practices

- **Do:** Set min, max, and step to guide users toward valid values.
- **Do:** Show units (e.g. "%" or "GB") so users know what the number represents.
- **Don't:** Use NumberInput for free-form text that happens to contain numbers; use TextInput instead.
- **Don't:** Set both isOptional and isRequired on the same field.
- **Don't:** Wrap a disabled NumberInput in Tooltip to explain why it's disabled; disabled controls swallow the hover events the wrapper needs. Use the disabledMessage prop instead.

## Props

| Prop              | Type                                        | Default   | Description                                                                                                                                                                                                                                 |
| ----------------- | ------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`           | `string`                                    | —         | Label text for the input (always rendered for accessibility). **(required)**                                                                                                                                                                |
| `value`           | `number                                     | null      | undefined`                                                                                                                                                                                                                                  | —                                                                  | Current value of the input. **(required)** |
| `onChange`        | `(value: number) => void`                   | —         | Callback fired when input value changes (only on valid input). **(required)**                                                                                                                                                               |
| `size`            | `'sm'                                       | 'md'      | 'lg'`                                                                                                                                                                                                                                       | `'md'`                                                             | Size variant.                              |
| `isLabelHidden`   | `boolean`                                   | —         | Visually hide the label (still accessible to screen readers).                                                                                                                                                                               |
| `description`     | `string`                                    | —         | Description text displayed between the label and input.                                                                                                                                                                                     |
| `isOptional`      | `boolean`                                   | —         | Whether the field is optional (mutually exclusive with isRequired).                                                                                                                                                                         |
| `isRequired`      | `boolean`                                   | —         | Whether the field is required (mutually exclusive with isOptional).                                                                                                                                                                         |
| `isDisabled`      | `boolean`                                   | —         | Whether the input is disabled.                                                                                                                                                                                                              |
| `disabledMessage` | `string`                                    | —         | Explains why the input is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the input focusable via aria-disabled (the field becomes read-only). Use this instead of wrapping a disabled NumberInput in Tooltip. |
| `placeholder`     | `string`                                    | —         | Placeholder text.                                                                                                                                                                                                                           |
| `labelTooltip`    | `string`                                    | —         | Tooltip text to display in an info icon at the end of the label.                                                                                                                                                                            |
| `startIcon`       | `IconType`                                  | —         | Icon to display at the start of the input. See `npx astryx docs icons` for valid semantic names.                                                                                                                                            |
| `labelIcon`       | `IconType`                                  | —         | Icon to display before the label text. See `npx astryx docs icons` for valid semantic names.                                                                                                                                                |
| `status`          | `{type: 'error'                             | 'warning' | 'success', message?: string}`                                                                                                                                                                                                               | —                                                                  | Validation status with optional message.   |
| `min`             | `number                                     | null`     | —                                                                                                                                                                                                                                           | Minimum value allowed.                                             |
| `max`             | `number                                     | null`     | —                                                                                                                                                                                                                                           | Maximum value allowed.                                             |
| `step`            | `number                                     | null`     | `1`                                                                                                                                                                                                                                         | Step increment for the input.                                      |
| `units`           | `string                                     | null`     | —                                                                                                                                                                                                                                           | Units text to display at the end of the input (e.g., "%" or "GB"). |
| `isIntegerOnly`   | `boolean`                                   | —         | Only allow integer values (no floating point).                                                                                                                                                                                              |
| `hasClear`        | `boolean`                                   | `false`   | Shows a clear (×) button when the input has a value. When true, the onChange callback also accepts null to signal the user cleared the input.                                                                                               |
| `htmlName`        | `string`                                    | —         | HTML name attribute for form submissions.                                                                                                                                                                                                   |
| `autoComplete`    | `string`                                    | —         | HTML autocomplete attribute.                                                                                                                                                                                                                |
| `hasAutoFocus`    | `boolean`                                   | —         | Whether to focus the input on mount.                                                                                                                                                                                                        |
| `onFocus`         | `(e: FocusEvent<HTMLInputElement>) => void` | —         | Callback fired when the input receives focus.                                                                                                                                                                                               |
| `onBlur`          | `(e: FocusEvent<HTMLInputElement>) => void` | —         | Callback fired when the input loses focus.                                                                                                                                                                                                  |
| `onEnter`         | `() => void`                                | —         | Callback fired when the user presses the Enter key.                                                                                                                                                                                         |

## Theming

| Component class       | Preferred data attributes  | Props        | States |
| --------------------- | -------------------------- | ------------ | ------ |
| `astryx-number-input` | `data-size`, `data-status` | size, status | —      |

Override in defineTheme:

```ts
components: {
  'number-input': {
    base: { /* CSS properties */ },
    'size:value': { /* variant-specific */ },
  },
}
```

Related block templates:

NumberInputClearableNumberInput
Number input with a clear button, unit suffix, and min/max constraint
NumberInputRangeNumberInput
Number input with min/max boundaries and a helper description
NumberInputShowcase
A number input for quantity entry.
NumberInputStatuses
Number inputs showing error, warning, and success validation states
NumberInputWithUnits
Number input with a percentage unit suffix and valid range
