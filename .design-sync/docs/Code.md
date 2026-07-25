# Code

Inline code element. Renders a styled <code> with monospace font and muted background. For fenced blocks, use CodeBlock.

**Import:** `import {Code} from '@astryxdesign/core/Code';`

## Props

| Prop          | Type            | Default | Description                                                              |
| ------------- | --------------- | ------- | ------------------------------------------------------------------------ |
| `children`    | `ReactNode`     | —       | Code content. **(required)**                                             |
| `xstyle`      | `StyleXStyles`  | —       | StyleX styles for layout customization. Must be a stylex.create() value. |
| `className`   | `string`        | —       | CSS class name for the root element. Prefer xstyle for styling.          |
| `style`       | `CSSProperties` | —       | Inline styles. Prefer xstyle for StyleX-optimized styling.               |
| `data-testid` | `string`        | —       | Test selector for automated testing frameworks.                          |

Related block templates:

CodeAcrossTextSizes
Inline code rendered inside heading, body, supporting, and label text. Code automatically matches the font size of its parent text element.
CodeInlineInParagraph
Inline code references mixed within a paragraph of body text. Use Code to mark up function names, hooks, or API terms so they stand out from surrounding prose.
CodeShowcase
Inline code snippets inside a sentence showing how Code renders alongside body text.
CodeVariousContent
Inline code used for variables, terminal commands, CSS properties, file paths, and keyboard shortcuts. Shows how Code adapts to different kinds of technical content.
