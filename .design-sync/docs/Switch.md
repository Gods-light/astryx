# Switch

A toggle control for on/off states that take effect immediately. Supports labels, descriptions, loading states, and validation. Use it for settings or preferences that apply instantly. For changes requiring a form submission, use a checkbox instead.

**Import:** `import {Switch} from '@astryxdesign/core/Switch';`

## Best Practices

- **Do:** Use for settings that apply immediately; the toggle should take effect without a separate save action.
- **Do:** Pair with a clear, concise label that describes the setting being controlled.
- **Don't:** Use for options that require a form submission to take effect; use a checkbox instead.
- **Don't:** Use a switch for multi-state values; it's strictly on/off.
- **Don't:** Wrap a disabled switch in Tooltip to explain why it is disabled; disabled controls swallow the hover events the wrapper needs. Use the disabledMessage prop instead.

## Props

| Prop              | Type                                                           | Default        | Description                                                                                                                                                                                                                                                                                               |
| ----------------- | -------------------------------------------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ref`             | `React.Ref<HTMLInputElement>`                                  | —              | Ref forwarded to the underlying <input> element.                                                                                                                                                                                                                                                          |
| `label`           | `string`                                                       | —              | Label text for the switch (always rendered for accessibility). **(required)**                                                                                                                                                                                                                             |
| `value`           | `boolean`                                                      | —              | Whether the switch is on or off. **(required)**                                                                                                                                                                                                                                                           |
| `onChange`        | `(checked: boolean, e: ChangeEvent<HTMLInputElement>) => void` | —              | Callback fired when the switch state changes.                                                                                                                                                                                                                                                             |
| `changeAction`    | `(checked: boolean, e: ChangeEvent<HTMLInputElement>) => void  | Promise<void>` | —                                                                                                                                                                                                                                                                                                         | Async action fired after onChange. Triggers optimistic UI and shows a loading spinner until the promise resolves.                                                                                |
| `isLoading`       | `boolean`                                                      | `false`        | Whether the switch is in a loading state, showing a spinner inside the thumb.                                                                                                                                                                                                                             |
| `isLabelHidden`   | `boolean`                                                      | `false`        | Visually hides the label while keeping it accessible to screen readers.                                                                                                                                                                                                                                   |
| `description`     | `string`                                                       | —              | Description text displayed below the label.                                                                                                                                                                                                                                                               |
| `isDisabled`      | `boolean`                                                      | `false`        | Whether the switch is disabled.                                                                                                                                                                                                                                                                           |
| `htmlName`        | `string`                                                       | —              | The HTML name attribute for the underlying checkbox input, useful for form submissions (submits "on" when the switch is on).                                                                                                                                                                              |
| `disabledMessage` | `string`                                                       | —              | Explains why the switch is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the switch focusable via aria-disabled (toggling stays blocked). Use this instead of wrapping a disabled Switch in Tooltip. Disabled controls swallow the hover events an external Tooltip needs. |
| `isOptional`      | `boolean`                                                      | `false`        | Whether the field is optional. Mutually exclusive with isRequired.                                                                                                                                                                                                                                        |
| `isRequired`      | `boolean`                                                      | `false`        | Whether the switch is required. Mutually exclusive with isOptional.                                                                                                                                                                                                                                       |
| `status`          | `InputStatus`                                                  | —              | Status indicator with type and message. Displays a colored message box below the switch and sets aria-invalid when type is "error".                                                                                                                                                                       |
| `onFocus`         | `(e: FocusEvent<HTMLInputElement>) => void`                    | —              | Callback fired when the switch receives focus.                                                                                                                                                                                                                                                            |
| `onBlur`          | `(e: FocusEvent<HTMLInputElement>) => void`                    | —              | Callback fired when the switch loses focus.                                                                                                                                                                                                                                                               |
| `labelIcon`       | `IconType`                                                     | —              | Icon displayed before the label text. See `npx astryx docs icons` for valid semantic names.                                                                                                                                                                                                               |
| `labelTooltip`    | `string`                                                       | —              | Tooltip text shown in an info icon at the end of the label.                                                                                                                                                                                                                                               |
| `labelPosition`   | `'start'                                                       | 'end'`         | `'end'`                                                                                                                                                                                                                                                                                                   | Which side of the switch the label appears on. "start" places the label before the switch.                                                                                                       |
| `labelSpacing`    | `'hug'                                                         | 'spread'`      | `'hug'`                                                                                                                                                                                                                                                                                                   | Spacing behavior between label and switch. "hug" places them next to each other; "spread" pushes them to opposite ends of the container (full width). "default" is a deprecated alias for "hug". |

## Theming

| Component class       | Preferred data attributes                   | Props                       | States            |
| --------------------- | ------------------------------------------- | --------------------------- | ----------------- |
| `astryx-switch`       | `data-checked`, `data-disabled`             | —                           | checked, disabled |
| `astryx-switch-thumb` | `data-checked`                              | —                           | checked           |
| `astryx-switch-field` | `data-label-position`, `data-label-spacing` | labelPosition, labelSpacing | —                 |

Override in defineTheme:

```ts
components: {
  'switch': {
    base: { /* CSS properties */ },
    'checked': { /* state-specific */ },
  },
  'switch-thumb': {
    base: { /* CSS properties */ },
    'checked': { /* state-specific */ },
  },
}
```

Related block templates:

PopoverSettingsPanel
Popover with toggle switches for managing user preferences like notifications, dark mode, and sounds.
SwitchDisabled
Disabled switch with label and description for gated features.
SwitchSettingsPanel
Settings panel with spread-spaced switches in a card.
SwitchShowcase
A toggle switch for enabling notifications.
SwitchWithDescription
Toggle with a label and supporting description text.
SwitchWithStatus
Switches with error, warning, and success validation states.
