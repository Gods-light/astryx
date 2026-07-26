# Building with Astryx

Astryx is a React + StyleX design system. Components are on `window.Astryx.*` from
`_ds_bundle.js`. **Use a library component for anything it covers before reaching for raw
HTML** — there are 98 of them, including layout (`Stack`, `Grid`, `Layout`, `Section`), forms
(`Field`, `TextInput`, `Selector`, `CheckboxInput`), and data (`Table`, `List`, `Item`).

## Wrapping — required, or everything is unstyled

Every tree must be wrapped in `<Theme>`; that is what injects the theme's CSS custom
properties. Nest `<LayerProvider>` inside it — it supplies the layer/portal context that
`Dialog`, `Popover`, `Tooltip`, `ContextMenu` and `Toast` need, and it renders the toast
viewport for you.

```jsx
const {Theme, LayerProvider, Stack, Card, Text, Button} = window.Astryx;

<Theme mode="light">
  <LayerProvider>
    <YourApp />
  </LayerProvider>
</Theme>;
```

Without `<Theme>` the token variables are undefined and filled components render
transparent — a primary button becomes white-on-white, i.e. invisible. If you ever see that,
you dropped the wrapper.

## Styling idiom — `xstyle`, never inline styles

Almost every component takes an **`xstyle`** prop (93 of 98). It accepts **StyleX styles from
`stylex.create()`** — not inline objects, not class strings. For your own layout glue around
components, plain `className` (Tailwind or your own CSS) is fine.

The 5 without `xstyle`, and what to use instead: **`Icon`** (style via its own `size`/`color`
props), **`Theme`** and **`MediaTheme`** (providers — they wrap, they don't paint),
**`Toast`** (fired imperatively via `useToast()`), **`Tooltip`** (wraps a trigger; style the
trigger). Check the component's `.d.ts` before reaching for `xstyle`.

```jsx
const s = stylex.create({
  save: {alignSelf: 'flex-end'},
  panel: {maxWidth: 480, marginBlock: 16},
});
<Card xstyle={s.panel}>
  <Button label="Save" xstyle={s.save} />
</Card>;
```

Rules that matter:

- **Semantic tokens only — never hardcode a colour, spacing or radius.** Use the CSS vars:
  `var(--color-accent)`, `var(--color-on-accent)`, `var(--color-text-primary)`,
  `var(--color-background-body)`, `var(--color-background-surface)`, `var(--spacing-4)`,
  `var(--radius-element)`, `var(--radius-container)`, `var(--shadow-low)`,
  `var(--font-family-body)`, `var(--font-family-code)`, `var(--size-element-md)`.
  Hardcoded values break theming and dark mode.
- `:hover` styles must be guarded with `@media (hover: hover)`.
- Navigation uses **`useLinkComponent()`**, never a hardcoded `<a>` (consumers swap routers
  via `LinkProvider`).
- Form inputs are **controlled**.
- Prefer rows (`Table`, `List`/`Item`) for dense data; `Card` is for widgets, galleries and
  settings groups — don't wrap list rows in Cards.
- Don't use `Badge` decoratively; `StatusDot` / `Token` carry status.

## Where the truth is

Read `_ds/<folder>/styles.css` and the files it `@import`s for the real token values, and the
per-component `<Name>.prompt.md` / `<Name>.d.ts` for the actual props before inventing any.
Those docs are generated from the components' own source.

## A typical screen

```jsx
const {Theme, LayerProvider, Stack, Card, Text, Button, Field, TextInput} =
  window.Astryx;

<Theme mode="light">
  <LayerProvider>
    <Stack gap={4}>
      <Text type="large">Account settings</Text>
      <Card>
        <Stack gap={3}>
          <Field label="Display name">
            <TextInput value={name} onChange={setName} />
          </Field>
          <Button label="Save changes" variant="primary" />
        </Stack>
      </Card>
    </Stack>
  </LayerProvider>
</Theme>;
```
