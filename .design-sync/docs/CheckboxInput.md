# CheckboxInput

CheckboxInput toggles a single on/off value. Use it for settings like "Enable notifications", terms acceptance, or opt-in choices. For multiple checkboxes in a group, use CheckboxList instead.

**Import:** `import {CheckboxInput} from '@astryxdesign/core/CheckboxInput';`

## Anatomy

| Element        | Required | Description                                                                   |
| -------------- | -------- | ----------------------------------------------------------------------------- |
| Checkbox       | Yes      | The check box itself: unchecked, checked, or indeterminate.                   |
| Label          | Yes      | Text describing what the checkbox controls. Always present for accessibility. |
| Description    | No       | Helper text below the label with additional context.                          |
| Status message | No       | An error, warning, or success message below the checkbox.                     |

## Best Practices

- **Do:** Always provide a visible label so the user knows what they are toggling. Use isLabelHidden only when surrounding context makes it obvious.
- **Do:** Add a description for choices that need extra context, like explaining what "Share usage data" actually shares.
- **Do:** Use the indeterminate state for "select all" checkboxes when only some items in a group are selected.
- **Don't:** Use a checkbox for mutually exclusive choices; use RadioList when only one option can be selected.
- **Don't:** Use a checkbox for actions that take effect immediately; use a toggle switch or button instead.
- **Don't:** Wrap a disabled checkbox in Tooltip to explain why it is disabled; disabled controls swallow the hover events the wrapper needs. Use the disabledMessage prop instead.

## Props

| Prop              | Type                                                           | Default          | Description                                                                                                                                                                                                                                                                                                          |
| ----------------- | -------------------------------------------------------------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ref`             | `React.Ref<HTMLInputElement>`                                  | —                | Ref forwarded to the underlying <input> element.                                                                                                                                                                                                                                                                     |
| `label`           | `string`                                                       | —                | Label text for the checkbox (always rendered for accessibility). **(required)**                                                                                                                                                                                                                                      |
| `isLabelHidden`   | `boolean`                                                      | `false`          | Whether to visually hide the label (still accessible to screen readers).                                                                                                                                                                                                                                             |
| `description`     | `string`                                                       | —                | Description text displayed below the label.                                                                                                                                                                                                                                                                          |
| `value`           | `boolean                                                       | 'indeterminate'` | —                                                                                                                                                                                                                                                                                                                    | Whether the checkbox is checked, unchecked, or indeterminate. **(required)**                        |
| `onChange`        | `(checked: boolean, e: ChangeEvent<HTMLInputElement>) => void` | —                | Callback fired when the checkbox state changes.                                                                                                                                                                                                                                                                      |
| `changeAction`    | `(checked: boolean, e: ChangeEvent<HTMLInputElement>) => void  | Promise<void>`   | —                                                                                                                                                                                                                                                                                                                    | Async action on change. Fires after onChange if not prevented. Shows loading spinner while pending. |
| `isLoading`       | `boolean`                                                      | `false`          | Whether the checkbox is in a loading state. Shows spinner and prevents interaction.                                                                                                                                                                                                                                  |
| `isDisabled`      | `boolean`                                                      | `false`          | Whether the checkbox is disabled.                                                                                                                                                                                                                                                                                    |
| `htmlName`        | `string`                                                       | —                | The HTML name attribute for the underlying checkbox input, useful for form submissions (submits "on" when checked).                                                                                                                                                                                                  |
| `disabledMessage` | `string`                                                       | —                | Explains why the checkbox is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the checkbox focusable via aria-disabled (toggling stays blocked). Use this instead of wrapping a disabled CheckboxInput in Tooltip. Disabled controls swallow the hover events an external Tooltip needs. |
| `isReadOnly`      | `boolean`                                                      | `false`          | Whether the checkbox is read-only. Displays the current state at full opacity but prevents interaction. Unlike `isDisabled`, read-only checkboxes are not visually dimmed.                                                                                                                                           |
| `isOptional`      | `boolean`                                                      | `false`          | Whether the field is optional. Mutually exclusive with isRequired.                                                                                                                                                                                                                                                   |
| `isRequired`      | `boolean`                                                      | `false`          | Whether the checkbox is required. Mutually exclusive with isOptional.                                                                                                                                                                                                                                                |
| `size`            | `'sm'                                                          | 'md'`            | `'md'`                                                                                                                                                                                                                                                                                                               | The size of the checkbox. sm for compact layouts, md for default.                                   |
| `onFocus`         | `(e: FocusEvent<HTMLInputElement>) => void`                    | —                | Callback fired when the checkbox receives focus.                                                                                                                                                                                                                                                                     |
| `onBlur`          | `(e: FocusEvent<HTMLInputElement>) => void`                    | —                | Callback fired when the checkbox loses focus.                                                                                                                                                                                                                                                                        |
| `labelIcon`       | `IconType`                                                     | —                | Icon to display before the label text. See `npx astryx docs icons` for valid semantic names.                                                                                                                                                                                                                         |
| `status`          | `{ type: 'error'                                               | 'warning'        | 'success', message: string }`                                                                                                                                                                                                                                                                                        | —                                                                                                   | Status indicator. Displays a colored message box below the checkbox and sets aria-invalid for errors. |

## Theming

| Component class         | Preferred data attributes                    | Props | States            |
| ----------------------- | -------------------------------------------- | ----- | ----------------- |
| `astryx-checkbox-input` | `data-size`                                  | size  | —                 |
| `astryx-checkbox`       | `data-size`, `data-checked`, `data-disabled` | size  | checked, disabled |

Override in defineTheme:

```ts
components: {
  'checkbox-input': {
    base: { /* CSS properties */ },
    'size:value': { /* variant-specific */ },
  },
  'checkbox': {
    base: { /* CSS properties */ },
    'checked': { /* state-specific */ },
  },
}
```

Related block templates:

CheckboxInputBasic
Checkboxes with labels and descriptions in checked, unchecked, and disabled states. Each checkbox controls a single on/off setting. Add a description to explain what the setting does.
CheckboxInputIndeterminateState
A "select all" checkbox that controls a group of options. When only some options are checked, it shows a dash instead of a checkmark. Clicking it checks or unchecks everything.
CheckboxInputShowcase
Interactive checkboxes showing checked, unchecked, and indeterminate states with descriptions.
CheckboxInputStatusVariations
Checkboxes with error, warning, and success validation messages. Use the status prop to show feedback after form validation: errors block submission, warnings inform, and success confirms.
PopoverFilterPanel
Popover with checkbox filters and apply/reset actions.
