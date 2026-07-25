# MediaTheme

Provides token overrides for content rendered on inverted surfaces: media overlays, scrims, toasts, and tooltips. The base behavior flips color-scheme so all light-dark() tokens resolve to the correct side. Only a small set of tokens need explicit overrides beyond that. Themes can further customize component appearance on media surfaces via onDark/onLight in defineTheme(), with both token overrides (e.g. "--color-accent": "#90CAF9") and component overrides (e.g. ghost buttons get a border on dark surfaces).

**Import:** `import {MediaTheme} from '@astryxdesign/core/theme';`

## Best Practices

- **Do:** Use for any content placed over a dark background (image overlays, video scrims, dark cards) or other inverted surfaces like toasts and tooltips.
- **Do:** Pair with a background color: MediaTheme flips the token context but does not add a background. Set backgroundColor on the parent element.
- **Do:** Themes can customize components on media surfaces via onDark.components and onLight.components in defineTheme(). For example, add a border to ghost buttons on dark surfaces.
- **Don't:** Use MediaTheme for app-level dark mode: use Theme with mode="dark" or mode="system" instead. MediaTheme is for local surface inversions, not page-wide color scheme.

## Props

| Prop       | Type        | Default  | Description                                                                                                        |
| ---------- | ----------- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| `mode`     | `'dark'     | 'light'` | —                                                                                                                  | Surface luminance context: dark for content over dark backgrounds (light text, white-tinted interactions), light for content over light backgrounds (dark text, black-tinted interactions). **(required)** |
| `children` | `ReactNode` | —        | Content to render with inverted token context. Components inherit the correct colors automatically. **(required)** |

Related block templates:

MediaThemeImageOverlay
A common image card pattern: place text and actions over a dark gradient and wrap the overlay content in MediaTheme mode="dark".
MediaThemeLightScrim
A light scrim over an image. Use MediaTheme mode="light" so text and ghost buttons use dark-on-light tokens.
MediaThemeShowcase
A compact media overlay showing MediaTheme adapting text, icons, badges, and button variants over an image-backed dark surface.
