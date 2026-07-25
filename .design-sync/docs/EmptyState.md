# EmptyState

EmptyState shows a placeholder when a content area has no data. Use it for empty lists, zero search results, first-time setups, or cleared inboxes. Always include a title and a next step so the user is not stuck.

**Import:** `import {EmptyState} from '@astryxdesign/core/EmptyState';`

## Anatomy

| Element     | Required | Description                                                                                   |
| ----------- | -------- | --------------------------------------------------------------------------------------------- |
| Icon        | No       | A visual cue above the title that reinforces the context, like a search icon for no results.  |
| Title       | Yes      | Primary message explaining what is empty: "No projects yet" not "No data".                    |
| Description | No       | Additional context explaining why it is empty or what the user can do.                        |
| Actions     | No       | One or two buttons guiding the user to a next step, like "Create project" or "Clear filters". |

## Best Practices

- **Do:** Include a clear title and a call-to-action button so users know how to proceed.
- **Do:** Use an illustration or icon that reinforces the context of the empty state.
- **Do:** Use the compact variant inside cards or sidebars where space is limited.
- **Don't:** Leave an empty state without guidance; always explain what happened and what the user can do next.
- **Don't:** Use a generic message like "No data"; be specific about what is empty and why.
- **Don't:** Use an EmptyState for error messages that require immediate action; use a Banner instead.

## Props

| Prop           | Type           | Default | Description                                                                                                                                         |
| -------------- | -------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`        | `string`       | —       | Primary message rendered as an <h3> heading inside the empty state. **(required)**                                                                  |
| `description`  | `string`       | —       | Optional secondary text providing additional context below the title.                                                                               |
| `icon`         | `ReactNode`    | —       | Optional icon or illustration displayed above the title; rendered as decorative (aria-hidden="true").                                               |
| `actions`      | `ReactNode`    | —       | Optional action buttons displayed below the description, laid out horizontally by default and stacked vertically when isCompact is true.            |
| `headingLevel` | `1             | 2       | 3                                                                                                                                                   | 4   | 5   | 6`  | `3` | Controls the rendered HTML heading tag (h1-h6) to fit the document outline. |
| `isCompact`    | `boolean`      | `false` | Enables the compact variant with reduced spacing for constrained content areas.                                                                     |
| `xstyle`       | `StyleXStyles` | —       | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value, not an inline style object like style={{}}. |

## Theming

| Component class      | Preferred data attributes | Props   | States |
| -------------------- | ------------------------- | ------- | ------ |
| `astryx-empty-state` | `data-variant`            | variant | —      |

Override in defineTheme:

```ts
components: {
  'empty-state': {
    base: { /* CSS properties */ },
    'variant:value': { /* variant-specific */ },
  },
}
```

Related block templates:

EmptyStateActions
Full empty state with icon, message, and action buttons. Use when a search returns no results, a filter clears all items, or a list has been emptied. The buttons give the user a way forward: go back, clear filters, or try a different query.
EmptyStateCompact
Smaller empty state with reduced spacing for constrained areas. Use inside sidebar panels, card widgets, or notification drawers where a full-size empty state would overwhelm the layout.
EmptyStateContainer
Empty state wrapped in a Card for first-time setup or onboarding. Use when the user has not created any items yet, like a project list, team roster, or dashboard widget that will fill with data once they take action.
EmptyStateShowcase
A no-results empty state with an icon, descriptive message, and a call-to-action button.
