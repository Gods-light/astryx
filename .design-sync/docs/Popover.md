# Popover

A click-triggered overlay anchored to a button or trigger element. Use it for secondary actions, inline confirmations, or supplementary information that does not warrant a full dialog. For hover previews use HoverCard, for brief helper text use Tooltip.

**Import:** `import {Popover} from '@astryxdesign/core/Popover';`

## Anatomy

| Element         | Required | Description                                               |
| --------------- | -------- | --------------------------------------------------------- |
| Header          | Yes      | Contains the title, optional subheader, and close button. |
| Body            | Yes      | Main content area of the popover.                         |
| Trigger Element | Yes      | The button or link that toggles the popover open.         |

## Best Practices

- **Do:** Keep popover content focused on a single task or piece of information.
- **Do:** Provide a clear way to close: either by clicking outside or with an explicit close button.
- **Don't:** Nest popovers inside other popovers; it creates confusing focus and navigation.
- **Don't:** Use a popover for content that requires heavy user input; use a Dialog instead.
- **Don't:** Put too much content in a popover; if it needs scrolling, use a Dialog instead.

## Components

### Popover

A click-triggered popover for displaying interactive content anchored to a trigger element.

| Prop               | Type                           | Default           | Description                                                                                                                                                    |
| ------------------ | ------------------------------ | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`         | `ReactNode`                    | —                 | Trigger element. Must contain a <button> or [role="button"] element.                                                                                           |
| `anchorRef`        | `React.RefObject<HTMLElement>` | —                 | External ref to use as the popover anchor in sibling mode.                                                                                                     |
| `content`          | `ReactNode`                    | —                 | Content to display inside the popover. **(required)**                                                                                                          |
| `placement`        | `'above'                       | 'below'           | 'start'                                                                                                                                                        | 'end'`                          | `'below'`                                                                                                          | Position placement relative to the trigger. Logical: start/end resolve against the popover's own inherited direction, so RTL contexts mirror automatically in pure CSS. |
| `alignment`        | `'start'                       | 'center'          | 'end'`                                                                                                                                                         | `'start'`                       | Alignment along the placement axis. Logical: start/end follow the popover's own inherited direction (RTL mirrors). |
| `isOpen`           | `boolean`                      | —                 | Whether the popover is shown in controlled mode.                                                                                                               |
| `onOpenChange`     | `(isOpen: boolean) => void`    | —                 | Callback fired when the popover visibility changes.                                                                                                            |
| `isEnabled`        | `boolean`                      | `true`            | When false, trigger interactions are ignored.                                                                                                                  |
| `width`            | `number                        | string`           | `'auto'`                                                                                                                                                       | Width of the popover container. |
| `label`            | `string`                       | —                 | Accessible label for the popover dialog.                                                                                                                       |
| `hasCloseButton`   | `boolean`                      | `true`            | Whether to include a hidden close button for accessibility.                                                                                                    |
| `closeButtonLabel` | `string`                       | `'Close popover'` | Label for the hidden close button.                                                                                                                             |
| `hasAutoFocus`     | `boolean`                      | `true`            | Whether to auto-focus the first focusable element when the popover opens. Set to false for inline showcases or documentation previews.                         |
| `hasLightDismiss`  | `boolean`                      | `true`            | Whether clicking outside dismisses the popover. Set to false for surfaces that stay open until explicitly dismissed, like onboarding coachmarks.               |
| `hasEscapeDismiss` | `boolean`                      | `true`            | Whether pressing Escape dismisses the popover. Only takes full effect together with hasLightDismiss={false}, since native light dismiss also closes on Escape. |
| `xstyle`           | `StyleXStyles`                 | —                 | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value, not an inline style object like style={{}}.            |

## Theming

| Component class  | Preferred data attributes | Props | States |
| ---------------- | ------------------------- | ----- | ------ |
| `astryx-popover` | —                         | —     | —      |

Override in defineTheme:

```ts
components: {
  'popover': {
    base: { /* CSS properties */ },
  },
}
```

Some properties are set via standard CSS in component overrides:

```ts
components: {
  popover: {
    base: {
      borderRadius: '...',
    },
  },
}
```

Related block templates:

PopoverConfirmAction
Inline confirmation popover for destructive actions with delete and cancel buttons.
PopoverFilterPanel
Popover with checkbox filters and apply/reset actions.
PopoverHookUsage
Custom quick-actions popover using usePopover for trigger refs, ARIA attributes, and focus trapping.
PopoverKeyboardShortcuts
Popover displaying a list of keyboard shortcuts with key and description pairs.
PopoverSettingsPanel
Popover with toggle switches for managing user preferences like notifications, dark mode, and sounds.
PopoverShowcase
