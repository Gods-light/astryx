# Selector

A dropdown selector for choosing a single value from a list of options. Supports labels, validation, descriptions, and required/optional states. Use it in forms and settings when presenting a moderate number of options.

**Import:** `import {Selector} from '@astryxdesign/core/Selector';`

## Anatomy

| Element     | Required | Description                                            |
| ----------- | -------- | ------------------------------------------------------ |
| Label       | No       | Text label displayed above the selector.               |
| Placeholder | No       | Hint text shown when no value is selected.             |
| Description | No       | Helper text providing additional context.              |
| Left Icon   | No       | Icon displayed to the left of the selected value.      |
| Value       | Yes      | The currently selected item displayed in the selector. |
| List        | Yes      | The dropdown list of selectable options.               |

## Best Practices

- **Do:** Provide a visible label so users understand what they are selecting.
- **Do:** Use sections and dividers to organize options when the list exceeds ~8 items.
- **Do:** Use renderOption for custom option rows. Do not pass SelectorOption directly as JSX children.
- **Do:** Set a meaningful placeholder that hints at the expected selection (e.g. "Choose a country" not "Select...").
- **Do:** Use inside InputGroup only when the selector needs a short prefix or suffix addon as part of one decorated input surface.
- **Don't:** Use for action menus; use Dropdown Menu for triggering commands or navigation.
- **Don't:** Use when there are only two options; use a SegmentedControl or radio buttons instead.
- **Don't:** Use Selector for navigation; links should be links, not dropdown options.
- **Don't:** Use for yes/no or on/off choices; use Switch or CheckboxInput instead.
- **Don't:** Put more than ~20 options without sections; consider Typeahead for large lists.
- **Don't:** Wrap a disabled Selector in Tooltip to explain why it is disabled; disabled triggers swallow the hover events the wrapper needs. Use the disabledMessage prop instead.

## Props

| Prop                | Type                                        | Default       | Description                                                                                                                                                                                                                                                                                                      |
| ------------------- | ------------------------------------------- | ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `label`             | `string`                                    | —             | Label text for accessibility. **(required)**                                                                                                                                                                                                                                                                     |
| `options`           | `SelectorOption[]`                          | —             | Array of items: strings, objects with value/label/icon/disabled, dividers ({type: "divider"}), or sections ({type: "section", title, items}). **(required)**                                                                                                                                                     |
| `value`             | `string`                                    | —             | Currently selected value.                                                                                                                                                                                                                                                                                        |
| `onChange`          | `(value: string) => void`                   | —             | Callback fired when the selection changes.                                                                                                                                                                                                                                                                       |
| `hasClear`          | `boolean`                                   | `false`       | Shows a clear (×) button when a value is selected. When true, onChange also accepts null to signal the user cleared the selection.                                                                                                                                                                               |
| `hasSearch`         | `boolean`                                   | `false`       | Whether to show a search input for filtering options.                                                                                                                                                                                                                                                            |
| `searchPlaceholder` | `string`                                    | `'Search...'` | Placeholder text for the search input.                                                                                                                                                                                                                                                                           |
| `placeholder`       | `string`                                    | `'Select...'` | Placeholder text shown when no value is selected.                                                                                                                                                                                                                                                                |
| `size`              | `'sm'                                       | 'md'          | 'lg'`                                                                                                                                                                                                                                                                                                            | `'md'` | Size variant for the selector.              |
| `isDisabled`        | `boolean`                                   | `false`       | Disables the selector.                                                                                                                                                                                                                                                                                           |
| `htmlName`          | `string`                                    | —             | The HTML name attribute for form submissions. Renders a hidden input carrying the selected value, like a native select.                                                                                                                                                                                          |
| `disabledMessage`   | `string`                                    | —             | Explains why the selector is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the trigger focusable via aria-disabled (activation stays blocked). Use this instead of wrapping a disabled Selector in Tooltip. Disabled controls swallow the hover events an external Tooltip needs. |
| `isLabelHidden`     | `boolean`                                   | `false`       | Visually hides the label while keeping it accessible.                                                                                                                                                                                                                                                            |
| `description`       | `string`                                    | —             | Helper text displayed below the label.                                                                                                                                                                                                                                                                           |
| `isOptional`        | `boolean`                                   | `false`       | Marks the field as optional.                                                                                                                                                                                                                                                                                     |
| `isRequired`        | `boolean`                                   | `false`       | Marks the field as required.                                                                                                                                                                                                                                                                                     |
| `status`            | `{type: 'error'                             | 'warning'     | 'success', message?: string}`                                                                                                                                                                                                                                                                                    | —      | Validation status with an optional message. |
| `renderOption`      | `(option: SelectorOptionData) => ReactNode` | —             | Custom render function for each selectable option in the dropdown. Use this instead of JSX children; dividers and sections are rendered by the selector.                                                                                                                                                         |
| `xstyle`            | `StyleXStyles`                              | —             | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value: not an inline style object like style={{}}.                                                                                                                                                              |

## Components

### SelectorOption

See `astryx component SelectorOption` for props and usage.

## Theming

| Component class          | Preferred data attributes  | Props        | States |
| ------------------------ | -------------------------- | ------------ | ------ |
| `astryx-selector`        | `data-size`, `data-status` | size, status | —      |
| `astryx-selector-option` | —                          | —            | —      |

Override in defineTheme:

```ts
components: {
  'selector': {
    base: { /* CSS properties */ },
    'size:value': { /* variant-specific */ },
  },
  'selector-option': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

FormLayoutHorizontalLabels
Settings form with labels placed beside their inputs
FormLayoutMixedControls
Form with different control types: text input, selector, and checkboxes
SelectorClearable
Selector with a clear button to reset the selected value.
SelectorShowcase
SelectorWithSections
Selector with options grouped into labeled sections.
SelectorWithStatus
Selector showing error, warning, and success validation states.
SelectorOptionBasic
A selector whose options are rendered with SelectorOption, adding a secondary description below each label. Use inside renderOption for consistent custom option styling.
SelectorOptionShowcase
Selector with custom-rendered options using SelectorOption for icons and descriptions.
ThemeSwitcher
Use state to switch the theme object passed to Theme and preview a different visual treatment.
ToolbarTableFilter
A compact toolbar with a search input, Status and Priority filter selectors, and an overflow menu. Use above a data table to let users search, filter, and access view options.
