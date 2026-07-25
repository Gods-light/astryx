# DateInput

DateInput lets the user type or pick a date from a calendar popover. Use it for scheduling, deadlines, booking dates, or any form field that needs a specific calendar date.

**Import:** `import {DateInput} from '@astryxdesign/core/DateInput';`

## Anatomy

| Element          | Required | Description                                                                             |
| ---------------- | -------- | --------------------------------------------------------------------------------------- |
| Label            | Yes      | Text above the input describing what date is expected.                                  |
| Text input       | Yes      | A field where the user can type a date directly. Parses common formats like MM/DD/YYYY. |
| Calendar icon    | Yes      | A button that opens the calendar popover for visual date picking.                       |
| Calendar popover | No       | A month grid that appears when the icon is clicked or the input is focused.             |
| Clear button     | No       | A × button that resets the date value. Shown when hasClear is true and a date is set.   |
| Status message   | No       | An error, warning, or success message below the input.                                  |

## Best Practices

- **Do:** Provide clear labels and descriptions so users understand what date is expected.
- **Do:** Use min, max, and dateConstraints to restrict selectable dates to valid ranges.
- **Do:** Use hasClear when the date is optional so the user can reset it.
- **Do:** Show a loading state with changeAction when the date triggers a server-side save.
- **Do:** Use DateInput inside InputGroup when adding a short static prefix or suffix, such as a due-date hint.
- **Don't:** Use a DateInput for free-form text that does not represent a calendar date.
- **Don't:** Hide the label without surrounding context that makes the field purpose obvious.
- **Don't:** Rely on the calendar alone; the text input lets users type dates directly, which is faster for known dates.
- **Don't:** Wrap a disabled DateInput in Tooltip to explain why it is disabled; disabled triggers swallow the hover events the wrapper needs. Use the disabledMessage prop instead.

## Props

| Prop              | Type                             | Default             | Description                                                                                                                                                                                                                                                                                                  |
| ----------------- | -------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `label`           | `string`                         | —                   | Label text. **(required)**                                                                                                                                                                                                                                                                                   |
| `isLabelHidden`   | `boolean`                        | `false`             | Visually hide the label.                                                                                                                                                                                                                                                                                     |
| `description`     | `string`                         | —                   | Helper text displayed below the label.                                                                                                                                                                                                                                                                       |
| `isOptional`      | `boolean`                        | `false`             | Show an "(optional)" indicator next to the label.                                                                                                                                                                                                                                                            |
| `isRequired`      | `boolean`                        | `false`             | Mark the field as required.                                                                                                                                                                                                                                                                                  |
| `isDisabled`      | `boolean`                        | `false`             | Disable the input and calendar.                                                                                                                                                                                                                                                                              |
| `disabledMessage` | `string`                         | —                   | Explains why the input is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the field focusable via aria-disabled (activation stays blocked). Use this instead of wrapping a disabled DateInput in Tooltip. Disabled controls swallow the hover events an external Tooltip needs. |
| `value`           | `ISODateString`                  | —                   | Selected date in YYYY-MM-DD format.                                                                                                                                                                                                                                                                          |
| `onChange`        | `(value: ISODateString           | undefined) => void` | —                                                                                                                                                                                                                                                                                                            | Callback invoked when the selected date changes.                   |
| `changeAction`    | `(value: ISODateString           | undefined) => void  | Promise<void>`                                                                                                                                                                                                                                                                                               | —                                                                  | Async action fired after onChange. Drives optimistic UI updates via useTransition. |
| `isLoading`       | `boolean`                        | `false`             | Whether the input is in a loading state. Disables interaction and shows a spinner.                                                                                                                                                                                                                           |
| `min`             | `ISODateString`                  | —                   | Minimum selectable date (YYYY-MM-DD).                                                                                                                                                                                                                                                                        |
| `max`             | `ISODateString`                  | —                   | Maximum selectable date (YYYY-MM-DD).                                                                                                                                                                                                                                                                        |
| `dateConstraints` | `Array<(date: Date) => boolean>` | —                   | Array of custom constraint functions that disable specific dates.                                                                                                                                                                                                                                            |
| `placeholder`     | `string`                         | `'Select a date'`   | Placeholder text shown in the text input.                                                                                                                                                                                                                                                                    |
| `size`            | `'sm'                            | 'md'                | 'lg'`                                                                                                                                                                                                                                                                                                        | `'md'`                                                             | Size of the input control.                                                         |
| `status`          | `InputStatus`                    | —                   | Status indicator object for error, warning, or success states with a message.                                                                                                                                                                                                                                |
| `labelTooltip`    | `string`                         | —                   | Tooltip text displayed via an info icon at the end of the label.                                                                                                                                                                                                                                             |
| `hasClear`        | `boolean`                        | `false`             | Shows a clear (×) button when a date value is set. Clicking it clears the value and returns focus to the input.                                                                                                                                                                                              |
| `numberOfMonths`  | `1                               | 2`                  | `1`                                                                                                                                                                                                                                                                                                          | Number of months displayed simultaneously in the calendar popover. |
| `xstyle`          | `StyleXStyles`                   | —                   | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value, not an inline style object like style={{}}.                                                                                                                                                          |

## Theming

| Component class     | Preferred data attributes  | Props        | States |
| ------------------- | -------------------------- | ------------ | ------ |
| `astryx-date-input` | `data-size`, `data-status` | size, status | —      |

Override in defineTheme:

```ts
components: {
  'date-input': {
    base: { /* CSS properties */ },
    'size:value': { /* variant-specific */ },
  },
}
```

Related block templates:

DateInputClearable
Date input with a clear button that resets the value. Use when the date field is optional and the user may need to undo their selection.
DateInputDateRange
Date input constrained to a min/max window. Use when only certain dates are valid, like booking availability or a fiscal quarter.
DateInputShowcase
A date input field with a calendar popover. Type a date or click the calendar icon to pick one.
DateInputWithDescription
Date input with helper text below the label explaining what the field expects. Use when the purpose of the date is not obvious from the label alone.
DateInputWithValidation
Date input in all three status states: error, warning, and success. Use to surface validation issues, caution the user, or confirm a valid selection.
