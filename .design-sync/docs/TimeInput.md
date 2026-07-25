# TimeInput

TimeInput lets users enter a time of day and converts it to a standard format. It also allows users to adjust times using the arrow keys. Use it in forms, scheduling flows, or any interface where users need to select a specific time.

**Import:** `import {TimeInput} from '@astryxdesign/core/TimeInput';`

## Anatomy

| Element      | Required | Description                                                                           |
| ------------ | -------- | ------------------------------------------------------------------------------------- |
| Clock icon   | No       | A leading clock icon that identifies the field as a time input.                       |
| Text input   | Yes      | The editable text field where users type or see the formatted time.                   |
| Clear button | No       | A trailing button to reset the value, shown when hasClear is true and a value is set. |
| Status icon  | No       | A trailing icon indicating error, warning, or success state.                          |
| Spinner      | No       | Replaces trailing content during loading to show an async action is in progress.      |

## Best Practices

- **Do:** Choose the hour format (12h or 24h) that matches your audience's locale: 12-hour with AM/PM for US-centric UIs, 24-hour for international or technical contexts.
- **Do:** Set min and max constraints when the context has a valid range, like business hours or event windows, so users cannot submit an out-of-bounds time.
- **Do:** Provide a description or placeholder that hints at the expected format or purpose, like "Business hours: 9 AM – 5 PM".
- **Do:** Use the status prop to surface validation errors inline: show a message like "Time must be during business hours" so users know exactly what to fix.
- **Do:** Enable hasClear when the field is optional, so users can remove a previously selected time.
- **Do:** Place TimeInput inside InputGroup when the time needs a single-line prefix or suffix addon, like a start/end label or timezone marker.
- **Don't:** Don't use TimeInput for combined date-and-time selection; pair it with a separate DateInput instead.
- **Don't:** Don't hide the label; even when space is tight, keep the label visible or provide a description so the purpose is clear.
- **Don't:** Wrap a disabled TimeInput in Tooltip to explain why it is disabled; disabled triggers swallow the hover events the wrapper needs. Use the disabledMessage prop instead.

## Props

| Prop              | Type                   | Default             | Description                                                                                                                                                                                                                                                                                                  |
| ----------------- | ---------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `label`           | `string`               | —                   | Label text for the input (required for accessibility). **(required)**                                                                                                                                                                                                                                        |
| `isLabelHidden`   | `boolean`              | `false`             | Visually hides the label while keeping it accessible to screen readers.                                                                                                                                                                                                                                      |
| `description`     | `string`               | —                   | Description text displayed between the label and input.                                                                                                                                                                                                                                                      |
| `isOptional`      | `boolean`              | `false`             | Shows an "(optional)" indicator next to the label. Mutually exclusive with isRequired.                                                                                                                                                                                                                       |
| `isRequired`      | `boolean`              | `false`             | Marks the field as required and sets aria-required. Mutually exclusive with isOptional.                                                                                                                                                                                                                      |
| `isDisabled`      | `boolean`              | `false`             | Disables the input and suppresses interactions.                                                                                                                                                                                                                                                              |
| `disabledMessage` | `string`               | —                   | Explains why the input is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the field focusable via aria-disabled (activation stays blocked). Use this instead of wrapping a disabled TimeInput in Tooltip. Disabled controls swallow the hover events an external Tooltip needs. |
| `value`           | `ISOTimeString`        | —                   | Controlled time value in ISO format (HH:MM or HH:MM:SS).                                                                                                                                                                                                                                                     |
| `onChange`        | `(value: ISOTimeString | undefined) => void` | —                                                                                                                                                                                                                                                                                                            | Callback fired when the time changes. Receives undefined when the input is cleared.                          |
| `changeAction`    | `(value: ISOTimeString | undefined) => void  | Promise<void>`                                                                                                                                                                                                                                                                                               | —                                                                                                            | Async action fired after onChange. Wrapped in a React transition to provide optimistic UI; triggers the loading spinner while pending. |
| `isLoading`       | `boolean`              | `false`             | Puts the input into a loading state, displaying a spinner.                                                                                                                                                                                                                                                   |
| `min`             | `ISOTimeString`        | —                   | Minimum selectable time in ISO format. Values outside the range are rejected.                                                                                                                                                                                                                                |
| `max`             | `ISOTimeString`        | —                   | Maximum selectable time in ISO format. Values outside the range are rejected.                                                                                                                                                                                                                                |
| `hasSeconds`      | `boolean`              | `false`             | Includes seconds in the time display and parsing.                                                                                                                                                                                                                                                            |
| `hasClear`        | `boolean`              | `false`             | Shows a clear button when a value is set and the input is not disabled.                                                                                                                                                                                                                                      |
| `hourFormat`      | `'12h'                 | '24h'`              | `'12h'`                                                                                                                                                                                                                                                                                                      | Controls the display format. '12h' shows AM/PM (e.g. '2:30 PM'); '24h' uses 24-hour notation (e.g. '14:30'). |
| `increment`       | `number`               | `1`                 | Number of minutes to add or subtract when the user presses the up or down arrow key.                                                                                                                                                                                                                         |
| `placeholder`     | `string`               | `'Select a time'`   | Placeholder text shown when no time is selected. When the input is focused and empty, a format hint overrides this text.                                                                                                                                                                                     |
| `size`            | `'sm'                  | 'md'                | 'lg'`                                                                                                                                                                                                                                                                                                        | `'md'`                                                                                                       | Controls the height of the input element.                                                                                              |
| `status`          | `InputStatus`          | —                   | Status indicator that colors the border and displays an icon. When a message is provided it is rendered below the input.                                                                                                                                                                                     |
| `labelTooltip`    | `string`               | —                   | Tooltip text rendered as an info icon at the end of the label row.                                                                                                                                                                                                                                           |
| `xstyle`          | `StyleXStyles`         | —                   | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value, not an inline style object like style={{}}.                                                                                                                                                          |

## Theming

| Component class     | Preferred data attributes  | Props        | States |
| ------------------- | -------------------------- | ------------ | ------ |
| `astryx-time-input` | `data-size`, `data-status` | size, status | —      |

Override in defineTheme:

```ts
components: {
  'time-input': {
    base: { /* CSS properties */ },
    'size:value': { /* variant-specific */ },
  },
}
```

Related block templates:

TimeInputConstrained
Time inputs with min/max constraints limiting selection to specific windows. Use to prevent out-of-bounds selections for appointments, reservations, or shift scheduling.
TimeInputFormats
12-hour, 24-hour, and seconds formats side by side. Use 12h for US-centric UIs, 24h for international or technical contexts, and seconds for precise timing.
TimeInputIncrement
Time input with a custom step increment. Arrow keys jump by the specified interval (e.g. 15 minutes) for quick slot-based scheduling.
TimeInputShowcase
A time input field.
TimeInputStates
Default, disabled, error, warning, and success states. Use status messages to give users clear feedback about their time selection.
