# Typeahead

A searchable input for selecting a single item from a large or dynamic dataset. Results appear as the user types, with support for async data sources, debounced search, and custom item rendering. Use it when the option list is too large for a Selector dropdown.

**Import:** `import {Typeahead} from '@astryxdesign/core/Typeahead';`

## Best Practices

- **Do:** Provide descriptive placeholder text that hints at what users can search for.
- **Do:** Show suggestions on focus when users benefit from seeing popular or recent options before typing.
- **Do:** Add a search delay for remote data sources to avoid excessive network requests.
- **Do:** Use inside InputGroup when the typeahead needs a single-line prefix or suffix addon.
- **Don't:** Use for short, static option lists; use Selector for better discoverability.
- **Don't:** Use for multi-selection; use Tokenizer instead.
- **Don't:** Place multiple Typeaheads adjacent to each other without clear labels differentiating them.
- **Don't:** Wrap a disabled Typeahead in Tooltip to explain why it is disabled; disabled triggers swallow the hover events the wrapper needs. Use the disabledMessage prop instead.

## Props

| Prop                     | Type                        | Default              | Description                                                                                                                                                                                                                                                                                                  |
| ------------------------ | --------------------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `label`                  | `string`                    | —                    | Accessible label for the input. **(required)**                                                                                                                                                                                                                                                               |
| `searchSource`           | `SearchSource<T>`           | —                    | Data source providing search and bootstrap methods for populating the dropdown. **(required)**                                                                                                                                                                                                               |
| `value`                  | `T                          | null`                | —                                                                                                                                                                                                                                                                                                            | Currently selected item, or null if nothing is selected. **(required)** |
| `onChange`               | `(item: T                   | null) => void`       | —                                                                                                                                                                                                                                                                                                            | Called when the selection changes. **(required)**                       |
| `placeholder`            | `string`                    | —                    | Input placeholder text.                                                                                                                                                                                                                                                                                      |
| `hasEntriesOnFocus`      | `boolean`                   | `false`              | Show bootstrap results on focus before typing.                                                                                                                                                                                                                                                               |
| `hasClear`               | `boolean`                   | `true`               | Show clear button to deselect the current value.                                                                                                                                                                                                                                                             |
| `isDisabled`             | `boolean`                   | `false`              | Disables the input.                                                                                                                                                                                                                                                                                          |
| `disabledMessage`        | `string`                    | —                    | Explains why the input is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the field focusable via aria-disabled (activation stays blocked). Use this instead of wrapping a disabled Typeahead in Tooltip. Disabled controls swallow the hover events an external Tooltip needs. |
| `maxMenuItems`           | `number`                    | `10`                 | Maximum number of dropdown items to display.                                                                                                                                                                                                                                                                 |
| `status`                 | `InputStatus`               | —                    | Validation status object with type and message for error/warning/success states.                                                                                                                                                                                                                             |
| `renderItem`             | `(item: T) => ReactNode`    | —                    | Custom render function for dropdown items. Default renders TypeaheadItem.                                                                                                                                                                                                                                    |
| `isLabelHidden`          | `boolean`                   | `false`              | Visually hides the label while keeping it accessible.                                                                                                                                                                                                                                                        |
| `description`            | `string`                    | —                    | Helper text displayed below the label.                                                                                                                                                                                                                                                                       |
| `isRequired`             | `boolean`                   | `false`              | Marks the field as required.                                                                                                                                                                                                                                                                                 |
| `isOptional`             | `boolean`                   | `false`              | Shows an optional indicator on the label.                                                                                                                                                                                                                                                                    |
| `labelTooltip`           | `string`                    | —                    | Tooltip text shown on the label.                                                                                                                                                                                                                                                                             |
| `emptySearchResultsText` | `string`                    | `'No results found'` | Text shown when search returns no results.                                                                                                                                                                                                                                                                   |
| `hasAutoFocus`           | `boolean`                   | `false`              | Auto-focus the input on mount.                                                                                                                                                                                                                                                                               |
| `size`                   | `'sm'                       | 'md'                 | 'lg'`                                                                                                                                                                                                                                                                                                        | `'md'`                                                                  | Input and token size. |
| `debounceMs`             | `number`                    | `150`                | Debounce delay in ms before triggering search. Set to 0 for synchronous sources.                                                                                                                                                                                                                             |
| `onChangeQuery`          | `(query: string) => void`   | —                    | Callback fired when the search query text changes.                                                                                                                                                                                                                                                           |
| `onOpenChange`           | `(isOpen: boolean) => void` | —                    | Callback when the dropdown opens or closes.                                                                                                                                                                                                                                                                  |
| `xstyle`                 | `StyleXStyles`              | —                    | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value: not an inline style object like style={{}}.                                                                                                                                                          |

## Components

### BaseTypeahead

See `astryx component BaseTypeahead` for props and usage.

### TypeaheadItem

See `astryx component TypeaheadItem` for props and usage.

## Theming

| Component class             | Preferred data attributes  | Props        | States |
| --------------------------- | -------------------------- | ------------ | ------ |
| `astryx-typeahead`          | `data-status`, `data-size` | status, size | —      |
| `astryx-typeahead-dropdown` | —                          | —            | —      |
| `astryx-typeahead-item`     | —                          | —            | —      |

Override in defineTheme:

```ts
components: {
  'typeahead': {
    base: { /* CSS properties */ },
    'status:value': { /* variant-specific */ },
  },
  'typeahead-dropdown': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

ChatComposerInputMentionTrigger
Chat input with an @ trigger that opens a typeahead menu for mentioning users. Selected names appear as inline tokens.
ChatComposerInputMultipleTriggers
Chat input with both @ mentions and / commands. Each trigger type renders tokens in a distinct color so users can tell them apart at a glance.
ChatComposerInputSlashCommands
Chat input with a / trigger for command selection. Use for AI assistants or bots that support structured commands.
TypeaheadLimitedResults
Typeahead with a capped dropdown showing at most three results.
TypeaheadSearchField
Search input with icon and suggestions on focus.
TypeaheadShowcase
TypeaheadWithHelperText
Typeahead with a description below the label.
TypeaheadWithValidation
Typeahead with an error validation message.
TypeaheadItemBasic
A typeahead whose results are rendered with TypeaheadItem, adding a secondary description below each label. Use inside renderItem to keep custom results visually consistent.
TypeaheadItemShowcase
Typeahead with custom item rendering using TypeaheadItem for avatars and descriptions.
