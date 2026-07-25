# DateTimeInput

DateTimeInput combines a calendar popover with a time input for selecting both a date and time in a single interaction flow. Use it for scheduling, event creation, deadline setting, or any form field that needs a specific datetime.

**Import:** `import {DateTimeInput} from '@astryxdesign/core/DateTimeInput';`

## Anatomy

| Element          | Required | Description                                                                      |
| ---------------- | -------- | -------------------------------------------------------------------------------- |
| Label            | Yes      | Text above the input describing what datetime is expected.                       |
| Date input       | Yes      | A text input where the user can type a date. Clicking opens a calendar popover.  |
| Calendar icon    | Yes      | A button that opens the calendar popover.                                        |
| Calendar popover | No       | A month grid that appears when the icon is clicked or the date input is focused. |
| Time input       | Yes      | A text input for entering the time, displayed beside the date input.             |
| Clear button     | No       | A × button that resets the datetime value.                                       |
| Status message   | No       | An error, warning, or success message below the inputs.                          |

## Best Practices

- **Do:** Provide clear labels and descriptions so users understand what datetime is expected.
- **Do:** Use min and max to restrict selectable datetimes to valid ranges.
- **Do:** Use hasClear when the datetime is optional so the user can reset it.
- **Do:** Choose the hour format (12h or 24h) that matches your audience's locale.
- **Don't:** Use DateTimeInput when only a date is needed; use DateInput instead.
- **Don't:** Use DateTimeInput when only a time is needed; use TimeInput instead.
- **Don't:** Hide the label without surrounding context that makes the field purpose obvious.
- **Don't:** Wrap a disabled DateTimeInput in Tooltip to explain why it is disabled; disabled triggers swallow the hover events the wrapper needs. Use the disabledMessage prop instead.

## Props

| Prop              | Type                             | Default             | Description                                                                                                                                                                                                                                                                                                      |
| ----------------- | -------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`           | `string`                         | —                   | Label text. **(required)**                                                                                                                                                                                                                                                                                       |
| `isLabelHidden`   | `boolean`                        | `false`             | Visually hide the label.                                                                                                                                                                                                                                                                                         |
| `description`     | `string`                         | —                   | Helper text displayed below the label.                                                                                                                                                                                                                                                                           |
| `isOptional`      | `boolean`                        | `false`             | Show an "(optional)" indicator next to the label.                                                                                                                                                                                                                                                                |
| `isRequired`      | `boolean`                        | `false`             | Mark the field as required.                                                                                                                                                                                                                                                                                      |
| `isDisabled`      | `boolean`                        | `false`             | Disable the input and picker.                                                                                                                                                                                                                                                                                    |
| `disabledMessage` | `string`                         | —                   | Explains why the input is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the field focusable via aria-disabled (activation stays blocked). Use this instead of wrapping a disabled DateTimeInput in Tooltip. Disabled controls swallow the hover events an external Tooltip needs. |
| `value`           | `ISODateTimeString`              | —                   | Selected datetime in ISO 8601 format (YYYY-MM-DDTHH:MM or YYYY-MM-DDTHH:MM:SS).                                                                                                                                                                                                                                  |
| `onChange`        | `(value: ISODateTimeString       | undefined) => void` | —                                                                                                                                                                                                                                                                                                                | Callback invoked when the selected datetime changes. **(required)**  |
| `changeAction`    | `(value: ISODateTimeString       | undefined) => void  | Promise<void>`                                                                                                                                                                                                                                                                                                   | —                                                                    | Async action fired after onChange. Drives optimistic UI updates via useTransition. |
| `isLoading`       | `boolean`                        | `false`             | Whether the input is in a loading state. Disables interaction and shows a spinner.                                                                                                                                                                                                                               |
| `min`             | `ISODateTimeString`              | —                   | Minimum selectable datetime. Constrains both date and time selection.                                                                                                                                                                                                                                            |
| `max`             | `ISODateTimeString`              | —                   | Maximum selectable datetime. Constrains both date and time selection.                                                                                                                                                                                                                                            |
| `dateConstraints` | `Array<(date: Date) => boolean>` | —                   | Array of custom constraint functions that disable specific dates.                                                                                                                                                                                                                                                |
| `hasSeconds`      | `boolean`                        | `false`             | Include seconds in the time portion.                                                                                                                                                                                                                                                                             |
| `hourFormat`      | `'12h'                           | '24h'`              | `'12h'`                                                                                                                                                                                                                                                                                                          | Hour display format. '12h' shows AM/PM; '24h' uses 24-hour notation. |
| `timeIncrement`   | `1                               | 5                   | 10                                                                                                                                                                                                                                                                                                               | 15                                                                   | 30`                                                                                | `1` | Minutes to add or subtract when using arrow keys in the time input. |
| `hasClear`        | `boolean`                        | `false`             | Shows a clear button when a datetime value is set.                                                                                                                                                                                                                                                               |
| `placeholder`     | `string`                         | `'Select a date'`   | Placeholder text shown in the date portion when no date is selected.                                                                                                                                                                                                                                             |
| `timePlaceholder` | `string`                         | `'Select a time'`   | Placeholder text shown in the time portion when no time is selected.                                                                                                                                                                                                                                             |
| `timeLabel`       | `string`                         | —                   | Accessible label for the time portion. Defaults to "{label} time" so it is tied to the field label and localizable.                                                                                                                                                                                              |
| `size`            | `'sm'                            | 'md'                | 'lg'`                                                                                                                                                                                                                                                                                                            | `'md'`                                                               | Size of the input control.                                                         |
| `status`          | `InputStatus`                    | —                   | Status indicator object for error, warning, or success states with a message.                                                                                                                                                                                                                                    |
| `labelTooltip`    | `string`                         | —                   | Tooltip text displayed via an info icon at the end of the label.                                                                                                                                                                                                                                                 |
| `numberOfMonths`  | `1                               | 2`                  | `1`                                                                                                                                                                                                                                                                                                              | Number of months displayed simultaneously in the calendar.           |
| `xstyle`          | `StyleXStyles`                   | —                   | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value, not an inline style object like style={{}}.                                                                                                                                                              |

## Theming

| Component class          | Preferred data attributes  | Props        | States |
| ------------------------ | -------------------------- | ------------ | ------ |
| `astryx-date-time-input` | `data-size`, `data-status` | size, status | —      |

Override in defineTheme:

```ts
components: {
  'date-time-input': {
    base: { /* CSS properties */ },
    'size:value': { /* variant-specific */ },
  },
}
```

Related block templates:

DateTimeInputShowcase
A combined date and time picker. Click to open a calendar popover with a time input below.
DateTimeInputWithValidation
DateTimeInput in all three status states: error, warning, and success. Use to surface scheduling conflicts, caution the user about edge cases, or confirm a valid datetime.
