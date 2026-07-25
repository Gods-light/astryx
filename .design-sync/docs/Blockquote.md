# Blockquote

A styled quotation block with an accent-colored left border and secondary text color. Use to highlight quoted content, testimonials, or excerpts.

**Import:** `import {Blockquote} from '@astryxdesign/core/Blockquote';`

## Best Practices

- **Do:** Use for quoted text, testimonials, or highlighted excerpts from external sources.
- **Do:** Provide a cite prop when the source of the quote is known.
- **Don't:** Use for callout boxes or informational notes; use Banner for those.

## Props

| Prop       | Type           | Default | Description                                                                                                                                         |
| ---------- | -------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` | `ReactNode`    | —       | Content of the blockquote. **(required)**                                                                                                           |
| `cite`     | `ReactNode`    | —       | Optional attribution for the quote. Rendered in a <footer> with <cite>.                                                                             |
| `xstyle`   | `StyleXStyles` | —       | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value, not an inline style object like style={{}}. |

## Theming

| Component class     | Preferred data attributes | Props | States |
| ------------------- | ------------------------- | ----- | ------ |
| `astryx-blockquote` | —                         | —     | —      |

Override in defineTheme:

```ts
components: {
  'blockquote': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

BlockquoteShowcase
Blockquote with and without citation. A quick visual reference for the blockquote component.
BlockquoteTestimonials
Multiple quotes arranged in a card grid for a testimonials section. Combine with Card and Grid to create social-proof layouts.
BlockquoteWithCite
A plain quote and a quote with a cite attribution. Use cite to credit the original author or source.
