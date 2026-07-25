# Divider

A visual separator that divides content into distinct sections. Use to create clear boundaries between groups of related content, or to demarcate interactive regions within a layout.

**Import:** `import {Divider} from '@astryxdesign/core/Divider';`

## Best Practices

- **Do:** Use subtle dividers between related content sections and strong dividers for high-contrast boundaries.
- **Do:** Add a label to the divider when sections need a visible category heading.
- **Don't:** Overuse dividers; rely on spacing and layout to separate content when possible.

## Props

| Prop          | Type           | Default     | Description                                                                                                                                         |
| ------------- | -------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `orientation` | `'horizontal'  | 'vertical'` | `'horizontal'`                                                                                                                                      | Orientation of the divider.        |
| `label`       | `ReactNode`    | —           | Optional label centered on the divider.                                                                                                             |
| `variant`     | `'subtle'      | 'strong'`   | `'subtle'`                                                                                                                                          | Visual weight of the divider line. |
| `isFullBleed` | `boolean`      | `false`     | Extend the divider to container edges with negative margins.                                                                                        |
| `xstyle`      | `StyleXStyles` | —           | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value, not an inline style object like style={{}}. |

## Theming

| Component class  | Preferred data attributes          | Props          | States |
| ---------------- | ---------------------------------- | -------------- | ------ |
| `astryx-divider` | `data-orientation`, `data-variant` | subtle, strong | —      |

Override in defineTheme:

```ts
components: {
  'divider': {
    base: { /* CSS properties */ },
    'orientation:value': { /* variant-specific */ },
  },
}
```

Related block templates:

CheckboxInputIndeterminateState
A "select all" checkbox that controls a group of options. When only some options are checked, it shows a dash instead of a checkmark. Clicking it checks or unchecks everything.
CheckboxListSelectAllPattern
A "select all" toggle at the top of a checkbox list that switches to an indeterminate dash when only some items are checked, useful for bulk actions like exporting documents or assigning permissions where users often want everything at once.
CollapsibleWithoutCard
Collapsible sections separated by dividers instead of cards. Use for inline disclosure in detail panels or sidebar content where cards would add too much weight.
DividerFullBleed
Divider that extends past container padding to span the full width. Use inside cards or panels when you want a clean edge-to-edge separation, like between an order summary and total.
DividerShowcase
Horizontal dividers in subtle and strong variants, plus a labeled divider. A quick visual reference for separator styles.
DividerVariants
Subtle, labeled, and strong dividers in a single card. Use subtle between related sections, labeled for alternatives like "or", and strong for high-contrast boundaries.
DividerVertical
Vertical dividers separating side-by-side metrics. Use between stat cards, toolbar groups, or any horizontal layout where you need a visual boundary between sections.
PopoverFilterPanel
Popover with checkbox filters and apply/reset actions.
PopoverKeyboardShortcuts
Popover displaying a list of keyboard shortcuts with key and description pairs.
PopoverSettingsPanel
Popover with toggle switches for managing user preferences like notifications, dark mode, and sounds.
PopoverShowcase
