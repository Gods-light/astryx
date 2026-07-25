# Breadcrumbs

Breadcrumbs show a trail of links from the root to the current page. Use them at the top of detail pages, settings panels, or anywhere the user needs to see where they are and navigate back up.

**Import:** `import {Breadcrumbs} from '@astryxdesign/core/Breadcrumbs';`

## Anatomy

| Element   | Required | Description                                                                       |
| --------- | -------- | --------------------------------------------------------------------------------- |
| Trail     | Yes      | The ordered list of links from root to current page.                              |
| Item      | Yes      | A single step in the trail. Renders as a link or plain text for the current page. |
| Separator | Yes      | The character between items. Defaults to "/" but can be customized.               |
| Icon      | No       | An optional icon before an item label, like a home icon on the first item.        |

## Best Practices

- **Do:** Place breadcrumbs above the page heading so the user sees their location before reading the content.
- **Do:** Keep labels short and match the page titles they link to: "Settings" not "Application Settings Page".
- **Do:** Use the supporting variant in dense UIs like admin panels or sidebars where the breadcrumb should be subtle.
- **Do:** Make the last item plain text, not a link; it represents the current page. The component does this automatically when you set isCurrent.
- **Don't:** Use breadcrumbs as the primary navigation. They supplement a sidebar or top nav, not replace it.
- **Don't:** Show breadcrumbs on top-level pages that have no parent; they add clutter without helping the user.
- **Don't:** Let the trail grow beyond 5 levels. If you need more, consider simplifying the page hierarchy instead.

## Props

| Prop        | Type           | Default        | Description                                                                                                                                         |
| ----------- | -------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`  | `ReactNode`    | —              | BreadcrumbItem elements to render inside the breadcrumb trail. **(required)**                                                                       |
| `separator` | `ReactNode`    | `'/'`          | Separator rendered between breadcrumb items.                                                                                                        |
| `variant`   | `'default'     | 'supporting'`  | `'default'`                                                                                                                                         | Visual variant: supporting is smaller with secondary text styling. |
| `label`     | `string`       | `'Breadcrumb'` | Accessible label for the nav landmark (aria-label).                                                                                                 |
| `xstyle`    | `StyleXStyles` | —              | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value: not an inline style object like style={{}}. |

## Components

### BreadcrumbItem

Individual breadcrumb item. Renders as a link when href is provided, or as plain text for the current page.

| Prop        | Type                      | Default | Description                                                                                                                                |
| ----------- | ------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `children`  | `ReactNode`               | —       | Label content for the breadcrumb item. **(required)**                                                                                      |
| `href`      | `string`                  | —       | URL the breadcrumb links to; omit for non-navigable items.                                                                                 |
| `onClick`   | `(e: MouseEvent) => void` | —       | Click handler for the breadcrumb item.                                                                                                     |
| `isCurrent` | `boolean`                 | `false` | Marks this item as the current page, applying aria-current="page".                                                                         |
| `startIcon` | `ReactNode`               | —       | Icon rendered before the item label.                                                                                                       |
| `as`        | `LinkComponentType`       | —       | Custom link component to render instead of <a>. Overrides the provider-level default from LinkProvider. Only applies to non-current items. |

## Theming

| Component class          | Preferred data attributes | Props               | States |
| ------------------------ | ------------------------- | ------------------- | ------ |
| `astryx-breadcrumb-item` | —                         | —                   | —      |
| `astryx-breadcrumbs`     | `data-variant`            | default, supporting | —      |

Override in defineTheme:

```ts
components: {
  'breadcrumb-item': {
    base: { /* CSS properties */ },
  },
  'breadcrumbs': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

BreadcrumbItemBasic
Breadcrumb links inside a Breadcrumbs trail. Ancestor pages get an href; mark the last item with isCurrent to render it as plain text for the current page.
BreadcrumbItemShowcase
BreadcrumbItem represents a single step in a breadcrumb trail, supporting links, icons, current-page markers, and custom link components.
BreadcrumbsCustomSeparator
Swap the default "/" for a different character like chevrons, arrows, or dots. Use when the visual style of the page calls for a different separator.
BreadcrumbsDeepHierarchy
A 5-level breadcrumb trail for deeply nested content. Use in e-commerce, file browsers, or any UI with several levels of hierarchy.
BreadcrumbsShowcase
A breadcrumb trail showing page hierarchy with linked ancestors and a current page.
BreadcrumbsSupportingVariant
Compare the default and supporting variants side by side. Use the supporting variant in dense UIs like admin panels where the breadcrumb should be subtle.
BreadcrumbsWithIcons
Add icons before breadcrumb labels for quick recognition. Use a home icon on the root item and contextual icons on key sections.
