# ToggleButton

ToggleButton switches between selected and unselected states to represent a persistent on/off choice. Use it standalone for binary actions like bold, mute, or favorite, or inside a ToggleButtonGroup for single-select or multi-select toolbar controls.

**Import:** `import {ToggleButton} from '@astryxdesign/core/ToggleButton';`

## Anatomy

| Element      | Required | Description                                                                                                         |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------------- |
| Icon         | No       | A leading icon that represents the toggle action, like a star for favorite or bold "B" for formatting.              |
| Pressed icon | No       | An alternate icon shown when pressed: typically a filled version of the default icon to reinforce the active state. |
| Label        | Yes      | The visible text or accessible name. For icon-only toggles, used as the aria-label and auto-tooltip.                |
| Spinner      | No       | Replaces the icon during async operations triggered by pressedChangeAction.                                         |

## Best Practices

- **Do:** Use a filled or colored icon for the pressed state so users can see the current state at a glance: an outline star vs a solid star, for example.
- **Do:** Keep the label identical between pressed and unpressed states. Let the visual treatment (icon, weight, background) communicate the change.
- **Do:** Wrap related toggles in a ToggleButtonGroup with an accessible label so screen readers announce them as a connected set.
- **Don't:** Don't use a ToggleButton for one-time actions like "Submit" or "Delete"; those are regular Buttons, not toggles.
- **Don't:** Don't mix ToggleButtons with regular Buttons inside the same group; use only ToggleButtons in a ToggleButtonGroup.
- **Don't:** Don't use a ToggleButton for on/off settings that persist across sessions; use a Switch instead, which better communicates "setting" semantics.

## Props

| Prop                  | Type                                              | Default        | Description                                                                                                                                                                 |
| --------------------- | ------------------------------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`               | `string`                                          | —              | Accessible label for the button. Used as visible text, or as aria-label for icon-only buttons. **(required)**                                                               |
| `isPressed`           | `boolean`                                         | —              | Whether the button is currently pressed. Ignored when inside a group.                                                                                                       |
| `onPressedChange`     | `(isPressed: boolean, event: MouseEvent) => void` | —              | Called when pressed state should change. Receives the next state and the click event; call event.preventDefault() to skip pressedChangeAction. Ignored when inside a group. |
| `pressedChangeAction` | `(isPressed: boolean) => void                     | Promise<void>` | —                                                                                                                                                                           | Action handler for API- or navigation-backed toggles, run in a transition. Shows an optimistic pressed state immediately and a spinner while pending; the button stays interruptible by re-clicks. |
| `size`                | `'sm'                                             | 'md'           | 'lg'`                                                                                                                                                                       | `'md'`                                                                                                                                                                                             | Button size. Defaults to group size when inside a group. |
| `isDisabled`          | `boolean`                                         | `false`        | Whether the button is disabled.                                                                                                                                             |
| `isLoading`           | `boolean`                                         | `false`        | Whether the button shows a loading spinner.                                                                                                                                 |
| `icon`                | `ReactNode`                                       | —              | Icon element. When provided without children, button becomes icon-only with tooltip from label.                                                                             |
| `isIconOnly`          | `boolean`                                         | `false`        | When true, renders as a square icon-only button with `label` as the aria-label and an automatic tooltip from the label.                                                     |
| `pressedIcon`         | `ReactNode`                                       | —              | Icon shown when pressed. Falls back to icon if not provided.                                                                                                                |
| `children`            | `ReactNode`                                       | —              | Visible content. If omitted with icon, button becomes icon-only.                                                                                                            |
| `tooltip`             | `string`                                          | —              | Tooltip text shown on hover.                                                                                                                                                |
| `value`               | `string`                                          | —              | Value identifier when used inside ToggleButtonGroup. Required in groups.                                                                                                    |
| `data-testid`         | `string`                                          | —              | Test selector for automated testing frameworks.                                                                                                                             |

## Components

### ToggleButtonGroup

See `astryx component ToggleButtonGroup` for props and usage.

## Theming

| Component class              | Preferred data attributes | Props | States    |
| ---------------------------- | ------------------------- | ----- | --------- |
| `astryx-toggle-button-group` | —                         | —     | —         |
| `astryx-toggle-button`       | `data-is-pressed`         | —     | isPressed |

Override in defineTheme:

```ts
components: {
  'toggle-button-group': {
    base: { /* CSS properties */ },
  },
  'toggle-button': {
    base: { /* CSS properties */ },
    'isPressed': { /* state-specific */ },
  },
}
```

Related block templates:

ToggleButtonColor
Toggle buttons with colored icons in the pressed state. Shows accent-colored toolbar formatting and semantic reaction colors (yellow star, red heart, blue bookmark).
ToggleButtonGroup
Toggle button groups in single-select and multi-select modes. Single selection acts as a view mode switcher; multiple selection forms a formatting toolbar.
ToggleButtonIconSwap
Icon-only toggle buttons that swap between outline and solid icons when pressed. Use for actions like favorite, bookmark, or mute where the icon itself communicates the state.
ToggleButtonLabel
Toggle buttons with visible text labels that show a font weight shift on press. Use when the icon alone is not enough to communicate the action.
ToggleButtonShowcase
ToggleButtonStates
Default, pressed, disabled, and loading states of a standalone toggle button. Shows how visual treatment changes across states.
ToggleButtonGroupShowcase
ToggleButtonGroup manages a set of ToggleButtons with single-select or multi-select behavior for options like view modes or filters.
ToggleButtonGroupVertical
A vertically stacked ToggleButtonGroup using the vertical orientation, shown with both single-select and multi-select behavior, ideal for sidebar-style option lists and vertical toolbars.
