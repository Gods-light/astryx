# Heading

Semantic heading component that renders h1-h6 elements with themed styling, themed sizing via type scale tokens, and line-clamp truncation.

**Import:** `import {Heading} from '@astryxdesign/core/Heading';`

## Props

| Prop                 | Type          | Default      | Description                                                                                                         |
| -------------------- | ------------- | ------------ | ------------------------------------------------------------------------------------------------------------------- |
| `level`              | `1            | 2            | 3                                                                                                                   | 4                                                                                                                | 5                                                                                                                                                                                                                                                                       | 6`                      | —                                                                                                                                               | Heading level. Determines the semantic HTML element (h1-h6) and the visual styling from the theme (unless `type` is set). **(required)**       |
| `type`               | `'display-1'  | 'display-2'  | 'display-3'`                                                                                                        | —                                                                                                                | Display type variant. Overrides the visual styling from `level` with display-scale sizing (larger, lighter weight, tighter line-height). The `level` still determines the HTML element for accessibility. Use for hero banners, marketing headlines, and data callouts. |
| `children`           | `ReactNode`   | —            | Heading content. **(required)**                                                                                     |
| `accessibilityLevel` | `1            | 2            | 3                                                                                                                   | 4                                                                                                                | 5                                                                                                                                                                                                                                                                       | 6`                      | —                                                                                                                                               | Accessibility level override. When set and different from `level`, applies `aria-level` so the document outline differs from the visual style. |
| `color`              | `'primary'    | 'secondary'  | 'disabled'                                                                                                          | 'placeholder'                                                                                                    | 'accent'                                                                                                                                                                                                                                                                | 'inherit'`              | `'primary'`                                                                                                                                     | Text color.                                                                                                                                    |
| `display`            | `'inline'     | 'block'`     | `'block'`                                                                                                           | Display type. Silently overridden to 'block' when maxLines > 0 or hasCapsize is true.                            |
| `maxLines`           | `number`      | `0`          | Maximum lines before truncation. 0 means no truncation. When set, shows a tooltip on hover if content is truncated. |
| `hasTruncateTooltip` | `boolean      | 'above'      | 'below'                                                                                                             | 'start'                                                                                                          | 'end'`                                                                                                                                                                                                                                                                  | `true`                  | Controls tooltip behavior for truncated text. true shows the tooltip at the default position, false disables it, or a placement string ('above' | 'below'                                                                                                                                        | 'start' | 'end') sets a specific position. |
| `wordBreak`          | `'break-word' | 'break-all'` | —                                                                                                                   | Word break behavior when truncating. Defaults to 'break-all' for single-line truncation, 'break-word' otherwise. |
| `textWrap`           | `'wrap'       | 'nowrap'     | 'balance'                                                                                                           | 'pretty'`                                                                                                        | —                                                                                                                                                                                                                                                                       | Text wrapping behavior. |
| `justify`            | `'start'      | 'center'     | 'end'`                                                                                                              | `'start'`                                                                                                        | Text alignment (justification). Uses logical values (start/end) for i18n/RTL compatibility.                                                                                                                                                                             |
| `hasCapsize`         | `boolean`     | `false`      | Enable optical alignment using text-box-trim. Forces block display.                                                 |
| `hasStrikethrough`   | `boolean`     | `false`      | Apply strikethrough text decoration.                                                                                |
| `id`                 | `string`      | —            | HTML id attribute.                                                                                                  |

Related block templates:

AppShellContentOnly
Minimal shell with no navigation, useful for full-bleed pages, auth screens, or embedded views.
AppShellShowcase
A basic app shell with content padding.
AppShellSideNavOnly
App shell with SideNav header providing app identity, no TopNav needed.
AppShellTopNavOnly
Simple layout with TopNav and no side navigation, suitable for landing pages.
AppShellTopNavWithSideNav
The most common layout with TopNav for app identity and SideNav for page-level navigation.
AppShellWithBanner
Full layout with TopNav, SideNav, and a dismissable info banner between the nav and content.
HeadingCardGrid
Responsive card grid with truncated headings and descriptions for uniform layout
HeadingPageLayout
Real-world page layout demonstrating heading levels h1 through h3 with supporting text
HeadingTruncation
Single-line and multi-line heading truncation with ellipsis for constrained layouts
LayoutBasicCardLayout
A card layout with header, scrollable content area, and footer with action buttons.
LayoutContentOnlyLayout
A minimal layout with just a content area inside a card, without header or footer.
LayoutContentWidth
A layout using contentWidth to constrain and center content while keeping dividers full-bleed.
LayoutDualPanelLayout
A file browser style layout with start panel for folders, main content for files, and end panel for details.
LayoutFullBleedContent
A layout where content extends edge-to-edge with zero padding, ideal for tables or images.
LayoutSidebarLayout
A settings page layout with a navigation sidebar panel, content area, header, and footer.
LayoutContentBasic
A scrollable main content area below a fixed header. Use LayoutContent inside Layout to get automatic padding and scroll containment for the primary content.
LayoutHeaderWithActions
A fixed page header with a title and a primary action, above scrollable content. Use LayoutHeader inside Layout for persistent page-level headers.
VStackBasic
A heading and paragraphs stacked vertically with a consistent gap. Use VStack whenever siblings should flow top to bottom with even spacing.
