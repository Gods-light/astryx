# AlertDialog

AlertDialog asks the user to confirm a destructive or irreversible action before it happens. Use it for things like deleting content, revoking access, or discarding unsaved changes.

For cases where you want to show an alert without managing open state, use the `useImperativeAlertDialog` hook: call `alert.show(options)` and render `alert.element` in your tree.

**Import:** `import {AlertDialog} from '@astryxdesign/core/AlertDialog';`

## Best Practices

- **Do:** Make the action button label specific: "Delete project" is better than "OK" or "Confirm".
- **Do:** Describe what will happen in the description so the user knows the consequences before confirming.
- **Don't:** Use AlertDialog for non-destructive actions; use a standard Dialog instead.

## Props

| Prop              | Type                           | Default         | Description                                                                                                |
| ----------------- | ------------------------------ | --------------- | ---------------------------------------------------------------------------------------------------------- |
| `isOpen`          | `boolean`                      | —               | Whether the dialog is open. **(required)**                                                                 |
| `onOpenChange`    | `(isOpen: boolean) => unknown` | —               | Visibility change callback. **(required)**                                                                 |
| `title`           | `string`                       | —               | Dialog title. Linked via aria-labelledby. **(required)**                                                   |
| `description`     | `string`                       | —               | Consequence description. Linked via aria-describedby. **(required)**                                       |
| `actionLabel`     | `string`                       | —               | Action button label. **(required)**                                                                        |
| `onAction`        | `() => unknown`                | —               | Called when action button is clicked. Does NOT auto-close. **(required)**                                  |
| `cancelLabel`     | `string`                       | `'Cancel'`      | Cancel button label.                                                                                       |
| `actionVariant`   | `ButtonVariant`                | `'destructive'` | Action button variant.                                                                                     |
| `isActionLoading` | `boolean`                      | —               | Shows loading spinner on the action button.                                                                |
| `width`           | `number                        | string`         | `400`                                                                                                      | Dialog width. |
| `isInline`        | `boolean`                      | `false`         | Renders alert dialog content inline without modal behavior. For documentation previews and showcases only. |

## Components

### useImperativeAlertDialog

See `astryx component useImperativeAlertDialog` for props and usage.

Related block templates:

AlertDialogAsyncAction
A confirmation dialog that shows a spinner while the action runs.
AlertDialogDeleteConfirmation
A delete button that asks the user to confirm before deleting.
