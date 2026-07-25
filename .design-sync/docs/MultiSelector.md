# MultiSelector

A checkbox dropdown for selecting multiple values from a list. Selected items can display as a count, labels, or badges. Use it for filtering or when presenting a finite set of options where multiple choices are needed.

**Import:** `import {MultiSelector} from '@astryxdesign/core/MultiSelector';`

## Best Practices

- **Do:** Use for a moderate, finite set of options where multiple choices are needed.
- **Do:** Enable search filtering when the list exceeds ~15 options.
- **Do:** Use renderOption for custom option rows; the checkbox affordance remains owned by MultiSelector.
- **Do:** Enable select-all when most users will want all or nearly all options selected.
- **Do:** Use inside InputGroup only when the control needs a short prefix or suffix addon as part of one decorated input surface; prefer count or labels trigger display so the group stays single-line.
- **Don't:** Use for single-value selection; use Selector instead.
- **Don't:** Show more than ~20 options without enabling search.
- **Don't:** Wrap a disabled MultiSelector in Tooltip to explain why it is disabled; disabled triggers swallow the hover events the wrapper needs. Use the disabledMessage prop instead.

## Components

### MultiSelector

Multi-select dropdown with checkboxes for choosing multiple items.

| Prop                | Type                                             | Default        | Description                                                                                                                                                                                                                                                                                                           |
| ------------------- | ------------------------------------------------ | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`             | `string`                                         | —              | Label text for accessibility. **(required)**                                                                                                                                                                                                                                                                          |
| `options`           | `MultiSelectorOptionType[]`                      | —              | Array of items: strings, objects with value/label/icon/disabled, dividers, or sections. **(required)**                                                                                                                                                                                                                |
| `value`             | `string[]`                                       | —              | Currently selected values. **(required)**                                                                                                                                                                                                                                                                             |
| `onChange`          | `(value: string[]) => void`                      | —              | Callback fired when the selection changes. **(required)**                                                                                                                                                                                                                                                             |
| `changeAction`      | `(value: string[]) => void                       | Promise<void>` | —                                                                                                                                                                                                                                                                                                                     | Async action on change. Fires after onChange. |
| `placeholder`       | `string`                                         | `'Select...'`  | Placeholder text shown when no value is selected.                                                                                                                                                                                                                                                                     |
| `size`              | `'sm'                                            | 'md'           | 'lg'`                                                                                                                                                                                                                                                                                                                 | `'md'`                                        | Size variant for the selector.                |
| `triggerDisplay`    | `'count'                                         | 'labels'       | 'badges'`                                                                                                                                                                                                                                                                                                             | `'count'`                                     | How to display selected items in the trigger. |
| `maxBadges`         | `number`                                         | `3`            | Maximum badges to show before "+N". Only for triggerDisplay="badges".                                                                                                                                                                                                                                                 |
| `hasSelectAll`      | `boolean`                                        | —              | Whether to show a select-all checkbox.                                                                                                                                                                                                                                                                                |
| `selectAllLabel`    | `string`                                         | `'Select all'` | Label for the select-all checkbox.                                                                                                                                                                                                                                                                                    |
| `hasSearch`         | `boolean`                                        | —              | Whether to show a search input for filtering options.                                                                                                                                                                                                                                                                 |
| `searchPlaceholder` | `string`                                         | `'Search...'`  | Placeholder text for the search input.                                                                                                                                                                                                                                                                                |
| `isDisabled`        | `boolean`                                        | —              | Disables the selector.                                                                                                                                                                                                                                                                                                |
| `htmlName`          | `string`                                         | —              | The HTML name attribute for form submissions. Renders one hidden input per selected value, like a native multi-select.                                                                                                                                                                                                |
| `disabledMessage`   | `string`                                         | —              | Explains why the selector is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the trigger focusable via aria-disabled (activation stays blocked). Use this instead of wrapping a disabled MultiSelector in Tooltip. Disabled controls swallow the hover events an external Tooltip needs. |
| `isLabelHidden`     | `boolean`                                        | —              | Visually hides the label while keeping it accessible.                                                                                                                                                                                                                                                                 |
| `description`       | `string`                                         | —              | Helper text displayed below the label.                                                                                                                                                                                                                                                                                |
| `isOptional`        | `boolean`                                        | —              | Marks the field as optional.                                                                                                                                                                                                                                                                                          |
| `isRequired`        | `boolean`                                        | —              | Marks the field as required.                                                                                                                                                                                                                                                                                          |
| `isLoading`         | `boolean`                                        | —              | Shows a loading spinner in the trigger.                                                                                                                                                                                                                                                                               |
| `status`            | `{type: 'error'                                  | 'warning'      | 'success', message?: string}`                                                                                                                                                                                                                                                                                         | —                                             | Validation status with an optional message.   |
| `renderOption`      | `(option: MultiSelectorOptionData) => ReactNode` | —              | Custom render function for each selectable option in the dropdown. Not called for dividers, sections, or the select-all row.                                                                                                                                                                                          |
| `xstyle`            | `StyleXStyles`                                   | —              | StyleX styles for layout customization. Must be a stylex.create() value.                                                                                                                                                                                                                                              |

## Theming

| Component class         | Preferred data attributes  | Props        | States |
| ----------------------- | -------------------------- | ------------ | ------ |
| `astryx-multi-selector` | `data-size`, `data-status` | size, status | —      |

Override in defineTheme:

```ts
components: {
  'multi-selector': {
    base: { /* CSS properties */ },
    'size:value': { /* variant-specific */ },
  },
}
```

Related block templates:

MultiSelectorColumnVisibilitySelector
Column visibility toggle with hidden label, search, select-all, and selection count.
MultiSelectorForm
Two multi-selectors in a form with required/optional states.
MultiSelectorSearchableMultiSelector
Multi-select with search filtering and select-all.
MultiSelectorSectionedMultiSelector
Multi-select with options grouped into labeled sections.
MultiSelectorShowcase
TableColumnSettingsTable
Table with a column visibility picker in the toolbar. Toggle columns on and off.
