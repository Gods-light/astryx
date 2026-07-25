# DateRangeInput

DateRangeInput lets users select a start and end date from a dual-month calendar popover. Use it for filtering data by time period, report generation, analytics dashboards, and booking flows.

**Import:** `import {DateRangeInput} from '@astryxdesign/core/DateRangeInput';`

## Anatomy

| Element          | Required | Description                                                                      |
| ---------------- | -------- | -------------------------------------------------------------------------------- |
| Label            | Yes      | Text above the trigger describing what date range is expected.                   |
| Trigger button   | Yes      | A button showing the formatted range or placeholder. Clicking opens the popover. |
| Calendar icon    | Yes      | A trailing icon that also opens the popover.                                     |
| Calendar popover | Yes      | A dual-month calendar grid with range selection and hover preview.               |
| Preset sidebar   | No       | A list of preset range options beside the calendar.                              |
| Clear button     | No       | A × button that resets the range to null.                                        |
| Status message   | No       | An error, warning, or success message below the trigger.                         |

## Best Practices

- **Do:** Use presets for common ranges like "Last 7 days" to speed up selection.
- **Do:** Use min/max to constrain selectable dates to valid ranges.
- **Do:** Keep hasClear enabled (default) so users can reset the filter.
- **Do:** Provide clear labels and descriptions so users understand what the range controls.
- **Don't:** Use DateRangeInput when only a single date is needed; use DateInput instead.
- **Don't:** Hide the label without surrounding context that makes the purpose obvious.
- **Don't:** Wrap a disabled DateRangeInput in Tooltip to explain why it is disabled; disabled triggers swallow the hover events the wrapper needs. Use the disabledMessage prop instead.

## Props

| Prop              | Type                             | Default               | Description                                                                                                                                                                                                                                                                                                                                 |
| ----------------- | -------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`           | `string`                         | —                     | Label text. **(required)**                                                                                                                                                                                                                                                                                                                  |
| `isLabelHidden`   | `boolean`                        | `false`               | Visually hide the label.                                                                                                                                                                                                                                                                                                                    |
| `description`     | `string`                         | —                     | Helper text displayed below the label.                                                                                                                                                                                                                                                                                                      |
| `isOptional`      | `boolean`                        | `false`               | Show an "(optional)" indicator.                                                                                                                                                                                                                                                                                                             |
| `isRequired`      | `boolean`                        | `false`               | Mark the field as required.                                                                                                                                                                                                                                                                                                                 |
| `isDisabled`      | `boolean`                        | `false`               | Disable the trigger and picker.                                                                                                                                                                                                                                                                                                             |
| `disabledMessage` | `string`                         | —                     | Explains why the input is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the field focusable via aria-disabled (activation stays blocked). Use this instead of wrapping a disabled DateRangeInput in Tooltip. Disabled controls swallow the hover events an external Tooltip needs.                           |
| `value`           | `DateRange                       | null`                 | —                                                                                                                                                                                                                                                                                                                                           | Selected date range or null. Import the `DateRange` type from `@astryxdesign/core/DateRangeInput` — it is `{start: ISODateString, end: ISODateString}`. Do NOT redeclare your own DateRange type; use the exported one so TypeScript structurally matches. **(required)** |
| `onChange`        | `(value: DateRange               | null) => void`        | —                                                                                                                                                                                                                                                                                                                                           | Callback when the range changes. Called with null on clear. **(required)**                                                                                                                                                                                                |
| `changeAction`    | `(value: DateRange               | null) => void         | Promise<void>`                                                                                                                                                                                                                                                                                                                              | —                                                                                                                                                                                                                                                                         | Async action fired after onChange. Drives optimistic UI updates via useTransition. |
| `isLoading`       | `boolean`                        | `false`               | Whether the input is in a loading state. Disables interaction and shows a spinner.                                                                                                                                                                                                                                                          |
| `min`             | `ISODateString`                  | —                     | Minimum selectable date. `ISODateString` is a template literal type (`\`${number}${number}${number}${number}-${number}${number}-${number}${number}\``) — pass a string literal like `"2026-01-28"`, not a runtime string variable. Import it from `@astryxdesign/core/Calendar`or use`as ISODateString` if computing the value dynamically. |
| `max`             | `ISODateString`                  | —                     | Maximum selectable date. Same template literal type as `min` — use a YYYY-MM-DD string literal or cast with `as ISODateString`.                                                                                                                                                                                                             |
| `dateConstraints` | `Array<(date: Date) => boolean>` | —                     | Custom constraint functions to disable specific dates.                                                                                                                                                                                                                                                                                      |
| `presets`         | `Array<DateRangePreset>`         | —                     | Preset ranges shown as quick-select options beside the calendar.                                                                                                                                                                                                                                                                            |
| `hasClear`        | `boolean`                        | `true`                | Shows a clear button when a range is selected.                                                                                                                                                                                                                                                                                              |
| `placeholder`     | `string`                         | `'Select date range'` | Placeholder text when no range is selected.                                                                                                                                                                                                                                                                                                 |
| `size`            | `'sm'                            | 'md'                  | 'lg'`                                                                                                                                                                                                                                                                                                                                       | `'md'`                                                                                                                                                                                                                                                                    | Size of the trigger.                                                               |
| `status`          | `InputStatus`                    | —                     | Status indicator for error, warning, or success states.                                                                                                                                                                                                                                                                                     |
| `labelTooltip`    | `string`                         | —                     | Tooltip text via info icon at label end.                                                                                                                                                                                                                                                                                                    |
| `numberOfMonths`  | `1                               | 2`                    | `2`                                                                                                                                                                                                                                                                                                                                         | Number of months in the calendar.                                                                                                                                                                                                                                         |
| `xstyle`          | `StyleXStyles`                   | —                     | StyleX styles for layout customization.                                                                                                                                                                                                                                                                                                     |

## Theming

| Component class           | Preferred data attributes  | Props        | States |
| ------------------------- | -------------------------- | ------------ | ------ |
| `astryx-date-range-input` | `data-size`, `data-status` | size, status | —      |

Override in defineTheme:

```ts
components: {
  'date-range-input': {
    base: { /* CSS properties */ },
    'size:value': { /* variant-specific */ },
  },
}
```

Related block templates:

DateRangeInputShowcase
A date range picker with a button trigger and dual-month calendar popover with preset ranges.
DateRangeInputWithPresets
Date range picker with quick-select presets for common periods. Use for analytics dashboards, report filters, or any context where users frequently select standard time windows.
DateRangeInputWithValidation
Date range input in all three status states: error, warning, and success. Use to surface booking conflicts, flag high-demand periods, or confirm an available range.
