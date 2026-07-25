# Field

Field is a low-level wrapper for custom, native, or third-party controls that do not already provide field label, description, and status UI. Use it when you need the Field shell around a control you own; use styled Astryx inputs like TextInput, Typeahead, and Select directly when they already expose label, description, and validation props.

**Import:** `import {Field} from '@astryxdesign/core/Field';`

## Anatomy

| Element                     | Required | Description                                                                                |
| --------------------------- | -------- | ------------------------------------------------------------------------------------------ |
| Label                       | Yes      | Text identifying the field. Always rendered for accessibility, optionally hidden visually. |
| Description                 | No       | Helper text between the label and input explaining what to enter.                          |
| Control slot                | Yes      | A custom, native, or third-party control that does not already render a field shell.       |
| Status message              | No       | Inline validation feedback showing error, warning, or success with a message.              |
| Optional/Required indicator | No       | Badge next to the label showing whether the field is optional or required.                 |
| Label tooltip               | No       | Info icon at the end of the label with a tooltip explaining the field.                     |

## Best Practices

- **Do:** Wrap custom controls, native inputs, or third-party widgets that need labeling, helper text, optional/required indicators, or validation status.
- **Do:** Always provide a label for accessibility, even if visually hidden with isLabelHidden.
- **Do:** Use inputID and descriptionID to connect the label and description to the inner control with htmlFor and aria-describedby.
- **Don't:** Nest Field around styled inputs such as TextInput, Typeahead, Select, DateInput, or TextArea; those components already render their own Field shell.
- **Don't:** Use the attached status variant on non-bordered controls such as sliders, switches, or checkboxes; use detached so the message does not overlap the control.
- **Don't:** Set both isOptional and isRequired on the same field.
- **Don't:** Hide the label without providing an alternative way for the user to understand the field purpose.

## Props

| Prop            | Type                        | Default     | Description                                                                                                                                                                                                                                      |
| --------------- | --------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `label`         | `string`                    | —           | Label text for the field (always rendered for accessibility). **(required)**                                                                                                                                                                     |
| `inputID`       | `string`                    | —           | ID for the input element (used for the label htmlFor attribute). **(required)**                                                                                                                                                                  |
| `children`      | `ReactNode`                 | —           | The input or control to render. **(required)**                                                                                                                                                                                                   |
| `isLabelHidden` | `boolean`                   | `false`     | Visually hide the label (still accessible to screen readers).                                                                                                                                                                                    |
| `isDisabled`    | `boolean`                   | `false`     | Whether the associated input is disabled. Propagates disabled styling to the label.                                                                                                                                                              |
| `description`   | `string`                    | —           | Description text displayed between the label and input.                                                                                                                                                                                          |
| `descriptionID` | `string`                    | —           | ID for the description element (use for aria-describedby on the input).                                                                                                                                                                          |
| `isOptional`    | `boolean`                   | `false`     | Whether the field is optional (mutually exclusive with isRequired).                                                                                                                                                                              |
| `isRequired`    | `boolean`                   | `false`     | Whether the field is required (mutually exclusive with isOptional).                                                                                                                                                                              |
| `labelIcon`     | `IconType`                  | —           | Icon to display before the label text. See `npx astryx docs icons` for valid semantic names.                                                                                                                                                     |
| `labelTooltip`  | `string`                    | —           | Tooltip text to display in an info icon at the end of the label.                                                                                                                                                                                 |
| `status`        | `FieldStatus`               | —           | Status indicator with type and optional message. When message is set, displays a colored status box.                                                                                                                                             |
| `statusVariant` | `'attached'                 | 'detached'` | `'attached'`                                                                                                                                                                                                                                     | How the status message renders relative to the input. Attached overlaps the input border; detached floats below. |
| `width`         | `SizeValue`                 | —           | Width of the field (number = pixels, string used as-is, e.g. "100%"). Sizes the whole field (label, control, and status) so they stay aligned. Prefer this over setting width via xstyle/className/style, which only size the inner control box. |
| `ref`           | `React.Ref<HTMLDivElement>` | —           | Ref forwarded to the root element.                                                                                                                                                                                                               |
| `xstyle`        | `StyleXStyles`              | —           | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value: not an inline style object like style={{}}.                                                                                              |
| `className`     | `string`                    | —           | CSS class name(s) appended to the root element. Prefer xstyle for StyleX deduplication.                                                                                                                                                          |
| `style`         | `React.CSSProperties`       | —           | Inline styles applied to the root element. Takes priority over StyleX inline styles.                                                                                                                                                             |

## Components

### FieldLabel

See `astryx component FieldLabel` for props and usage.

### FieldStatus

See `astryx component FieldStatus` for props and usage.

## Examples

### Wrap a custom control

```tsx
function CustomSliderField() {
  return (
    <Field
      label="Confidence"
      inputID="confidence-slider"
      description="Choose how strict the review should be."
      descriptionID="confidence-help"
      status={{type: 'success', message: 'Recommended default'}}
      statusVariant="detached">
      <input
        id="confidence-slider"
        type="range"
        min={0}
        max={100}
        defaultValue={60}
        aria-describedby="confidence-help"
      />
    </Field>
  );
}
```

## Theming

| Component class       | Preferred data attributes   | Props         | States |
| --------------------- | --------------------------- | ------------- | ------ |
| `astryx-field`        | `data-layout`               | layout        | —      |
| `astryx-field-label`  | —                           | —             | —      |
| `astryx-field-status` | `data-type`, `data-variant` | type, variant | —      |

Override in defineTheme:

```ts
components: {
  'field': {
    base: { /* CSS properties */ },
    'layout:value': { /* variant-specific */ },
  },
  'field-label': {
    base: { /* CSS properties */ },
  },
}
```

Some properties are set via standard CSS in component overrides:

```ts
components: {
  field: {
    base: {
      borderRadius: '...',
    },
  },
}
```

Related block templates:

FieldShowcase
A form field wrapping a text input with a label, description, and validation status.
FieldLabelBasic
Standalone labels with required and optional indicators and a helper description. Use when labeling a custom control that does not render its own label.
FieldLabelShowcase
Standalone field labels demonstrating required, optional, tooltip, and icon variations.
