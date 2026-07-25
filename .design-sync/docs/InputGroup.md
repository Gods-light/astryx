# InputGroup

InputGroup connects an input with prefix/suffix addons in a single visual unit. Use it for URL fields, currency inputs, search fields with action buttons, or any input that needs contextual decorations.

**Import:** `import {InputGroup} from '@astryxdesign/core/InputGroup';`

## Anatomy

| Element        | Required | Description                                                                                                   |
| -------------- | -------- | ------------------------------------------------------------------------------------------------------------- |
| Label          | Yes      | Text above the group.                                                                                         |
| Prefix addon   | No       | Content before the input (text, icon, or button).                                                             |
| Input          | Yes      | The main input element (TextInput, NumberInput, TimeInput, DateInput, Typeahead, Selector, or MultiSelector). |
| Suffix addon   | No       | Content after the input (text, icon, or button).                                                              |
| Status message | No       | An error, warning, or success message below the group.                                                        |

## Best Practices

- **Do:** Use text addons to show units, prefixes, or suffixes that clarify the input format (e.g., "$", "kg", "https://").
- **Do:** Use InputGroupText for static prefixes/suffixes like "$", "kg", or "https://".
- **Do:** Use InputGroup with compatible single-line inputs: TextInput, NumberInput, TimeInput, DateInput, Typeahead, Selector, and MultiSelector.
- **Do:** Keep each inner input's label specific; grouped inputs automatically combine the group label with their own label and inherit the group description/status context.
- **Don't:** Don't put multiple text inputs in one group; use separate fields instead.
- **Don't:** Don't use InputGroup for unrelated inputs; it's for a single input with decorations.
- **Don't:** Don't use InputGroup with TextArea, Slider, Switch, CheckboxInput, or RadioList.

## Props

| Prop            | Type           | Default | Description                                                                                                                                       |
| --------------- | -------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`      | `ReactNode`    | —       | InputGroupText and compatible input children: TextInput, NumberInput, TimeInput, DateInput, Typeahead, Selector, or MultiSelector. **(required)** |
| `label`         | `string`       | —       | Accessible label for the group. **(required)**                                                                                                    |
| `isLabelHidden` | `boolean`      | `false` | Visually hide the label.                                                                                                                          |
| `description`   | `string`       | —       | Helper text between label and input group.                                                                                                        |
| `isDisabled`    | `boolean`      | `false` | Disable the entire group.                                                                                                                         |
| `isOptional`    | `boolean`      | `false` | Show "(optional)" indicator.                                                                                                                      |
| `isRequired`    | `boolean`      | `false` | Mark the field as required.                                                                                                                       |
| `size`          | `'sm'          | 'md'    | 'lg'`                                                                                                                                             | `'md'` | Default size for inputs in the group. |
| `status`        | `InputStatus`  | —       | Status indicator applied to the group border.                                                                                                     |
| `labelTooltip`  | `string`       | —       | Tooltip text at the end of the label.                                                                                                             |
| `xstyle`        | `StyleXStyles` | —       | StyleX styles for layout customization.                                                                                                           |
| `data-testid`   | `string`       | —       | Test selector.                                                                                                                                    |

## Components

### InputGroupText

See `astryx component InputGroupText` for props and usage.

## Theming

| Component class           | Preferred data attributes  | Props        | States |
| ------------------------- | -------------------------- | ------------ | ------ |
| `astryx-input-group`      | `data-size`, `data-status` | size, status | —      |
| `astryx-input-group-text` | —                          | —            | —      |

Override in defineTheme:

```ts
components: {
  'input-group': {
    base: { /* CSS properties */ },
    'size:value': { /* variant-specific */ },
  },
  'input-group-text': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

InputGroupBasic
A currency field with static prefix and suffix addons around a TextInput. Use InputGroupText to clarify units or input format.
InputGroupShowcase
