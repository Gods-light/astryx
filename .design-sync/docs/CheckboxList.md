# CheckboxList

CheckboxList shows a small group of checkboxes so users can turn several options on or off at once. Place it in settings pages, filter panels, or forms where every choice should be visible without scrolling. For a single standalone checkbox (like "I agree to the terms"), use CheckboxInput instead. If only one option can be picked, use RadioList. If the list is long enough to need searching or scrolling, use MultiSelector instead.

**Import:** `import {CheckboxList} from '@astryxdesign/core/CheckboxList';`

## Best Practices

- **Do:** Keep the list short: three to seven options is the sweet spot. Beyond that, switch to MultiSelector which adds search and scrolling.
- **Do:** Turn on dividers (hasDividers) when items have helper text underneath; without them the labels and descriptions blur together.
- **Do:** Write a group label that says what the choices represent: "Export formats" tells users more than "Options".
- **Don't:** Show a CheckboxList when the user can only pick one thing; that is what RadioList is for.
- **Don't:** Put buttons or links inside the trailing slot (endContent); the whole row is already tappable, so a nested button creates two competing click targets.
- **Don't:** Wrap a disabled CheckboxList in Tooltip to explain why it is disabled; disabled controls swallow the hover events the wrapper needs. Use the disabledMessage prop instead.

## Props

| Prop              | Type                         | Default        | Description                                                                                                                                                                                                                                                                                                                                                                              |
| ----------------- | ---------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`           | `string`                     | —              | Label text for the checkbox group (always rendered for accessibility). **(required)**                                                                                                                                                                                                                                                                                                    |
| `children`        | `ReactNode`                  | —              | CheckboxListItem elements. **(required)**                                                                                                                                                                                                                                                                                                                                                |
| `value`           | `string[]`                   | —              | The currently selected values (collection mode).                                                                                                                                                                                                                                                                                                                                         |
| `onChange`        | `(values: string[]) => void` | —              | Callback fired when the selected values change.                                                                                                                                                                                                                                                                                                                                          |
| `changeAction`    | `(values: string[]) => void  | Promise<void>` | —                                                                                                                                                                                                                                                                                                                                                                                        | Async action on change with optimistic updates. While the promise is pending, the toggled item shows a spinner inside its checkbox and is marked aria-busy. |
| `isLabelHidden`   | `boolean`                    | `false`        | Whether to visually hide the label.                                                                                                                                                                                                                                                                                                                                                      |
| `description`     | `string`                     | —              | Description text displayed below the label.                                                                                                                                                                                                                                                                                                                                              |
| `density`         | `'compact'                   | 'balanced'     | 'spacious'`                                                                                                                                                                                                                                                                                                                                                                              | `'balanced'`                                                                                                                                                | Spacing density for list items. |
| `hasDividers`     | `boolean`                    | `false`        | Whether to show dividers between items.                                                                                                                                                                                                                                                                                                                                                  |
| `isDisabled`      | `boolean`                    | `false`        | Whether all checkbox items are disabled.                                                                                                                                                                                                                                                                                                                                                 |
| `disabledMessage` | `string`                     | —              | Explains why the group is disabled. Applies to the whole-group disabled state (isDisabled), not per item. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the checkboxes focusable via aria-disabled (toggling stays blocked). Use this instead of wrapping a disabled CheckboxList in Tooltip. Disabled controls swallow the hover events an external Tooltip needs. |
| `status`          | `InputStatus`                | —              | Status indicator ({ type, message }).                                                                                                                                                                                                                                                                                                                                                    |
| `xstyle`          | `StyleXStyles`               | —              | StyleX styles for layout customization. Must be a stylex.create() value.                                                                                                                                                                                                                                                                                                                 |

## Components

### CheckboxListItem

See `astryx component CheckboxListItem` for props and usage.

Related block templates:

CheckboxListSelectAllPattern
A "select all" toggle at the top of a checkbox list that switches to an indeterminate dash when only some items are checked, useful for bulk actions like exporting documents or assigning permissions where users often want everything at once.
CheckboxListShowcase
CheckboxListWithEndContent
Badges in the trailing slot show contextual info, like a price or status, next to each option without cluttering the label, so users can compare choices at a glance.
CheckboxListItemBasic
Checkbox items with labels and descriptions inside a controlled CheckboxList. Use for multi-select option groups like notification preferences.
CheckboxListItemShowcase
Checkbox list items with labels, descriptions, and different states including disabled.
FormLayoutMixedControls
Form with different control types: text input, selector, and checkboxes
