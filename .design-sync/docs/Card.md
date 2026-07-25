# Card

Card is a bordered, elevated container for discrete, self-contained items: things you could reorder, remove, or interact with independently. Cards are NOT the default layout tool. Most content groups don't need a container at all; spacing and alignment create visual grouping naturally. Only reach for a Card when items need clear interaction boundaries or visual comparison in a grid.

**Import:** `import {Card} from '@astryxdesign/core/Card';`

## Anatomy

| Element   | Required | Description                                                                         |
| --------- | -------- | ----------------------------------------------------------------------------------- |
| Container | Yes      | The outer box with border, background, border-radius, and padding.                  |
| Content   | Yes      | Any children rendered inside the card. Often a stack of heading, text, and actions. |

## Best Practices

- **Do:** Ask "could I reorder or remove this independently?" If yes, it's a card. If no, it's just a section of the page: use a heading + Stack or Section.
- **Do:** Use cards for discrete items: a single user profile, a single notification, a single metric, a product in a grid. Each card represents one "thing" with clear interaction boundaries.
- **Do:** Spacing and alignment alone create visual grouping. Not everything needs a container; try removing the card and see if the grouping is still clear from whitespace and typography.
- **Do:** Keep padding consistent across sibling cards so they align visually in a grid or list.
- **Do:** Pair a card with Layout when you need a structured header, scrollable content, and footer with actions.
- **Don't:** Default to cards for visual grouping. A heading + Stack with proper spacing creates hierarchy without adding borders everywhere. Cards should be the exception, not the default.
- **Don't:** Wrap page sections in cards. "General Settings", "Notification Preferences", form groups: these are page regions, use Section or heading + stack.
- **Don't:** Create identical card grids (icon + heading + text, repeated). Vary the layout or question whether cards are needed at all.
- **Don't:** Nest cards inside other cards; flatten the hierarchy or use spacing and dividers instead.
- **Don't:** Use color variants for status; use Banner or Badge for that. Color cards are for categorization.

## Props

| Prop        | Type        | Default | Description                                                |
| ----------- | ----------- | ------- | ---------------------------------------------------------- |
| `width`     | `SizeValue` | —       | Width of the card (number = pixels, string = used as-is).  |
| `height`    | `SizeValue` | —       | Height of the card (number = pixels, string = used as-is). |
| `maxWidth`  | `SizeValue` | —       | Maximum width of the card.                                 |
| `minHeight` | `SizeValue` | —       | Minimum height of the card.                                |
| `children`  | `ReactNode` | —       | Content to render inside the card.                         |
| `padding`   | `0          | 0.5     | 1                                                          | 1.5    | 2      | 3       | 4        | 5      | 6        | 8     | 10`    | `4`       | Internal padding using the spacing scale. |
| `variant`   | `'default'  | 'muted' | 'blue'                                                     | 'cyan' | 'gray' | 'green' | 'orange' | 'pink' | 'purple' | 'red' | 'teal' | 'yellow'` | `'default'`                               | Background color variant. `default` uses the standard card background. `muted` uses the muted background for de-emphasised cards. The non-semantic variants use the corresponding `--color-<name>-background` token. |

## Theming

| Component class | Preferred data attributes | Props                                                                            | States |
| --------------- | ------------------------- | -------------------------------------------------------------------------------- | ------ |
| `astryx-card`   | `data-variant`            | default, muted, blue, cyan, gray, green, orange, pink, purple, red, teal, yellow | —      |

Override in defineTheme:

```ts
components: {
  'card': {
    base: { /* CSS properties */ },
    'variant:value': { /* variant-specific */ },
  },
}
```

Some properties are set via standard CSS in component overrides:

```ts
components: {
  card: {
    base: {
      borderRadius: '...',
      padding: '...',  // expands to container layout tokens
    },
  },
}
```

Related block templates:

BlockquoteTestimonials
Multiple quotes arranged in a card grid for a testimonials section. Combine with Card and Grid to create social-proof layouts.
CardCallout
Muted-variant cards for tips, notes, or supplementary information. Use when content should be visually distinct but not prominent. The muted variant uses a wash background instead of the elevated default, making it feel recessed rather than raised. Works well in sidebars, help panels, or inline callouts.
CardShowcase
A card with a heading and body text showing the default container style.
CardVariants
Default, muted, and color variants side by side. Use color variants to categorize cards visually, like team colors, project tags, or content types. Each color uses the corresponding background token from the theme, so they adapt to light and dark mode automatically.
CardWithInnerLayout
A card with a structured header, content area, and footer with action buttons. Use for forms, dialogs, or settings panels that need clear sections. Pair Card with Layout to get automatic dividers between header, content, and footer. The footer aligns actions to the right by default.
CardWithSimpleContent
A card with a heading and body text. Use for summaries, descriptions, or any grouped content that needs visual separation from the page. The card handles its own border, background, and padding; just pass your content as children. Set a width to constrain it, or leave it to fill the parent.
CarouselCards
A horizontally scrollable row of cards with snap scrolling enabled. Use for feature grids, product lists, or any set of cards that overflows the available width. The carousel adds fade edges and navigation buttons automatically.
CarouselShowcase
A horizontal carousel of cards with scroll-snap and navigation buttons. Scroll or click the arrows to browse.
CarouselSnap
Scroll-snap carousel with navigation buttons and team member cards. Each card snaps to the start edge on scroll. Use when items should be viewed one at a time rather than as a continuous strip.
CenterHorizontal
An editor toolbar with a document title on the left and formatting actions on the right. This shows axis="horizontal", centering in one direction only. Use when content needs to be horizontally centered while other elements are positioned independently around it.
CenterInsideACard
An empty state with an icon, heading, and description centered both vertically and horizontally inside a card. This is the most common use of Center: placing content in the middle of a fixed-height area like a panel, card, or content region. The height prop defines the centering space.
CollapsibleControlledAccordion
Manage the open section from parent state. Use when the open state needs to sync with a URL param, form, or external control.
CollapsibleHookUsage
Custom disclosure UI built directly with useCollapsible for headless open/close state.
CollapsibleMultipleAccordion
Several sections open at once. Use when users need to compare content across sections, like feature lists or pricing tiers.
CollapsibleShowcase
An accordion group with three collapsible sections in single mode: opening one closes the others.
DialogFullscreenDialog
Takes over the entire viewport for content that needs maximum space. Use for documentation viewers, rich text editors, multi-step wizards, or media previews where the standard dialog width is too narrow.
DividerFullBleed
Divider that extends past container padding to span the full width. Use inside cards or panels when you want a clean edge-to-edge separation, like between an order summary and total.
DividerVariants
Subtle, labeled, and strong dividers in a single card. Use subtle between related sections, labeled for alternatives like "or", and strong for high-contrast boundaries.
DividerVertical
Vertical dividers separating side-by-side metrics. Use between stat cards, toolbar groups, or any horizontal layout where you need a visual boundary between sections.
EmptyStateContainer
Empty state wrapped in a Card for first-time setup or onboarding. Use when the user has not created any items yet, like a project list, team roster, or dashboard widget that will fill with data once they take action.
GridDashboardLayout
Dashboard layout with mixed-size widgets and a full-width summary row
GridGalleryExample
Card gallery with responsive columns that maintain consistent widths
GridResponsiveAutoFit
Responsive grid where cards stretch to fill remaining space
GridShowcase
GridWithGridSpan
Grid with featured items spanning multiple columns and rows
GridSpanColumns
Grid items spanning two of three columns. Wrap a grid child in GridSpan to make it occupy multiple columns for asymmetric layouts.
useKeyboardHintHookUsage
Toolbar shows an ephemeral "← → to navigate" hint on first keyboard focus via useKeyboardHint, teaching sighted keyboard users that arrows move within the group.
useStreamingTextHookUsage
Smooth bursty generated text into a steady reveal with useStreamingText.
KbdMenuShortcuts
Menu-style list pairing action labels with their keyboard shortcuts
LayerHookUsage
Low-level anchored overlay rendered with useLayer and a custom surface.
LayoutBasicCardLayout
A card layout with header, scrollable content area, and footer with action buttons.
LayoutContentOnlyLayout
A minimal layout with just a content area inside a card, without header or footer.
LayoutDualPanelLayout
A file browser style layout with start panel for folders, main content for files, and end panel for details.
LayoutFullBleedContent
A layout where content extends edge-to-edge with zero padding, ideal for tables or images.
LayoutSidebarLayout
A settings page layout with a navigation sidebar panel, content area, header, and footer.
LayoutContentBasic
A scrollable main content area below a fixed header. Use LayoutContent inside Layout to get automatic padding and scroll containment for the primary content.
LayoutFooterActions
A fixed footer with end-aligned action buttons below scrollable content. Use LayoutFooter inside Layout for persistent actions like Save and Cancel.
LayoutHeaderWithActions
A fixed page header with a title and a primary action, above scrollable content. Use LayoutHeader inside Layout for persistent page-level headers.
LayoutPanelNavigation
A fixed-width side panel holding a navigation list next to the main content. Use LayoutPanel in the start or end slot of Layout for sidebars.
OverflowListCollapseFromStartList
Overflow list that hides items from the start, keeping the latest visible
OverflowListOverflowBadges
Resizable row of badges that collapses into a count badge on overflow
OverflowListOverflowDropdownActions
Action toolbar that collapses overflow buttons into a dropdown menu
PaginationDotsCarousel
A review carousel using dot pagination to step through testimonial cards. Use the dots variant for carousels, galleries, and any paged content where the total is small and visible position matters more than a page number.
ResizableShowcase
Horizontal resizable split with a draggable handle between two panels.
ResizableSidebar
A collapsible sidebar with snap points, driven by useResizable. Dragging snaps to preset widths, dragging past the minimum collapses the panel, and the expand method restores it programmatically.
SkeletonCardSkeleton
Card skeleton with avatar, name, and content lines.
StackAlignment
Buttons positioned at the start, center, and end of a row.
StackItemFill
A static-width item next to one that fills the remaining space. Wrap stack children in StackItem when an item needs explicit sizing control.
SwitchSettingsPanel
Settings panel with spread-spaced switches in a card.
TableInCard
Table composed inside a card with a heading, demonstrating container bleed alignment.
TableShowcase
Data-driven table with proportional and pixel column widths and hover highlighting.
ThemeApply
Wrap a subtree in Theme to apply a theme to every child component in that region.
ThemeNested
Nested Theme providers let a local region use a different theme without affecting the rest of the page.
ThemeShowcase
Two visually distinct theme providers wrapping identical content to show how Theme changes the visual treatment of child components.
ThemeSwitcher
Use state to switch the theme object passed to Theme and preview a different visual treatment.
useThemeHookUsage
Read resolved theme token values with useTheme for non-CSS consumers like SVG charts.
ToolbarCardHeader
A toolbar as a card header with a left-aligned title and icon actions on the right. Use Toolbar instead of LayoutHeader when your card header has interactive actions; Toolbar adds start/end slot layout, keyboard navigation, and automatic size cascading. If the header is just a title with no actions, a LayoutHeader or Section is enough.
ToolbarSizes
Small, medium, and large toolbars side by side. The size prop cascades to child buttons and inputs automatically. Use small in dense UIs like cards, medium for most cases, and large for spacious layouts.
ToolbarThreeSlot
A toolbar with start, center, and end content using the three-column grid layout. Use when you need a centered title or heading with navigation and actions on either side.
ToolbarWithTabs
A toolbar with tabs in the start slot and an action button at the end. Use as a card or section header when content is split into tabs with a primary action alongside.
