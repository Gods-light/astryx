# Tokenizer

Tokenizer is a multi-select input that lets users search, select, and manage multiple items displayed as removable chips. Use it when users need to build a set of selections from a searchable data source, like adding team members, applying tags, or choosing filters.

**Import:** `import {Tokenizer} from '@astryxdesign/core/Tokenizer';`

## Anatomy

| Element       | Required | Description                                                                                               |
| ------------- | -------- | --------------------------------------------------------------------------------------------------------- |
| Label         | Yes      | The visible text above the input describing what the user is selecting. Also used as the accessible name. |
| Token chips   | No       | Removable chips representing each selected item. Each chip shows a label and a remove button.             |
| Search input  | Yes      | The text input where users type to search the data source. Hides when maxEntries is reached.              |
| Dropdown menu | No       | The search results list that appears below the input as the user types.                                   |
| End content   | No       | A trailing slot after the input for action buttons, counts, or other controls.                            |
| Clear button  | No       | A button that removes all selected tokens at once. Shown when hasClear is true and tokens are present.    |

## Best Practices

- **Do:** Write a placeholder that tells users what they can search for, such as "Search people..." or "Add tags...", so the input is not a blank mystery.
- **Do:** Set maxEntries when the number of selections should be bounded, like limiting a review to 5 approvers.
- **Do:** Use hasCreate for free-form tagging where users need to enter values that do not exist in the search source.
- **Do:** Show validation status with the status prop so users know immediately when a selection is missing or invalid.
- **Don't:** Don't use Tokenizer for single-item selection; use Typeahead instead. Tokenizer is for building sets of two or more items.
- **Don't:** Avoid applying custom colors to individual tokens inside a Tokenizer; use the default token style for visual consistency across the set.
- **Don't:** Don't hide the label; every Tokenizer needs a visible label so users understand what they are selecting. Use isLabelHidden only when surrounding context makes the purpose obvious.
- **Don't:** Wrap a disabled Tokenizer in Tooltip to explain why it is disabled; disabled controls swallow the hover events the wrapper needs. Use the disabledMessage prop instead.

## Props

| Prop                     | Type                                               | Default              | Description                                                                                                                                                                                                                                                                                                 |
| ------------------------ | -------------------------------------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`                  | `string`                                           | —                    | Accessible label for the input. **(required)**                                                                                                                                                                                                                                                              |
| `searchSource`           | `SearchSource<T>`                                  | —                    | Data source providing search and bootstrap methods for populating the dropdown. **(required)**                                                                                                                                                                                                              |
| `value`                  | `T[]`                                              | —                    | Array of currently selected items. **(required)**                                                                                                                                                                                                                                                           |
| `onChange`               | `(items: T[], change: TokenizerChange<T>) => void` | —                    | Called when selection changes. The change argument includes the affected item and type ('add'                                                                                                                                                                                                               | 'create' | 'remove'              | 'reorder'). **(required)** |
| `placeholder`            | `string`                                           | —                    | Input placeholder text. Only shown when no tokens are selected.                                                                                                                                                                                                                                             |
| `maxEntries`             | `number`                                           | —                    | Maximum number of selections allowed. Input is hidden when the limit is reached.                                                                                                                                                                                                                            |
| `hasClear`               | `boolean`                                          | `false`              | Show a clear-all button for bulk removal of all tokens.                                                                                                                                                                                                                                                     |
| `renderToken`            | `(item: T, onRemove: () => void) => ReactNode`     | —                    | Custom render function for selected tokens. Default renders Token with label and onRemove.                                                                                                                                                                                                                  |
| `renderItem`             | `(item: T) => ReactNode`                           | —                    | Custom render function for dropdown items. Default renders TypeaheadItem.                                                                                                                                                                                                                                   |
| `isDisabled`             | `boolean`                                          | `false`              | Disables the input and all token interactions.                                                                                                                                                                                                                                                              |
| `htmlName`               | `string`                                           | —                    | The HTML name attribute for form submissions. Renders one hidden input per selected item id.                                                                                                                                                                                                                |
| `disabledMessage`        | `string`                                           | —                    | Explains why the tokenizer is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the input focusable via aria-disabled (input stays blocked). Use this instead of wrapping a disabled Tokenizer in Tooltip. Disabled controls swallow the hover events an external Tooltip needs. |
| `status`                 | `InputStatus`                                      | —                    | Validation status object with type and message for error/warning/success states.                                                                                                                                                                                                                            |
| `isLabelHidden`          | `boolean`                                          | `false`              | Visually hides the label while keeping it accessible.                                                                                                                                                                                                                                                       |
| `description`            | `string`                                           | —                    | Helper text displayed below the label.                                                                                                                                                                                                                                                                      |
| `isRequired`             | `boolean`                                          | `false`              | Marks the field as required.                                                                                                                                                                                                                                                                                |
| `isOptional`             | `boolean`                                          | `false`              | Shows an optional indicator on the label.                                                                                                                                                                                                                                                                   |
| `labelTooltip`           | `string`                                           | —                    | Tooltip text shown on the label.                                                                                                                                                                                                                                                                            |
| `hasEntriesOnFocus`      | `boolean`                                          | `false`              | Show bootstrap results on focus before typing.                                                                                                                                                                                                                                                              |
| `maxMenuItems`           | `number`                                           | `10`                 | Maximum number of dropdown items to display.                                                                                                                                                                                                                                                                |
| `emptySearchResultsText` | `string`                                           | `'No results found'` | Text shown when search returns no results.                                                                                                                                                                                                                                                                  |
| `hasAutoFocus`           | `boolean`                                          | `false`              | Auto-focus the input on mount.                                                                                                                                                                                                                                                                              |
| `size`                   | `'sm'                                              | 'md'                 | 'lg'`                                                                                                                                                                                                                                                                                                       | `'md'`   | Input and token size. |
| `debounceMs`             | `number`                                           | `150`                | Debounce delay in ms before triggering search. Set to 0 for synchronous sources.                                                                                                                                                                                                                            |
| `hasCreate`              | `boolean`                                          | `false`              | Allow users to create new tokens from free-text input. When true, a "Create" option appears in the dropdown for typed text that doesn't match existing results. The onChange change type is 'create' for these items.                                                                                       |
| `onChangeQuery`          | `(query: string) => void`                          | —                    | Callback fired when the search query text changes.                                                                                                                                                                                                                                                          |
| `endContent`             | `ReactNode`                                        | —                    | Content to display at the end of the input row. Useful for buttons, result counts, or other controls.                                                                                                                                                                                                       |
| `handleRef`              | `React.Ref<TokenizerHandle>`                       | —                    | Imperative handle for focus() and blur() control.                                                                                                                                                                                                                                                           |
| `xstyle`                 | `StyleXStyles`                                     | —                    | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value; not an inline style object like style={{}}.                                                                                                                                                         |

## Theming

| Component class    | Preferred data attributes  | Props        | States |
| ------------------ | -------------------------- | ------------ | ------ |
| `astryx-tokenizer` | `data-size`, `data-status` | size, status | —      |

Override in defineTheme:

```ts
components: {
  'tokenizer': {
    base: { /* CSS properties */ },
    'size:value': { /* variant-specific */ },
  },
}
```

Related block templates:

TokenizerClear
Tokenizer with a built-in clear-all button for bulk removal of all selected tokens.
TokenizerCreatable
Free-text tokenizer for creating custom tags and a combined create-or-search pattern. Use when users need to enter values that may not exist in a predefined list.
TokenizerEndContent
Tokenizer with an action button in the end slot. Use for inline actions like applying selections alongside the input.
TokenizerIcon
Tokenizer with a leading search icon to visually reinforce the search behavior.
TokenizerMaxEntries
Tokenizer with a maximum selection limit. The input hides automatically when the limit is reached, preventing further additions.
TokenizerOverflow
Tokenizer with overflow truncation when unfocused. Inline mode pushes content down on expand; layer mode overlays without shifting layout.
TokenizerShowcase
A tokenizer with preset tags and search source.
TokenizerStates
Tokenizer in disabled, error, warning, and success states. Use to communicate validation feedback or lock a selection from editing.
