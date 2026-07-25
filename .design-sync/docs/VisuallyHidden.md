# VisuallyHidden

Renders content in the accessibility tree while hiding it visually. Use for accessible names on icon-only controls, aria-live announcement regions, and supplementary screen-reader context. Deliberately has no styling props; the whole point is to stay invisible.

**Import:** `import {VisuallyHidden} from '@astryxdesign/core/VisuallyHidden';`

## Best Practices

- **Do:** Use to give icon-only buttons and controls an accessible name that screen readers announce.
- **Do:** Render as a block element (as="div") with aria-live to announce dynamic updates like drag-and-drop or result counts.
- **Don't:** Use it to hide content from everyone; it stays in the accessibility tree; use conditional rendering or `hidden` to remove content entirely.
- **Don't:** Put interactive controls inside it; the content is not visible and cannot receive pointer input.

## Props

| Prop       | Type          | Default  | Description                                                      |
| ---------- | ------------- | -------- | ---------------------------------------------------------------- |
| `children` | `ReactNode`   | —        | Content exposed to assistive technology while hidden from sight. |
| `as`       | `ElementType` | `'span'` | HTML tag to render as. Use a block element for live regions.     |
