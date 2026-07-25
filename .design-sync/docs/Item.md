# Item

A single, flexible item primitive that unifies the "start content + label + description + end content" pattern across Astryx. Use it wherever you need a structured row: dropdown menus, selectors, contact lists, notifications, file browsers, and activity feeds.

**Import:** `import {Item} from '@astryxdesign/core/Item';`

## Anatomy

| Element       | Required | Description                                                 |
| ------------- | -------- | ----------------------------------------------------------- |
| Marker        | No       | Optional list bullet/counter rendered before start content. |
| Start content | No       | Leading visual: avatar, icon, image, or checkbox.           |
| Label         | Yes      | Primary text identifying the item.                          |
| Description   | No       | Secondary supporting text below the label.                  |
| End content   | No       | End-aligned content: badges, timestamps, or action buttons. |

## Best Practices

- **Do:** Use named slots (startContent, label, description, endContent) for the common layout. These cover the 80% case.
- **Do:** Use density="compact" for menus and dense lists, "balanced" for standard rows, and "spacious" for roomier layouts.
- **Do:** Set labelLines and descriptionLines to control truncation when content length varies.
- **Do:** Use align="start" when start or end content is taller than a single line of text.
- **Don't:** Don't nest interactive elements (buttons, links) inside an interactive Item; it creates confusing focus and click targets.
- **Don't:** Don't use Item for navigation between views; use proper navigation components instead.
- **Don't:** Don't add read/unread or inbox-specific behavior directly; compose a thin wrapper like PreviewItem instead.

## Components

### Item

A universal item primitive that unifies the "start content + label + description + end content" layout pattern. Use as a building block for list items, menu items, contact rows, notifications, and more.

| Prop               | Type                          | Default    | Description                                                                                                                    |
| ------------------ | ----------------------------- | ---------- | ------------------------------------------------------------------------------------------------------------------------------ |
| `label`            | `ReactNode`                   | —          | Primary text identifying this item. Accepts string (auto-truncated) or ReactNode (for rich content). **(required)**            |
| `marker`           | `ReactNode`                   | —          | Marker rendered before startContent as a direct flex child. Use for list bullets/counters that need custom baseline alignment. |
| `startContent`     | `ReactNode`                   | —          | Content rendered before the label/description area, such as an icon, avatar, or checkbox.                                      |
| `description`      | `ReactNode`                   | —          | Secondary text: subtitle, description, or supporting info.                                                                     |
| `endContent`       | `ReactNode`                   | —          | Content rendered after the label/description area, such as badges, metadata, timestamps, or action buttons.                    |
| `as`               | `'div'                        | 'li'       | 'span'`                                                                                                                        | `'div'`                                                                                   | HTML element to render as the root.                                                                                        |
| `align`            | `'center'                     | 'start'`   | `'center'`                                                                                                                     | Vertical alignment of start/end content slots.                                            |
| `density`          | `'compact'                    | 'balanced' | 'spacious'`                                                                                                                    | `'balanced'`                                                                              | Spacing density. "compact" uses 4px block padding, "balanced" uses 8px, and "spacious" uses 12px block and inline padding. |
| `labelLines`       | `number`                      | —          | Max lines before label truncates with ellipsis.                                                                                |
| `descriptionLines` | `number`                      | —          | Max lines before description truncates with ellipsis.                                                                          |
| `onClick`          | `(event: MouseEvent) => void` | —          | Click handler. Makes the item clickable with button semantics.                                                                 |
| `href`             | `string`                      | —          | Link URL. Makes the item a link via an invisible anchor element.                                                               |
| `target`           | `'_blank'                     | '_self'`   | —                                                                                                                              | Link target. Only used with href. target="_blank" automatically adds noopener noreferrer. |
| `rel`              | `string`                      | —          | Link relationship tokens. noopener noreferrer are merged automatically for target="_blank".                                    |
| `isHighlighted`    | `boolean`                     | `false`    | Highlighted state (hover/keyboard focus appearance).                                                                           |
| `isSelected`       | `boolean`                     | `false`    | Selected state.                                                                                                                |
| `isDisabled`       | `boolean`                     | `false`    | Disabled state.                                                                                                                |
| `ref`              | `React.Ref<HTMLDivElement>`   | —          | Ref forwarded to the root element.                                                                                             |
| `xstyle`           | `StyleXStyles`                | —          | StyleX styles for layout customization. Must be a stylex.create() value.                                                       |
| `data-testid`      | `string`                      | —          | Test selector for automated testing frameworks.                                                                                |

## Theming

| Component class | Preferred data attributes    | Props          | States |
| --------------- | ---------------------------- | -------------- | ------ |
| `astryx-item`   | `data-density`, `data-align` | density, align | —      |

Override in defineTheme:

```ts
components: {
  'item': {
    base: { /* CSS properties */ },
    'density:value': { /* variant-specific */ },
  },
}
```

Related block templates:

ItemBasicItem
A basic item with a label, supporting description, and end-aligned timestamp. Use this for simple rows that need consistent text alignment and spacing.
ItemShowcase
ItemWithMedia
Items with leading avatars and icons in the startContent slot. Keep start content small so the row stays compact and easy to scan.
ItemWithMetadata
Items with end-aligned metadata and badges. Use the endContent slot for counts, status, timestamps, and other secondary row information.
