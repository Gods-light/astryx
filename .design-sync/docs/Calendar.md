# Calendar

Calendar lets the user pick a date or date range from a month grid. Use it in booking flows, scheduling UIs, date filters, or anywhere the user needs to see surrounding dates for context.

**Import:** `import {Calendar} from '@astryxdesign/core/Calendar';`

## Anatomy

| Element      | Required | Description                                                                                                             |
| ------------ | -------- | ----------------------------------------------------------------------------------------------------------------------- |
| Month header | Yes      | The month name and year with navigation arrows to move between months. The arrows mirror automatically under dir="rtl". |
| Day grid     | Yes      | A 7-column grid of days with column headers for the day names.                                                          |
| Selected day | No       | The currently selected date, highlighted. In range mode, the start and end dates plus the days between them.            |
| Today marker | No       | A subtle indicator on the current date for orientation.                                                                 |

## Best Practices

- **Do:** Set min and max dates to limit selection to a valid window, like only future dates for a booking or the current quarter for a report.
- **Do:** Use range mode when the user needs to pick a start and end date, like a trip or a time-off request.
- **Do:** Use dateConstraints to disable specific dates like weekends or holidays, and explain why they are unavailable.
- **Do:** Show two months side by side when the user frequently selects dates that span a month boundary.
- **Don't:** Use a calendar for dates far in the past or future like a birth date. A text input is faster for open-ended entry.
- **Don't:** Disable large blocks of dates without context. The user should understand why dates are unavailable.

## Props

| Prop                  | Type                                 | Default    | Description                                                        |
| --------------------- | ------------------------------------ | ---------- | ------------------------------------------------------------------ |
| `mode`                | `'single'                            | 'range'`   | `'single'`                                                         | Selection mode.              |
| `value`               | `ISODateString                       | DateRange` | —                                                                  | Controlled selected value.   |
| `defaultValue`        | `ISODateString                       | DateRange` | —                                                                  | Uncontrolled default value.  |
| `onChange`            | `Function`                           | —          | Selection callback.                                                |
| `numberOfMonths`      | `1                                   | 2`         | `1`                                                                | Number of months to display. |
| `min`                 | `ISODateString`                      | —          | Minimum selectable date.                                           |
| `max`                 | `ISODateString`                      | —          | Maximum selectable date.                                           |
| `dateConstraints`     | `Array<(date: Date) => boolean>`     | —          | Custom constraint functions.                                       |
| `focusDate`           | `ISODateString`                      | —          | Controlled visible month.                                          |
| `onFocusDateChange`   | `(focusDate: ISODateString) => void` | —          | Navigation callback.                                               |
| `handleRef`           | `React.Ref<CalendarHandle>`          | —          | Imperative handle for calendar navigation, including navigateTo(). |
| `hasOutsideDays`      | `boolean`                            | `true`     | Show days from adjacent months.                                    |
| `hasWeekNumbers`      | `boolean`                            | `false`    | Show ISO week numbers.                                             |
| `hasVariableRowCount` | `boolean`                            | `false`    | Variable vs fixed 6-row grid.                                      |
| `weekStartsOn`        | `0                                   | 1          | 2                                                                  | 3                            | 4   | 5   | 6   | 'sun' | 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat'` | `0` | First day of week. Accepts a number (0=Sunday) or a three-letter day name (e.g. "mon"). |

## Theming

| Component class       | Preferred data attributes                                       | Props | States                              |
| --------------------- | --------------------------------------------------------------- | ----- | ----------------------------------- |
| `astryx-calendar`     | `data-mode`                                                     | mode  | —                                   |
| `astryx-calendar-day` | `data-selected`, `data-today`, `data-disabled`, `data-in-range` | —     | selected, today, disabled, in-range |

Override in defineTheme:

```ts
components: {
  'calendar': {
    base: { /* CSS properties */ },
    'mode:value': { /* variant-specific */ },
  },
  'calendar-day': {
    base: { /* CSS properties */ },
    'selected': { /* state-specific */ },
  },
}
```

Related block templates:

CalendarConstraints
Limit which dates can be selected using min/max bounds and custom rules like weekdays only. Use for scheduling UIs where certain dates are unavailable.
CalendarRangeWithValue
Pick a start and end date with the range highlighted between them. Use for booking dates, time-off requests, or report filters.
CalendarShowcase
An interactive single-date calendar with a selected date. Click any day to change the selection.
CalendarSingle
Pick one date from a month grid. Use for appointment dates, due dates, or any field that needs a single date.
CalendarTwoMonths
Two months side by side for selecting ranges that span a month boundary. Use in booking or travel UIs where check-in and check-out often fall in different months.
