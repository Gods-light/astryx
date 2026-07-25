# CommandPalette

CommandPalette is a searchable dialog for quick access to commands, navigation, and actions. Use it as a keyboard-driven launcher powered by SearchSource for filtering and selection.

**Import:** `import {CommandPalette} from '@astryxdesign/core/CommandPalette';`

## Best Practices

- **Do:** Provide a searchSource with bootstrap results so users see useful options before typing.
- **Do:** Use auxiliaryData.group on items to automatically organize results into labeled sections.
- **Don't:** Use CommandPalette for simple dropdowns or menus; use Menu or Selector for inline selections.
- **Don't:** Add too many groups or items; curate results to keep the palette fast and scannable.

## Props

| Prop                 | Type                                          | Default                    | Description                                                                                                                                                                                     |
| -------------------- | --------------------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `isOpen`             | `boolean`                                     | —                          | Whether the command palette dialog is visible. **(required)**                                                                                                                                   |
| `onOpenChange`       | `(isOpen: boolean) => void`                   | —                          | Called when the palette visibility changes. **(required)**                                                                                                                                      |
| `searchSource`       | `SearchSource<T>`                             | —                          | Search source providing items via search(query) and bootstrap(). Use createStaticSource for static lists. **(required)**                                                                        |
| `input`              | `ReactNode`                                   | `<CommandPaletteInput />`  | Input slot. Defaults to CommandPaletteInput with standard behavior.                                                                                                                             |
| `footer`             | `ReactNode`                                   | `<CommandPaletteFooter />` | Footer slot. Defaults to CommandPaletteFooter showing keyboard hints.                                                                                                                           |
| `renderItem`         | `(item: T, isSelected: boolean) => ReactNode` | —                          | Per-item render function. Auto-grouping by auxiliaryData.group is preserved. When omitted, renders label text.                                                                                  |
| `emptySearchText`    | `ReactNode`                                   | `'No results'`             | Content shown when a search query returns no results.                                                                                                                                           |
| `emptyBootstrapText` | `ReactNode`                                   | `'Type to search'`         | Content shown when there is no search query and bootstrap() returns nothing.                                                                                                                    |
| `value`              | `string`                                      | —                          | Controlled selected value for picker mode.                                                                                                                                                      |
| `onValueChange`      | `(value: string) => void`                     | —                          | Called when the selected value changes in picker mode.                                                                                                                                          |
| `label`              | `string`                                      | `'Command palette'`        | Accessible label for the command palette dialog.                                                                                                                                                |
| `width`              | `number                                       | string`                    | `640`                                                                                                                                                                                           | Width of the dialog.          |
| `maxHeight`          | `number                                       | string`                    | `480`                                                                                                                                                                                           | Maximum height of the dialog. |
| `isInline`           | `boolean`                                     | `false`                    | Renders command palette content inline without modal behavior. Automatically disables input auto-focus and initial highlighted-item auto-scroll. For documentation previews and showcases only. |

## Components

### CommandPaletteInput

See `astryx component CommandPaletteInput` for props and usage.

### CommandPaletteList

See `astryx component CommandPaletteList` for props and usage.

### CommandPaletteItem

See `astryx component CommandPaletteItem` for props and usage.

### CommandPaletteGroup

See `astryx component CommandPaletteGroup` for props and usage.

### CommandPaletteFooter

See `astryx component CommandPaletteFooter` for props and usage.

### CommandPaletteEmpty

See `astryx component CommandPaletteEmpty` for props and usage.

## Theming

| Component class                 | Preferred data attributes | Props | States |
| ------------------------------- | ------------------------- | ----- | ------ |
| `astryx-command-palette-empty`  | —                         | —     | —      |
| `astryx-command-palette-footer` | —                         | —     | —      |
| `astryx-command-palette-group`  | —                         | —     | —      |
| `astryx-command-palette-input`  | —                         | —     | —      |
| `astryx-command-palette-item`   | —                         | —     | —      |
| `astryx-command-palette-list`   | —                         | —     | —      |

Override in defineTheme:

```ts
components: {
  'command-palette-empty': {
    base: { /* CSS properties */ },
  },
  'command-palette-footer': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

CommandPaletteAsyncSearch
Server-side search with loading spinner and custom empty states.
CommandPaletteAutoGrouped
Command palette with items grouped via auxiliaryData.group.
CommandPaletteCustomFooter
Command palette with a custom footer tip message.
CommandPalettePickerMode
Single-value picker with persistent selection and check indicator.
CommandPaletteRichItems
Custom item rendering with icons, keyboard shortcuts, and keyword search.
CommandPaletteShowcase
Basic command palette with static items and keyboard navigation.
CommandPaletteEmptyBasic
A command palette with no results, showing a custom empty message via emptyBootstrapText. Use to explain why the palette is empty and what the user can do next.
CommandPaletteEmptyShowcase
Command palette empty state shown when no commands are available.
CommandPaletteFooterBasic
A command palette footer with no children, rendering the built-in keyboard navigation hints. Use CommandPaletteFooter without content to get the default arrow-key, Enter, and Esc hints below the results list.
CommandPaletteFooterShowcase
Command palette footer with custom tip content.
CommandPaletteGroupShowcase
Command palette groups in both data-driven (auxiliaryData.group) and composed (CommandPaletteGroup + CommandPaletteItem) forms.
CommandPaletteInputBasic
Custom placeholder and a keyboard shortcut badge in the trailing slot via endContent.
CommandPaletteInputShowcase
Command palette search input with a custom placeholder and a keyboard shortcut hint in the endContent slot.
CommandPaletteItemShowcase
Command palette items with custom content via renderItem and as composed CommandPaletteItem with icons, highlighted, selected, and disabled states.
