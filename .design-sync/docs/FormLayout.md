# FormLayout

A layout container that arranges form fields with consistent spacing and direction. FormLayout handles where fields go, not state or submission. Wrap it in a <form> for that. Supports vertical (default), horizontal, and horizontal-labels directions, and can be nested to mix them.

**Import:** `import {FormLayout} from '@astryxdesign/core/FormLayout';`

## Anatomy

| Element    | Required | Description                                             |
| ---------- | -------- | ------------------------------------------------------- |
| Form title | No       | Heading that describes the purpose of the form.         |
| Fields     | Yes      | Input components with labels for collecting user data.  |
| Footer     | No       | Contains confirmation buttons such as Submit or Cancel. |

## Best Practices

- **Do:** Stack fields vertically for most forms. It's the easiest to scan top to bottom.
- **Do:** Nest a horizontal FormLayout inside a vertical one when fields naturally pair up, like First Name + Last Name or City + State + ZIP.
- **Do:** Use horizontal-labels for settings pages where labels sit beside their inputs.
- **Don't:** Use FormLayout for form state or submission. It's just layout. Wrap it in a <form> for that.
- **Don't:** Put unrelated fields side by side in a horizontal layout. Save it for fields that belong together.
- **Don't:** Nest horizontal-labels inside another FormLayout. It uses CSS Grid and needs to be the outermost container.

## Props

| Prop        | Type           | Default      | Description                                                                                                                                         |
| ----------- | -------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `direction` | `'vertical'    | 'horizontal' | 'horizontal-labels'`                                                                                                                                | `'vertical'` | Controls field arrangement. Vertical stacks top-to-bottom, horizontal arranges left-to-right with equal flex-grow, and horizontal-labels uses CSS Grid with labels to the left of inputs (collapses to vertical on narrow viewports <=480px). |
| `children`  | `ReactNode`    | —            | Form fields to arrange. Accepts Astryx inputs (TextInput, Selector, etc.) and Field-wrapped custom controls.                                        |
| `xstyle`    | `StyleXStyles` | —            | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value, not an inline style object like style={{}}. |

## Theming

| Component class      | Preferred data attributes | Props     | States |
| -------------------- | ------------------------- | --------- | ------ |
| `astryx-form-layout` | `data-direction`          | direction | —      |

Override in defineTheme:

```ts
components: {
  'form-layout': {
    base: { /* CSS properties */ },
    'direction:value': { /* variant-specific */ },
  },
}
```

Related block templates:

FormLayoutHorizontal
Two fields side by side for naturally paired inputs like first and last name
FormLayoutHorizontalLabels
Settings form with labels placed beside their inputs
FormLayoutMixedControls
Form with different control types: text input, selector, and checkboxes
FormLayoutNested
Address form mixing vertical and horizontal layouts for grouped fields
FormLayoutShowcase
A vertical form layout with text input fields.
