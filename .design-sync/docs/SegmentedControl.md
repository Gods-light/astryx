# SegmentedControl

A segmented button group that allows users to make a single selection from a small set of mutually exclusive options. Use SegmentedControl when all options should be visible at once and the selection controls a value or mode, not page navigation.

**Import:** `import {SegmentedControl} from '@astryxdesign/core/SegmentedControl';`

## Best Practices

- **Do:** Use for switching between 2–5 mutually exclusive views or modes where all options should be visible.
- **Do:** Provide a descriptive label for the control to ensure the group is accessible to screen readers.
- **Don't:** Use for page-level navigation; use TabList instead. TabList is a navigation component, while SegmentedControl is an input that always has exactly one selected option.
- **Don't:** Use for simple on/off states; use ToggleButton instead. ToggleButton can be toggled on or off independently, while SegmentedControl enforces a single selection from a group.
- **Don't:** Wrap a disabled SegmentedControl in Tooltip to explain why it is disabled; disabled controls swallow the hover events the wrapper needs. Use the disabledMessage prop instead.

## Props

| Prop              | Type                      | Default | Description                                                                                                                                                                                                                                                                                                                                                                                     |
| ----------------- | ------------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`           | `string`                  | —       | The currently selected value (controlled). **(required)**                                                                                                                                                                                                                                                                                                                                       |
| `onChange`        | `(value: string) => void` | —       | Callback fired when a segment is selected. **(required)**                                                                                                                                                                                                                                                                                                                                       |
| `label`           | `string`                  | —       | Accessible label for the radio group (used as aria-label, never rendered visually). **(required)**                                                                                                                                                                                                                                                                                              |
| `size`            | `'sm'                     | 'md'    | 'lg'`                                                                                                                                                                                                                                                                                                                                                                                           | `'md'`                                                                                                   | Size variant for the control. |
| `layout`          | `'hug'                    | 'fill'` | `'hug'`                                                                                                                                                                                                                                                                                                                                                                                         | Layout mode. hug (default) sizes segments to content; fill stretches them equally to fill the container. |
| `isDisabled`      | `boolean`                 | `false` | Whether the entire control is disabled.                                                                                                                                                                                                                                                                                                                                                         |
| `disabledMessage` | `string`                  | —       | Explains why the control is disabled. Applies to the whole-group disabled state (isDisabled), not per segment. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the control focusable via aria-disabled (selection stays blocked). Use this instead of wrapping a disabled SegmentedControl in Tooltip. Disabled controls swallow the hover events an external Tooltip needs. |
| `children`        | `ReactNode`               | —       | SegmentedControlItem children. **(required)**                                                                                                                                                                                                                                                                                                                                                   |
| `xstyle`          | `StyleXStyles`            | —       | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value: not an inline style object like style={{}}.                                                                                                                                                                                                                                             |

## Components

### SegmentedControlItem

See `astryx component SegmentedControlItem` for props and usage.

## Theming

| Component class                 | Preferred data attributes                     | Props | States             |
| ------------------------------- | --------------------------------------------- | ----- | ------------------ |
| `astryx-segmented-control`      | `data-size`                                   | size  | —                  |
| `astryx-segmented-control-item` | `data-size`, `data-selected`, `data-disabled` | size  | selected, disabled |

Override in defineTheme:

```ts
components: {
  'segmented-control': {
    base: { /* CSS properties */ },
    'size:value': { /* variant-specific */ },
  },
  'segmented-control-item': {
    base: { /* CSS properties */ },
    'selected': { /* state-specific */ },
  },
}
```

Some properties are set via standard CSS in component overrides:

```ts
components: {
  segmented-control: {
    base: {
      borderRadius: '...',
      padding: '...',
    },
  },
}
```

Related block templates:

SegmentedControlDisabledItem
Segmented control with an individually disabled option for unavailable choices.
SegmentedControlFillLayout
Segmented control that stretches segments equally to fill the available width, useful for fixed-width containers.
SegmentedControlIconOnly
Compact segmented control with hidden labels, showing only icons for space-constrained layouts.
SegmentedControlShowcase
SegmentedControlWithIcons
Segmented control with icon and label pairs for a view mode switcher.
SegmentedControlItemBasic
Label-only options inside a SegmentedControl. Each item declares a value; the parent control holds the selected value and change handler.
SegmentedControlItemShowcase
Segmented control items with text labels and icons, including a disabled item.
