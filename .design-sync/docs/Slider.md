# Slider

A draggable control for selecting a numeric value or range within defined bounds. Supports single value and range selection, tick marks, custom value formatting, and vertical orientation. Use it when users need to explore a continuous range, such as volume, price, or percentage.

**Import:** `import {Slider} from '@astryxdesign/core/Slider';`

## Best Practices

- **Do:** Always provide a label, even if visually hidden, so the slider is accessible to screen readers.
- **Do:** Format values with meaningful units like "$50" or "75%" instead of raw numbers.
- **Don't:** Use for precise numeric entry; pair with a text input or use NumberInput instead.
- **Don't:** Set a step size so large that only a few positions are possible; use SegmentedControl or radio buttons instead.
- **Don't:** Wrap a disabled slider in Tooltip to explain why it is disabled; disabled controls swallow the hover events the wrapper needs. Use the disabledMessage prop instead.

## Props

| Prop                    | Type                                       | Default                            | Description                                                                                                                                                                                                                                                                                                  |
| ----------------------- | ------------------------------------------ | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `label`                 | `string`                                   | —                                  | Label text (always rendered for accessibility). **(required)**                                                                                                                                                                                                                                               |
| `value`                 | `number                                    | [number, number]`                  | —                                                                                                                                                                                                                                                                                                            | Current value: a `number` for single thumb mode or `[number, number]` for range mode. **(required)** |
| `onChange`              | `(value: number) => void                   | (value: [number, number]) => void` | —                                                                                                                                                                                                                                                                                                            | Callback fired on value change during drag.                                                          |
| `onChangeEnd`           | `(value: number) => void                   | (value: [number, number]) => void` | —                                                                                                                                                                                                                                                                                                            | Callback fired when drag ends.                                                                       |
| `min`                   | `number`                                   | `0`                                | Minimum value.                                                                                                                                                                                                                                                                                               |
| `max`                   | `number`                                   | `100`                              | Maximum value.                                                                                                                                                                                                                                                                                               |
| `step`                  | `number`                                   | `1`                                | Step increment.                                                                                                                                                                                                                                                                                              |
| `orientation`           | `'horizontal'                              | 'vertical'`                        | `'horizontal'`                                                                                                                                                                                                                                                                                               | Orientation of the slider.                                                                           |
| `formatValue`           | `(value: number) => string`                | —                                  | Custom value formatting function used for display and `aria-valuetext`.                                                                                                                                                                                                                                      |
| `valueDisplay`          | `'tooltip'                                 | 'text'                             | 'none'`                                                                                                                                                                                                                                                                                                      | `'tooltip'`                                                                                          | How the current value is displayed. |
| `marks`                 | `Array<{ value: number; label?: string }>` | —                                  | Tick marks at specified positions with optional labels.                                                                                                                                                                                                                                                      |
| `minStepsBetweenThumbs` | `number`                                   | `0`                                | Minimum number of steps between thumbs in range mode; prevents thumbs from overlapping.                                                                                                                                                                                                                      |
| `isDisabled`            | `boolean`                                  | `false`                            | Whether the slider is disabled.                                                                                                                                                                                                                                                                              |
| `htmlName`              | `string`                                   | —                                  | The HTML name attribute for form submissions. Renders hidden inputs carrying the current value (two entries in range mode).                                                                                                                                                                                  |
| `disabledMessage`       | `string`                                   | —                                  | Explains why the slider is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the thumb focusable via aria-disabled (value changes stay blocked). Use this instead of wrapping a disabled Slider in Tooltip. Disabled controls swallow the hover events an external Tooltip needs. |
| `isOptional`            | `boolean`                                  | `false`                            | Whether the field is optional.                                                                                                                                                                                                                                                                               |
| `isRequired`            | `boolean`                                  | `false`                            | Whether the field is required.                                                                                                                                                                                                                                                                               |
| `isLabelHidden`         | `boolean`                                  | `false`                            | Whether to visually hide the label.                                                                                                                                                                                                                                                                          |
| `description`           | `string`                                   | —                                  | Description text rendered below the label.                                                                                                                                                                                                                                                                   |
| `status`                | `InputStatus`                              | —                                  | Status indicator object (`{ type, message }`) for validation feedback.                                                                                                                                                                                                                                       |
| `labelTooltip`          | `string`                                   | —                                  | Tooltip text for an info icon displayed next to the label.                                                                                                                                                                                                                                                   |
| `xstyle`                | `StyleXStyles`                             | —                                  | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value, not an inline style object like style={{}}.                                                                                                                                                          |

## Theming

| Component class       | Preferred data attributes           | Props       | States   |
| --------------------- | ----------------------------------- | ----------- | -------- |
| `astryx-slider`       | `data-orientation`, `data-disabled` | orientation | disabled |
| `astryx-slider-track` | `data-orientation`                  | orientation | —        |
| `astryx-slider-thumb` | `data-orientation`, `data-disabled` | orientation | disabled |

Override in defineTheme:

```ts
components: {
  'slider': {
    base: { /* CSS properties */ },
    'orientation:value': { /* variant-specific */ },
    'disabled': { /* state-specific */ },
  },
  'slider-track': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

SliderFormattedValue
Slider with custom formatting showing temperature in Fahrenheit.
SliderRangeSlider
Range slider for selecting a value range like price bounds.
SliderShowcase
A slider control set to 50%.
SliderWithMarks
Slider with labeled tick marks at fixed intervals.
SliderWithStatus
Sliders with error, warning, and success validation states.
