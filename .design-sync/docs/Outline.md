# Outline

A table-of-contents sidebar for documentation pages, help centers, wikis, and long settings pages. Use it for navigation within a single page, not for app routes. Features a sliding indicator track that animates to the active heading.

**Import:** `import {Outline} from '@astryxdesign/core/Outline';`

## Best Practices

- **Do:** Pass a flat ordered list of headings and let level control indentation.
- **Do:** Use activeId when custom scroll logic owns the active section.
- **Do:** Use density="compact" in dense sidebars where vertical space is tight.
- **Do:** Use useOutlineFromMarkdown or useOutlineFromDOM when headings are generated from content.
- **Don't:** Use Outline for application navigation - use SideNav or TopNav for routes.
- **Don't:** Use Outline for expandable hierarchy - use TreeList when nodes need expand and collapse.

## Components

### Outline

Document outline navigation with sliding indicator track. Renders a flat heading list as anchor links with a density variant and scroll-spy active state when uncontrolled.

| Prop               | Type                   | Default               | Description                                                                                                                        |
| ------------------ | ---------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `items`            | `OutlineItem[]`        | —                     | Ordered heading items. Each item has id, label, and level (1-6). The id should match the target heading element id. **(required)** |
| `activeId`         | `string`               | —                     | Currently active heading id. Providing this prop makes active state controlled and disables built-in scroll-spy.                   |
| `onActiveIdChange` | `(id: string) => void` | —                     | Called when the active item changes from built-in scroll-spy or from an outline link click.                                        |
| `label`            | `string`               | `'Table of contents'` | Accessible label for the nav landmark.                                                                                             |
| `density`          | `'default'             | 'compact'`            | `'default'`                                                                                                                        | Density variant controlling item padding. 'compact' for dense UIs, 'default' for standard spacing. |
| `xstyle`           | `StyleXStyles`         | —                     | StyleX styles for layout customization. Must be a stylex.create() value.                                                           |

#### Basic

```tsx
import {Outline} from '@astryxdesign/core/Outline';

const items = [
  {id: 'overview', label: 'Overview', level: 2},
  {id: 'installation', label: 'Installation', level: 2},
  {id: 'theming', label: 'Theming', level: 2},
  {id: 'tokens', label: 'Tokens', level: 3},
  {id: 'accessibility', label: 'Accessibility', level: 2},
];

// Uncontrolled: built-in scroll-spy tracks the topmost visible heading.
<Outline items={items} />;
```

#### Compact (density="compact")

```tsx
import {Outline} from '@astryxdesign/core/Outline';

// Dense sidebars use the compact variant; the sliding indicator
// automatically matches the shorter item height.
<Outline items={items} density="compact" />;
```

#### Controlled active section

```tsx
import {useState} from 'react';
import {Outline} from '@astryxdesign/core/Outline';

function ControlledOutline() {
  const [activeId, setActiveId] = useState('overview');

  // Providing activeId disables built-in scroll-spy; you own the active state.
  return (
    <Outline items={items} activeId={activeId} onActiveIdChange={setActiveId} />
  );
}
```

#### Generate items from markdown

```tsx
import {Outline, useOutlineFromMarkdown} from '@astryxdesign/core/Outline';

function MarkdownOutline({markdown}) {
  // Derives {id, label, level} items from headings in the source.
  const items = useOutlineFromMarkdown(markdown);
  return <Outline items={items} />;
}
```

## Theming

| Component class            | Preferred data attributes   | Props   | States |
| -------------------------- | --------------------------- | ------- | ------ |
| `astryx-outline`           | `data-density`              | density | —      |
| `astryx-outline-indicator` | —                           | —       | —      |
| `astryx-outline-item`      | `data-level`, `data-active` | level   | active |

Override in defineTheme:

```ts
components: {
  'outline': {
    base: { /* CSS properties */ },
    'density:value': { /* variant-specific */ },
  },
  'outline-indicator': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

OutlineControlled
Drive the active section yourself with activeId and onActiveIdChange. Providing activeId disables the built-in scroll-spy so your own logic owns the highlight.
OutlineDeepNesting
Heading levels 1 through 4 map to progressively deeper indentation, so a long document with sub-sections stays scannable.
OutlineDensity
Two density variants control item padding. Use compact for dense sidebars and default for standard documentation layouts. The sliding indicator automatically matches each item height.
OutlineShowcase
A document outline with the active section highlighted by the sliding indicator track.
