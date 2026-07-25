# Citation

Citations display inline references to external sources. Use them to attribute information within AI-generated responses, articles, or anywhere provenance and source links are needed.

**Import:** `import {Citation} from '@astryxdesign/core/Citation';`

## Anatomy

| Element    | Required | Description                                                                                              |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------- |
| Container  | Yes      | The interactive wrapper. Renders as an anchor when a URL is provided, or a span otherwise.               |
| Icon       | No       | An optional favicon or source icon displayed before the label text. Only available in the label variant. |
| Label text | No       | The source title, truncated with ellipsis when it exceeds the max width. Shown in the label variant.     |
| Number     | No       | The citation index displayed as a superscript badge. Shown in the number variant.                        |

## Best Practices

- **Do:** Use the label variant when the source title adds meaningful context for the reader.
- **Do:** Use the number variant for compact inline references within body text, like footnotes.
- **Don't:** Mix label and number variants in the same paragraph. Pick one style per context for visual consistency.

## Props

| Prop      | Type             | Default   | Description                                                                         |
| --------- | ---------------- | --------- | ----------------------------------------------------------------------------------- |
| `source`  | `CitationSource` | —         | The citation source object containing title, url, and optional icon. **(required)** |
| `number`  | `number`         | —         | The display index for this citation. **(required)**                                 |
| `variant` | `'label'         | 'number'` | `'label'`                                                                           | Display style: a label chip showing the source title or a compact numbered badge. |

## Theming

| Component class   | Preferred data attributes | Props         | States |
| ----------------- | ------------------------- | ------------- | ------ |
| `astryx-citation` | `data-variant`            | label, number | —      |

Override in defineTheme:

```ts
components: {
  'citation': {
    base: { /* CSS properties */ },
    'variant:value': { /* variant-specific */ },
  },
}
```

Related block templates:

CitationInlineText
Citations embedded within a paragraph of text, showing how they flow inline with surrounding content.
CitationShowcase
All citation variants at a glance: label chips and numbered badges, with and without icons and links.
CitationSourceList
A list of citation sources with icons, as you might show at the end of an AI-generated response or article footer.
