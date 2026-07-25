# FileInput

FileInput provides file upload with optional drag-and-drop support. Use it for single or multiple file selection with built-in validation for file type, size, and count. Pair with validation status for upload feedback.

**Import:** `import {FileInput} from '@astryxdesign/core/FileInput';`

## Anatomy

| Element           | Required | Description                                                                                  |
| ----------------- | -------- | -------------------------------------------------------------------------------------------- |
| Label             | Yes      | Text that identifies the field. Always rendered for accessibility even when visually hidden. |
| Description       | No       | Helper text between the label and the drop zone explaining accepted formats or size limits.  |
| Drop zone         | Yes      | The clickable area for file selection. In dropzone mode, also accepts dragged files.         |
| Upload icon       | No       | An arrow icon in the drop zone hinting at the upload action.                                 |
| Placeholder       | No       | Hint text shown when no files are selected.                                                  |
| File name display | No       | Shows the name(s) of selected files.                                                         |
| Clear button      | No       | A close button that removes selected files and returns focus to the input.                   |
| Spinner           | No       | Loading indicator that appears during async upload actions.                                  |
| Status message    | No       | Validation feedback showing error, warning, or success with a message.                       |

## Best Practices

- **Do:** Always specify an accept prop to guide users toward valid file types.
- **Do:** Use maxSize and maxFiles to prevent oversized uploads; the component handles validation and error display automatically.
- **Do:** Add a description to communicate constraints like file size limits or accepted formats.
- **Do:** Use changeAction for immediate upload workflows that benefit from optimistic UI.
- **Don't:** Don't use FileInput for directory or folder uploads; that is not supported in v1.
- **Don't:** Don't avoid dropzone mode unless space is constrained; drag-and-drop is the expected interaction for file uploads.
- **Don't:** Don't wrap a disabled FileInput in Tooltip to explain why it's disabled; disabled controls swallow the hover events the wrapper needs. Use the disabledMessage prop instead.

## Props

| Prop              | Type            | Default                           | Description                                                                                                                                                                                                                                                                                                                 |
| ----------------- | --------------- | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`           | `string`        | —                                 | Accessible label for the file input. **(required)**                                                                                                                                                                                                                                                                         |
| `value`           | `File           | File[]                            | null`                                                                                                                                                                                                                                                                                                                       | —                                                                                                       | Currently selected file(s). Controlled component. **(required)**                                                                                     |
| `onChange`        | `(files: File   | File[]                            | null) => void`                                                                                                                                                                                                                                                                                                              | —                                                                                                       | Callback fired when files are selected or removed. **(required)**                                                                                    |
| `changeAction`    | `(files: File   | File[]                            | null) => Promise<void>`                                                                                                                                                                                                                                                                                                     | —                                                                                                       | Async change action (React 19 transitions pattern). Use for immediate upload on file selection.                                                      |
| `accept`          | `string`        | —                                 | Accepted file types. Uses the HTML accept attribute format (e.g. "image/*", ".pdf,.doc").                                                                                                                                                                                                                                   |
| `isMultiple`      | `boolean`       | `false`                           | Whether multiple files can be selected. When true, value and onChange use File[] instead of File.                                                                                                                                                                                                                           |
| `maxSize`         | `number`        | —                                 | Maximum file size in bytes. Files exceeding this are rejected with an error status.                                                                                                                                                                                                                                         |
| `maxFiles`        | `number`        | —                                 | Maximum number of files (only applies when isMultiple is true).                                                                                                                                                                                                                                                             |
| `isLabelHidden`   | `boolean`       | `false`                           | Visually hides the label while keeping it accessible to screen readers.                                                                                                                                                                                                                                                     |
| `description`     | `string`        | —                                 | Description text displayed between the label and input.                                                                                                                                                                                                                                                                     |
| `isOptional`      | `boolean`       | `false`                           | Displays an "Optional" indicator next to the label. Mutually exclusive with isRequired.                                                                                                                                                                                                                                     |
| `isRequired`      | `boolean`       | `false`                           | Displays a "Required" indicator next to the label and sets aria-required. Mutually exclusive with isOptional.                                                                                                                                                                                                               |
| `isDisabled`      | `boolean`       | `false`                           | Disables the input, preventing interaction and dimming the element.                                                                                                                                                                                                                                                         |
| `disabledMessage` | `string`        | —                                 | Explains why the input is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the trigger focusable via aria-disabled (opening the file picker stays blocked). Use this instead of wrapping a disabled FileInput in Tooltip; disabled controls swallow the hover events an external Tooltip needs. |
| `isLoading`       | `boolean`       | `false`                           | Puts the input in a loading state, showing a spinner and setting aria-busy.                                                                                                                                                                                                                                                 |
| `placeholder`     | `string`        | `"Choose file" or "Choose files"` | Placeholder text shown when no file is selected.                                                                                                                                                                                                                                                                            |
| `mode`            | `'input'        | 'dropzone'`                       | `'input'`                                                                                                                                                                                                                                                                                                                   | Visual mode. 'input' is a compact inline style; 'dropzone' is a larger area with drag-and-drop support. |
| `status`          | `{type: 'error' | 'warning'                         | 'success', message?: string}`                                                                                                                                                                                                                                                                                               | —                                                                                                       | Validation status: applies a colored border. If message is provided, displays a floating message below the input. Error type also sets aria-invalid. |
| `labelTooltip`    | `string`        | —                                 | Tooltip text displayed in an info icon at the end of the label.                                                                                                                                                                                                                                                             |

## Theming

| Component class     | Preferred data attributes  | Props        | States |
| ------------------- | -------------------------- | ------------ | ------ |
| `astryx-file-input` | `data-mode`, `data-status` | mode, status | —      |

Override in defineTheme:

```ts
components: {
  'file-input': {
    base: { /* CSS properties */ },
    'mode:value': { /* variant-specific */ },
  },
}
```

Related block templates:

FileInputBasic
A controlled single-file upload with accepted types, a size limit, and helper text. Use for standard document upload fields in forms.
FileInputShowcase
