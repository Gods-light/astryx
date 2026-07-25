# Dialog

Dialog displays a modal overlay that blocks interaction with the page until the user responds. Use it for delete confirmations, edit forms, terms acceptance, or any decision that should not be skipped.

For cases where you want to show a dialog without managing open state, use the `useImperativeDialog` hook: call `dialog.show(content)` and render `dialog.element` in your tree.

**Import:** `import {Dialog} from '@astryxdesign/core/Dialog';`

## Anatomy

| Element  | Required | Description                                                                                     |
| -------- | -------- | ----------------------------------------------------------------------------------------------- |
| Header   | Yes      | Title, optional subtitle, and close button. The title receives focus on open for accessibility. |
| Body     | Yes      | The main content area: text, forms, lists, or any layout.                                       |
| Footer   | No       | Action buttons like Save/Cancel or Accept/Decline, aligned to the end.                          |
| Backdrop | Yes      | Semi-transparent overlay behind the dialog that blocks page interaction.                        |

## Best Practices

- **Do:** Choose the right purpose: info for dismissable content, form to prevent accidental backdrop dismissal, required when the user must respond.
- **Do:** Include a clear title in the header so users immediately understand what the dialog is asking.
- **Do:** Use purpose="form" for dialogs with inputs so the user can't accidentally lose data by clicking the backdrop.
- **Do:** Keep dialogs focused on a single task; if the content grows beyond what fits, consider a full page instead.
- **Don't:** Use a dialog for simple messages that could be shown inline or as a toast notification.
- **Don't:** Nest dialogs inside other dialogs; restructure the flow into steps within a single dialog instead.
- **Don't:** Use the fullscreen variant for simple confirmations; it is meant for complex content like editors or long forms.

## Props

| Prop           | Type                           | Default       | Description                                                                                                                             |
| -------------- | ------------------------------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `isOpen`       | `boolean`                      | —             | Whether the dialog is open. **(required)**                                                                                              |
| `onOpenChange` | `(isOpen: boolean) => unknown` | —             | Callback when dialog visibility changes. **(required)**                                                                                 |
| `children`     | `ReactNode`                    | —             | Dialog content. **(required)**                                                                                                          |
| `width`        | `number                        | string`       | `400`                                                                                                                                   | Width of the dialog in pixels or any CSS value.                 |
| `maxHeight`    | `number                        | string`       | `'75vh'`                                                                                                                                | Maximum height of the dialog.                                   |
| `position`     | `DialogPosition`               | —             | Static position for the dialog; centered by default when omitted.                                                                       |
| `variant`      | `'standard'                    | 'fullscreen'` | `'standard'`                                                                                                                            | Dialog variant: fullscreen expands to fill the entire viewport. |
| `purpose`      | `'required'                    | 'form'        | 'info'`                                                                                                                                 | `'info'`                                                        | Controls dismissal behavior: required disables Escape and backdrop click; form disables backdrop click after interaction; info allows both. |
| `isInline`     | `boolean`                      | `false`       | Renders dialog content inline without the <dialog> element, backdrop, or modal behavior. For documentation previews and showcases only. |

## Components

### DialogHeader

See `astryx component DialogHeader` for props and usage.

### useImperativeDialog

See `astryx component useImperativeDialog` for props and usage.

## Theming

| Component class | Preferred data attributes | Props                | States |
| --------------- | ------------------------- | -------------------- | ------ |
| `astryx-dialog` | `data-variant`            | standard, fullscreen | —      |

Override in defineTheme:

```ts
components: {
  'dialog': {
    base: { /* CSS properties */ },
    'variant:value': { /* variant-specific */ },
  },
}
```

Some properties are set via standard CSS in component overrides:

```ts
components: {
  dialog: {
    base: {
      borderRadius: '...',
      padding: '...',  // expands to container layout tokens
    },
  },
}
```

Related block templates:

DialogConfirmationDialog
Asks the user to confirm a destructive action before it happens. Use before deleting projects, removing team members, revoking API keys, or any irreversible operation.
DialogFormDialog
Collects user input without navigating away from the page. Uses purpose="form" so clicking the backdrop won't close it. Use for editing profiles, creating items, or updating settings inline.
DialogFullscreenDialog
Takes over the entire viewport for content that needs maximum space. Use for documentation viewers, rich text editors, multi-step wizards, or media previews where the standard dialog width is too narrow.
DialogScrollingContent
Constrains the dialog height and scrolls the body when content overflows. Use for terms and conditions, license agreements, changelogs, or any long-form content the user needs to review before accepting.
DialogShowcase
Modal dialog with a header, body content, and close button.
DialogWithSubtitle
Cannot be dismissed by Escape or backdrop click; the user must explicitly choose an action. Uses purpose="required". Use for ownership transfers, legal acknowledgements, or critical decisions where skipping is not an option.
DialogHeaderBasic
A DialogHeader with a title, subtitle, and close button, placed in the header slot of a Dialog Layout. Pass onOpenChange to render the close button.
DialogHeaderShowcase
DialogHeader provides a structured header for dialogs with slots for title, subtitle, close button, and optional start or end content.
