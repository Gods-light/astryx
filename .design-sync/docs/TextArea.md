# TextArea

TextArea is a multi-line text input for collecting longer-form content like comments, descriptions, or messages. Use it when the expected input spans multiple lines. For shorter, single-line values, use TextInput.

**Import:** `import {TextArea} from '@astryxdesign/core/TextArea';`

## Best Practices

- **Do:** Provide a visible label so users know what to enter. If the label must be hidden, set isLabelHidden with a descriptive label for screen readers.
- **Do:** Set maxLength with a character counter when there is a defined limit; it helps users stay within bounds before they submit.
- **Do:** Use the status prop to surface validation feedback inline: show success when input is valid, warning for soft limits, and error for hard failures.
- **Do:** Add a description or placeholder to clarify expected content, like "Describe the issue in detail," but never rely on placeholder alone as the only label.
- **Don't:** Avoid using TextArea for short, single-line values like names or emails; use TextInput instead.
- **Don't:** Don't rely solely on placeholder text to communicate the purpose of the field; placeholders disappear on focus and are not accessible labels.
- **Don't:** Don't show a status message without also setting the status type; the colored border and icon are what draw the user's attention to the message.
- **Don't:** Don't wrap a disabled TextArea in Tooltip to explain why it's disabled; disabled controls swallow the hover events the wrapper needs. Use the disabledMessage prop instead.

## Props

| Prop              | Type                                                           | Default        | Description                                                                                                                                                                                                                                                                                                          |
| ----------------- | -------------------------------------------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ref`             | `React.Ref<HTMLTextAreaElement>`                               | —              | Ref forwarded to the underlying <textarea> element.                                                                                                                                                                                                                                                                  |
| `label`           | `string`                                                       | —              | Label text for the textarea. Always rendered for accessibility. **(required)**                                                                                                                                                                                                                                       |
| `value`           | `string`                                                       | —              | Current value of the textarea. **(required)**                                                                                                                                                                                                                                                                        |
| `onChange`        | `(value: string, e: ChangeEvent<HTMLTextAreaElement>) => void` | —              | Callback fired when the textarea value changes.                                                                                                                                                                                                                                                                      |
| `changeAction`    | `(value: string, e: ChangeEvent<HTMLTextAreaElement>) => void  | Promise<void>` | —                                                                                                                                                                                                                                                                                                                    | Async action fired after onChange inside a React transition. Enables optimistic updates via useOptimistic. |
| `isLabelHidden`   | `boolean`                                                      | `false`        | Visually hides the label while keeping it accessible to screen readers.                                                                                                                                                                                                                                              |
| `description`     | `string`                                                       | —              | Helper text displayed between the label and textarea.                                                                                                                                                                                                                                                                |
| `isOptional`      | `boolean`                                                      | `false`        | Displays an "Optional" indicator next to the label. Mutually exclusive with isRequired.                                                                                                                                                                                                                              |
| `isRequired`      | `boolean`                                                      | `false`        | Displays a "Required" indicator next to the label and sets aria-required. Mutually exclusive with isOptional.                                                                                                                                                                                                        |
| `isDisabled`      | `boolean`                                                      | `false`        | Disables the textarea, preventing interaction.                                                                                                                                                                                                                                                                       |
| `disabledMessage` | `string`                                                       | —              | Explains why the textarea is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the textarea focusable via aria-disabled (the field becomes read-only). Use this instead of wrapping a disabled TextArea in Tooltip. Disabled controls swallow the hover events an external Tooltip needs. |
| `isLoading`       | `boolean`                                                      | `false`        | Puts the textarea in a loading state, showing a spinner inside the input.                                                                                                                                                                                                                                            |
| `placeholder`     | `string`                                                       | —              | Placeholder text shown when the textarea is empty.                                                                                                                                                                                                                                                                   |
| `rows`            | `number`                                                       | `3`            | Number of visible text rows.                                                                                                                                                                                                                                                                                         |
| `maxLength`       | `number`                                                       | —              | Maximum number of characters allowed. When set, a character counter (current/max) is displayed below the textarea. Does not enforce the limit natively; the counter shows error styling when exceeded.                                                                                                               |
| `status`          | `{ type: 'warning'                                             | 'error'        | 'success'; message?: string }`                                                                                                                                                                                                                                                                                       | —                                                                                                          | Status indicator that applies a colored border and icon. An optional message is displayed in a floating box below the textarea. |
| `labelTooltip`    | `string`                                                       | —              | Tooltip text displayed in an info icon at the end of the label.                                                                                                                                                                                                                                                      |
| `startIcon`       | `IconType`                                                     | —              | Icon component rendered inside the leading edge of the textarea wrapper. See `npx astryx docs icons` for valid semantic names.                                                                                                                                                                                       |
| `hasSpellCheck`   | `boolean`                                                      | `true`         | Enables or disables browser spell checking.                                                                                                                                                                                                                                                                          |
| `hasAutoFocus`    | `boolean`                                                      | `false`        | Automatically focuses the textarea on mount.                                                                                                                                                                                                                                                                         |
| `size`            | `'sm'                                                          | 'md'           | 'lg'`                                                                                                                                                                                                                                                                                                                | `'md'`                                                                                                     | Size of the textarea, affecting internal padding. Height is controlled by rows, not size.                                       |
| `onPaste`         | `(e: ClipboardEvent<HTMLTextAreaElement>) => void`             | —              | Callback fired when content is pasted into the textarea.                                                                                                                                                                                                                                                             |
| `htmlName`        | `string`                                                       | —              | HTML name attribute for the textarea element, useful for form submissions.                                                                                                                                                                                                                                           |
| `onFocus`         | `(e: FocusEvent<HTMLTextAreaElement>) => void`                 | —              | Callback fired when the textarea receives focus.                                                                                                                                                                                                                                                                     |
| `onBlur`          | `(e: FocusEvent<HTMLTextAreaElement>) => void`                 | —              | Callback fired when the textarea loses focus.                                                                                                                                                                                                                                                                        |
| `xstyle`          | `StyleXStyles`                                                 | —              | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value, not an inline style object like style={{}}.                                                                                                                                                                  |

## Theming

| Component class   | Preferred data attributes  | Props        | States |
| ----------------- | -------------------------- | ------------ | ------ |
| `astryx-textarea` | `data-size`, `data-status` | size, status | —      |

Override in defineTheme:

```ts
components: {
  'textarea': {
    base: { /* CSS properties */ },
    'size:value': { /* variant-specific */ },
  },
}
```

Related block templates:

DialogFormDialog
Collects user input without navigating away from the page. Uses purpose="form" so clicking the backdrop won't close it. Use for editing profiles, creating items, or updating settings inline.
TextAreaCharacterCount
Textareas with maxLength and a live character counter. The counter turns red when the limit is exceeded.
TextAreaShowcase
A text area with placeholder text.
TextAreaStates
Required, disabled, and loading textareas side by side. Shows the interactive states the component supports.
TextAreaValidation
All three status variants (error, warning, and success) with status messages, plus error without a message. Use to show inline validation feedback as the user types.
TextAreaWithIcon
Textareas with a leading icon that hints at the expected content, like a chat bubble for messages or a pencil for notes.
