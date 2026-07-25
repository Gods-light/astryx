# TreeList

An expandable tree structure for displaying hierarchical data with branch connector lines. Use it for file explorers, nested category browsers, or any interface that visualizes parent-child relationships.

**Import:** `import {TreeList} from '@astryxdesign/core/TreeList';`

## Best Practices

- **Do:** Provide meaningful labels and icons for each node to make the hierarchy easy to scan.
- **Do:** Pre-expand important branches so users see key content immediately.
- **Don't:** Nest more than 4–5 levels deep; flatten the structure or use a different pattern.
- **Don't:** Use a tree for flat, non-hierarchical data; use a List instead.

## Components

### TreeList

Tree list container. Accepts items data and rendering configuration. Expansion state is managed internally.

| Prop      | Type                 | Default    | Description                                                                                                                                   |
| --------- | -------------------- | ---------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`   | `TreeListItemData[]` | —          | Recursive tree item data. Each item has id, label, optional children array, and optional isExpanded boolean for initial state. **(required)** |
| `density` | `'compact'           | 'balanced' | 'spacious'`                                                                                                                                   | `'balanced'` | Spacing density for items. |
| `header`  | `ReactNode`          | —          | Header content, associated with the tree via aria-labelledby.                                                                                 |
| `xstyle`  | `StyleXStyles`       | —          | StyleX styles for layout customization. Must be a stylex.create() value.                                                                      |

## Theming

| Component class         | Preferred data attributes                        | Props   | States             |
| ----------------------- | ------------------------------------------------ | ------- | ------------------ |
| `astryx-tree-list`      | `data-density`                                   | density | —                  |
| `astryx-tree-list-item` | `data-density`, `data-selected`, `data-disabled` | density | selected, disabled |

Override in defineTheme:

```ts
components: {
  'tree-list': {
    base: { /* CSS properties */ },
    'density:value': { /* variant-specific */ },
  },
  'tree-list-item': {
    base: { /* CSS properties */ },
    'selected': { /* state-specific */ },
  },
}
```

Related block templates:

TreeListFileTreeWithIcons
File browser tree with folder and document icons distinguishing directories from files.
TreeListInteractiveSettings
Settings tree with clickable items and a documentation link.
TreeListMailboxTree
Email folder tree with unread badge counts.
TreeListNavigationTree
Navigation tree with a selected item for the current page.
TreeListShowcase
