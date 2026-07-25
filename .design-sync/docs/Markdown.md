# Markdown

Renders a markdown string as Astryx-styled components. Use Markdown for user-generated content, AI responses, and documentation; it handles headings, lists, tables, code blocks, and citations with consistent styling.

**Import:** `import {Markdown} from '@astryxdesign/core/Markdown';`

## Best Practices

- **Do:** Set headingLevelStart to match the page hierarchy, e.g. start at 3 if the markdown sits inside an h2 section.
- **Do:** Use contentWidth to keep prose at a readable line length in wide layouts.
- **Do:** Use inlinePlugins for custom shorthand patterns like issue refs, diff refs, and mentions instead of preprocessing the markdown string.
- **Don't:** Use Markdown for hand-authored layouts; use Text and Heading directly when you control the content.

## Props

| Prop                | Type                                       | Default    | Description                                                                                                                                                                                                                                                                                                                                                                                                          |
| ------------------- | ------------------------------------------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`          | `string`                                   | —          | The markdown string to render. **(required)**                                                                                                                                                                                                                                                                                                                                                                        |
| `display`           | `'block'                                   | 'inline'`  | `'block'`                                                                                                                                                                                                                                                                                                                                                                                                            | Display type. Markdown defaults to block. Use 'inline' for markdown spans embedded inside text.                                                                                                             |
| `density`           | `'default'                                 | 'compact'` | `'default'`                                                                                                                                                                                                                                                                                                                                                                                                          | Controls spacing between block-level elements.                                                                                                                                                              |
| `headingLevelStart` | `1                                         | 2          | 3                                                                                                                                                                                                                                                                                                                                                                                                                    | 4                                                                                                                                                                                                           | 5   | 6`  | `1` | The HTML heading level that markdown # maps to. Shifts all heading levels down to fit the surrounding page hierarchy. Levels exceeding h6 are clamped to h6. |
| `isStreaming`       | `boolean`                                  | `false`    | Enables streaming mode; it uses incremental parsing and a smooth fade-in animation for chunk-by-chunk text delivery.                                                                                                                                                                                                                                                                                                 |
| `onLinkClick`       | `(href: string, event: MouseEvent) => void | false`     | —                                                                                                                                                                                                                                                                                                                                                                                                                    | Handler for link clicks. Return false to prevent the default navigation behavior.                                                                                                                           |
| `sources`           | `Record<string, MarkdownSource>`           | —          | Citation sources keyed by ID. When provided, [id] and 【id】 markers in the markdown that match a key are rendered as citation chips.                                                                                                                                                                                                                                                                                |
| `citationStyle`     | `'label'                                   | 'number'`  | `'label'`                                                                                                                                                                                                                                                                                                                                                                                                            | How citations are displayed inline. 'label' shows a chip with source title, icon, and border. 'number' shows a compact numbered badge.                                                                      |
| `contentWidth`      | `number                                    | string`    | `680`                                                                                                                                                                                                                                                                                                                                                                                                                | Max width for prose content (paragraphs, headings, lists, blockquotes). Tables and code blocks are unconstrained and can expand to the full container width. Use for readable line lengths in wide layouts. |
| `contentAlign`      | `'start'                                   | 'center'`  | `'start'`                                                                                                                                                                                                                                                                                                                                                                                                            | Alignment of prose content within the container when contentWidth is narrower than the available space.                                                                                                     |
| `inlinePlugins`     | `MarkdownInlinePlugin[]`                   | —          | Transforms regex matches in parsed text nodes into custom inline React elements. Use for issue refs, diff refs, mentions, and other shorthand patterns. Inline code and fenced code blocks are unaffected.                                                                                                                                                                                                           |
| `autolink`          | `'gfm'`                                    | —          | Opt-in autolinking of bare URLs and emails. 'gfm' applies GitHub-Flavored Markdown autolink-literal rules: bare https?://..., www...., <scheme:url>, <email>, and user@host all become links. Trailing sentence punctuation and unbalanced trailing close-parens are excluded; matches inside code spans, code blocks, existing links, and image alt text are skipped. Default behavior (option unset) is unchanged. |
| `xstyle`            | `StyleXStyles`                             | —          | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value, not an inline style object like style={{}}.                                                                                                                                                                                                                                                                  |
| `className`         | `string`                                   | —          | CSS class name for the root element. Prefer xstyle for styling; className is provided for integration with non-StyleX systems.                                                                                                                                                                                                                                                                                       |
| `style`             | `CSSProperties`                            | —          | Inline styles for the root element. Prefer xstyle for styling; inline styles bypass StyleX optimization.                                                                                                                                                                                                                                                                                                             |
| `data-testid`       | `string`                                   | —          | Test selector for automated testing frameworks.                                                                                                                                                                                                                                                                                                                                                                      |

## Examples

### Inline display

```tsx
import {Text} from '@astryxdesign/core/Text';

<Text>
  This description includes{' '}
  <Markdown display="inline">{'`inline code` and **bold text**'}</Markdown>.
</Text>;
```

### GFM autolinks

```tsx
<Markdown autolink="gfm">
  {'Visit https://example.com or email contact@example.com. ' +
    'You can also bracket links: <https://docs.example.com>.'}
</Markdown>
```

### Inline Plugins

```tsx
import {Link} from '@astryxdesign/core/Link';

const issuePlugins = [
  {
    pattern: /\b([A-Z][A-Z0-9]+-\d+)\b/g,
    render: (match, key) => (
      <Link key={key} href={`/issues/${match[1]}`}>
        {match[0]}
      </Link>
    ),
  },
];

<Markdown inlinePlugins={issuePlugins}>
  {'Fixed PROJ-123. Inline code stays plain: `PROJ-999`.'}
</Markdown>;
```

## Theming

| Component class   | Preferred data attributes | Props   | States |
| ----------------- | ------------------------- | ------- | ------ |
| `astryx-markdown` | `data-density`            | density | —      |

Override in defineTheme:

```ts
components: {
  'markdown': {
    base: { /* CSS properties */ },
    'density:value': { /* variant-specific */ },
  },
}
```

Related block templates:

ChatLayoutPanelChat
Narrow sidebar chat in a constrained container that triggers compact density. Use for side panels, drawers, or embedded chat widgets where horizontal space is limited.
ChatMessageListFullFeatured
Conversation showcasing system messages, multi-bubble grouping, markdown, code blocks, and metadata. Combines date dividers, ghost bubbles, grouped messages, and rich content in a single example.
MarkdownCitedContent
Markdown with citation chips linked to external sources
MarkdownCompactAIResponse
Compact markdown styled for AI responses with shifted heading levels
MarkdownDataTable
Comparison table rendered from a markdown string
MarkdownRichContent
Markdown with headings, lists, code blocks, tables, blockquotes, and task lists
MarkdownShowcase
Rich markdown content with headings, lists, and formatting.
