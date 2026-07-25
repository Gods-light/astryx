# Kbd

Renders a keyboard shortcut as styled key badges. Use Kbd in tooltips, menus, and help text to show key combinations.

**Import:** `import {Kbd} from '@astryxdesign/core/Kbd';`

## Best Practices

- **Do:** Place shortcuts near the action they trigger: in a tooltip, menu item, or inline instruction.
- **Do:** Use mod instead of ctrl or cmd; it automatically adapts to the user's platform.
- **Don't:** Use Kbd as the only way to discover an action; shortcuts should supplement visible controls, not replace them.

## Props

| Prop        | Type            | Default | Description                                                                                                                                                                |
| ----------- | --------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `keys`      | `string`        | —       | Keyboard shortcut string. Use "+" to separate keys. Special keys: mod (Cmd on Mac), ctrl, alt, shift, enter, backspace, escape, tab, up, down, left, right. **(required)** |
| `xstyle`    | `StyleXStyles`  | —       | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value, not an inline style object like style={{}}.                        |
| `className` | `string`        | —       | CSS class name for the root element. Prefer xstyle for styling; className is provided for integration with non-StyleX systems.                                             |
| `style`     | `CSSProperties` | —       | Inline styles for the root element. Prefer xstyle for styling; inline styles bypass StyleX optimization.                                                                   |

## Theming

| Component class | Preferred data attributes | Props | States |
| --------------- | ------------------------- | ----- | ------ |
| `astryx-kbd`    | —                         | —     | —      |

Override in defineTheme:

```ts
components: {
  'kbd': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

CommandPaletteRichItems
Custom item rendering with icons, keyboard shortcuts, and keyword search.
CommandPaletteInputBasic
Custom placeholder and a keyboard shortcut badge in the trailing slot via endContent.
CommandPaletteInputShowcase
Command palette search input with a custom placeholder and a keyboard shortcut hint in the endContent slot.
CommandPaletteItemShowcase
Command palette items with custom content via renderItem and as composed CommandPaletteItem with icons, highlighted, selected, and disabled states.
KbdInlineInstructions
Keyboard shortcuts rendered inline within instructional text
KbdMenuShortcuts
Menu-style list pairing action labels with their keyboard shortcuts
KbdModifierCombos
Modifier combinations and special keys rendered as shortcut badges
KbdShowcase
