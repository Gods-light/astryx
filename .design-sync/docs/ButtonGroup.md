# ButtonGroup

ButtonGroup joins related actions into a single connected control. Use it when multiple buttons represent related choices or operations that belong together visually, like copy/cut/paste, or undo/redo.

**Import:** `import {ButtonGroup} from '@astryxdesign/core/ButtonGroup';`

## Anatomy

| Element | Required | Description                                                              |
| ------- | -------- | ------------------------------------------------------------------------ |
| Button  | Yes      | One or more Button or IconButton children that form the connected group. |
| Divider | No       | A thin border between buttons, rendered automatically by the group.      |

## Best Practices

- **Do:** Group buttons that perform related actions on the same object, like copy, cut, paste on selected text.
- **Do:** Use the same variant for all buttons in a group so they look like a single connected unit.
- **Do:** Keep groups small (2–4 buttons). For more actions, use a Toolbar or DropdownMenu instead.
- **Don't:** Don't mix wildly different actions. A Save button next to a Delete button in the same group is confusing.
- **Don't:** Don't use ButtonGroup for navigation. Use SegmentedControl or TabList for switching between views.
- **Don't:** Don't nest ButtonGroups. If you need multiple groups, place them side by side with a gap.

## Components

### ButtonGroup

Groups multiple buttons together with connected styling: shared borders, proper border-radius handling (only on outer edges), and horizontal or vertical orientation.

| Prop          | Type                        | Default     | Description                                                              |
| ------------- | --------------------------- | ----------- | ------------------------------------------------------------------------ |
| `children`    | `ReactNode`                 | —           | Button or IconButton children. **(required)**                            |
| `label`       | `string`                    | —           | Accessible label for the group (aria-label). **(required)**              |
| `orientation` | `'horizontal'               | 'vertical'` | `'horizontal'`                                                           | Layout direction of the button group. |
| `size`        | `'sm'                       | 'md'        | 'lg'`                                                                    | `'md'`                                | Default size for buttons in the group. Individual buttons can override. |
| `isDisabled`  | `boolean`                   | `false`     | Whether all buttons in the group are disabled.                           |
| `ref`         | `React.Ref<HTMLDivElement>` | —           | Ref forwarded to the root element.                                       |
| `xstyle`      | `StyleXStyles`              | —           | StyleX styles for layout customization. Must be a stylex.create() value. |
| `data-testid` | `string`                    | —           | Test selector for automated testing frameworks.                          |

## Theming

| Component class       | Preferred data attributes       | Props             | States |
| --------------------- | ------------------------------- | ----------------- | ------ |
| `astryx-button-group` | `data-size`, `data-orientation` | size, orientation | —      |

Override in defineTheme:

```ts
components: {
  'button-group': {
    base: { /* CSS properties */ },
    'size:value': { /* variant-specific */ },
  },
}
```

Related block templates:

ButtonGroupBasic
Three related actions joined into a single connected control. Provide a group label for accessibility and keep all buttons the same variant so they read as one unit.
ButtonGroupShowcase
