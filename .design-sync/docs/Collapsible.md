# Collapsible

Collapsible hides and reveals content behind a trigger button. Use it in settings panels, FAQ pages, or detail views to keep the page scannable while letting users drill into sections they care about. Wrap multiple collapsibles in CollapsibleGroup for accordion behavior. For custom collapsible components, use the `useCollapsible` hook directly (`astryx hook useCollapsible`).

**Import:** `import {Collapsible} from '@astryxdesign/core/Collapsible';`

## Anatomy

| Element | Required | Description                                                                                |
| ------- | -------- | ------------------------------------------------------------------------------------------ |
| Trigger | Yes      | The always-visible button that toggles the content. Shows a label and a chevron indicator. |
| Chevron | No       | Animated arrow that rotates to show open or closed state.                                  |
| Content | No       | The area that hides or reveals when the trigger is clicked.                                |

## Best Practices

- **Do:** Use hasDividers on CollapsibleGroup for FAQ-style lists — built-in row hairlines with themed border tokens, no hand-rolled borders.
- **Do:** Wrap each Collapsible in an Card for visual separation in accordion layouts, or use CollapsibleGroup's hasDividers for flat lists; don't combine both.
- **Do:** Use CollapsibleGroup with type="single" for settings or FAQ pages where only one section should be open at a time.
- **Do:** Use type="multiple" when users need to compare content across sections, like feature lists or pricing tiers.
- **Do:** Start sections open (defaultIsOpen) when the content is likely needed on first view; don't make users click to see essential info.
- **Don't:** Hide critical or required content behind a collapsible; users may not discover it.
- **Don't:** Nest collapsibles more than two levels deep; it makes content hard to find and navigate.
- **Don't:** Use a collapsible for a single short paragraph; just show the text directly instead.

## Props

| Prop            | Type                        | Default | Description                                                                              |
| --------------- | --------------------------- | ------- | ---------------------------------------------------------------------------------------- |
| `trigger`       | `ReactNode`                 | —       | Content shown in the trigger area (always visible). **(required)**                       |
| `children`      | `ReactNode`                 | —       | Content that collapses and expands.                                                      |
| `defaultIsOpen` | `boolean`                   | `true`  | Default open state (uncontrolled).                                                       |
| `isOpen`        | `boolean`                   | —       | Controlled open state.                                                                   |
| `onOpenChange`  | `(isOpen: boolean) => void` | —       | Callback invoked when the open state changes.                                            |
| `value`         | `string`                    | —       | Identifier used for group coordination. Required when placed inside an CollapsibleGroup. |

## Components

### CollapsibleGroup

See `astryx component CollapsibleGroup` for props and usage.

## Theming

| Component class            | Preferred data attributes | Props   | States |
| -------------------------- | ------------------------- | ------- | ------ |
| `astryx-collapsible`       | `data-density`            | density | —      |
| `astryx-collapsible-group` | `data-density`            | density | —      |

Override in defineTheme:

```ts
components: {
  'collapsible': {
    base: { /* CSS properties */ },
    'density:value': { /* variant-specific */ },
  },
  'collapsible-group': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

CollapsibleControlledAccordion
Manage the open section from parent state. Use when the open state needs to sync with a URL param, form, or external control.
CollapsibleDividedAccordion
FAQ-style accordion using the hasDividers prop on CollapsibleGroup: built-in row hairlines and density padding with zero custom CSS. Use for FAQs, settings lists, and nav sections.
CollapsibleHookUsage
Custom disclosure UI built directly with useCollapsible for headless open/close state.
CollapsibleMultipleAccordion
Several sections open at once. Use when users need to compare content across sections, like feature lists or pricing tiers.
CollapsibleShowcase
An accordion group with three collapsible sections in single mode: opening one closes the others.
CollapsibleSingleAccordion
Only one section open at a time. Use for settings pages or any list where expanding one item should close the others.
CollapsibleWithoutCard
Collapsible sections separated by dividers instead of cards. Use for inline disclosure in detail panels or sidebar content where cards would add too much weight.
CollapsibleGroupAccordion
An accordion built with type="single": opening one Collapsible automatically closes the others. Use defaultValue to pre-expand the most important section.
CollapsibleGroupShowcase
CollapsibleGroup coordinates multiple Collapsible components so that expanding one can automatically collapse the others, creating accordion behavior.
