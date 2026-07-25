# Icon

Icons are small visual symbols that represent actions, objects, or concepts. They improve scannability and reinforce meaning alongside text. Supports both direct SVG components and semantic icon names that adapt to the active theme.

**Import:** `import {Icon} from '@astryxdesign/core/Icon';`

## Best Practices

- **Do:** Use semantic icon names when available; they adapt to theme changes automatically.
- **Do:** Pair icons with text labels for accessibility; icon-only elements need an accessible label.
- **Do:** Use color tokens for icon colors, not hardcoded hex values.
- **Do:** Be mindful of context; decorative icons in compact components can distract rather than help.
- **Don't:** Use icons as the sole means of conveying meaning; always provide a text alternative.
- **Don't:** Resize icons with arbitrary pixel values; use the provided size props.
- **Don't:** Mix icon styles (e.g. outline and filled) within the same context.
- **Don't:** Render raw SVG elements; always wrap in Icon for consistent sizing and color.
- **Don't:** Pass a `name` prop; Icon uses `icon` (not `name`) to specify which icon to render.

## Props

| Prop    | Type       | Default                  | Description |
| ------- | ---------- | ------------------------ | ----------- |
| `icon`  | `IconName  | ComponentType<SVGProps>` | —           | Semantic icon name or SVG component. Valid semantic names: close, chevronDown, chevronLeft, chevronRight, check, success, error, warning, info, calendar, clock, externalLink, menu, moreHorizontal, search, arrowUp, arrowDown, arrowsUpDown, funnel, eyeSlash, viewColumns, copy, checkDouble, wrench, stop, microphone. For any icon not in this list, pass an SVG component directly (e.g. import from lucide-react or @heroicons/react). Note: this prop is called `icon`, not `name`. **(required)** |
| `color` | `'primary' | 'secondary'              | 'tertiary'  | 'disabled'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 'accent' | 'success'  | 'error' | 'warning' | 'inherit'` | `'inherit'` | Color variant mapped to Astryx icon color tokens. |
| `size`  | `'xsm'     | 'sm'                     | 'md'        | 'lg'`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | `'md'`   | Icon size. |

## Theming

| Component class | Preferred data attributes | Props       | States |
| --------------- | ------------------------- | ----------- | ------ |
| `astryx-icon`   | `data-color`, `data-size` | color, size | —      |

Override in defineTheme:

```ts
components: {
  'icon': {
    base: { /* CSS properties */ },
    'color:value': { /* variant-specific */ },
  },
}
```

Related block templates:

BaseTypeaheadCustomSearch
BaseTypeahead embedded inside a custom-styled wrapper. The wrapper provides its own border and icon chrome; anchorRef positions the dropdown relative to it. Use this pattern when Typeahead's built-in field layout does not fit your composition.
BreadcrumbsDeepHierarchy
A 5-level breadcrumb trail for deeply nested content. Use in e-commerce, file browsers, or any UI with several levels of hierarchy.
BreadcrumbsWithIcons
Add icons before breadcrumb labels for quick recognition. Use a home icon on the root item and contextual icons on key sections.
ButtonWithIcon
Buttons with a leading icon that reinforces the label. Use when the icon helps the user identify the action faster, like a plus for "New" or a trash can for "Delete".
ButtonGroupShowcase
CenterHorizontal
An editor toolbar with a document title on the left and formatting actions on the right. This shows axis="horizontal", centering in one direction only. Use when content needs to be horizontally centered while other elements are positioned independently around it.
CenterInsideACard
An empty state with an icon, heading, and description centered both vertically and horizontally inside a card. This is the most common use of Center: placing content in the middle of a fixed-height area like a panel, card, or content region. The height prop defines the centering space.
ChatComposerFooterActions
Chat composer with dropdown menus for a model selector and settings in the footer, and a mic button in the send actions slot.
ChatComposerFullFeatured
Chat composer with all slots populated: collapsible attachment drawer, header actions, context progress bar, footer dropdown menus, and mic button. Shows the maximum composer configuration.
ChatComposerDrawerShowcase
Composer drawer with file tokens, a collapsible toggle, and header actions. Use as a starting point for any chat composer with attachments.
ChatComposerDrawerWithProgress
Drawer paired with a context progress bar in the header. Show context window usage when attachments consume part of the available token budget.
ChatMessageBubbleMetadata
Bubbles with name and metadata slots aligned to bubble padding. Put name on the first bubble and metadata on the last bubble in a message.
ChatMessageMetadataFooter
Assistant message with footer actions: copy, retry, thumbs up/down, and model label. Use for AI responses that need feedback or utility controls.
ChatMessageMetadataShowcase
Three-message conversation showcasing error status with retry, delivery status, and full footer actions with model label.
ChatSendButtonCustomIcon
Send buttons with custom icons via sendIcon and stopIcon props. Use to match the personality of the chat experience: a paper airplane for messaging, sparkles for AI generation, or a check mark for confirmation flows.
ChatSendButtonShowcase
Ready, custom icon, and streaming states of the send button.
ChatSystemMessageStatusUpdates
Realistic status messages in a conversation flow showing membership changes, timestamps, and resolution notices.
ChatSystemMessageWithIcon
System messages with a leading icon that reinforces the message type. Use icons to help users scan and identify message categories at a glance.
CommandPalettePickerMode
Single-value picker with persistent selection and check indicator.
CommandPaletteItemShowcase
Command palette items with custom content via renderItem and as composed CommandPaletteItem with icons, highlighted, selected, and disabled states.
DropdownMenuNoChevron
Overflow menu triggered by an icon-only button with no chevron or label text. Use for row-level actions in tables, cards, or lists where a text button would take too much space.
EmptyStateActions
Full empty state with icon, message, and action buttons. Use when a search returns no results, a filter clears all items, or a list has been emptied. The buttons give the user a way forward: go back, clear filters, or try a different query.
EmptyStateCompact
Smaller empty state with reduced spacing for constrained areas. Use inside sidebar panels, card widgets, or notification drawers where a full-size empty state would overwhelm the layout.
EmptyStateContainer
Empty state wrapped in a Card for first-time setup or onboarding. Use when the user has not created any items yet, like a project list, team roster, or dashboard widget that will fill with data once they take action.
EmptyStateShowcase
A no-results empty state with an icon, descriptive message, and a call-to-action button.
useKeyboardHintHookUsage
Toolbar shows an ephemeral "← → to navigate" hint on first keyboard focus via useKeyboardHint, teaching sighted keyboard users that arrows move within the group.
HoverCardInteractiveContent
Shows a page summary when hovering a link: title, description, and URL. Use for documentation links, article references, or any URL where a preview helps the user decide whether to click.
IconNonSemanticColors
Non-semantic color palette for icons.
IconSemanticColors
All semantic icon color variants with labels.
IconShowcase
IconSizes
All icon sizes from extra-small to large.
IconStatusIcons
Status list using semantic icons for success, warning, error, and info.
IconButtonActionBar
Row of ghost icon buttons for a compact action toolbar
IconButtonLoadingToggle
Icon buttons that show a loading spinner on click for async feedback
IconButtonShowcase
An icon button with a wrench icon.
IconButtonTooltipIconButton
Icon buttons with tooltips that explain each action on hover
ItemShowcase
ItemWithMedia
Items with leading avatars and icons in the startContent slot. Keep start content small so the row stays compact and easy to scan.
ItemWithMetadata
Items with end-aligned metadata and badges. Use the endContent slot for counts, status, timestamps, and other secondary row information.
ListItemWithMedia
List items with leading avatars and icons. Use startContent for compact visual identifiers that help users scan the collection.
ListItemWithMetadata
List items with end-aligned metadata. Use endContent for badges, counts, timestamps, and compact status details.
MediaThemeShowcase
A compact media overlay showing MediaTheme adapting text, icons, badges, and button variants over an image-backed dark surface.
MobileNavBasicMobileNav
Mobile navigation drawer with sectioned nav items triggered by a menu button
MobileNavShowcase
MobileNavWithoutTitleMobileNav
Mobile navigation drawer without a title header
MobileNavToggleBasic
A nav toggle with a custom icon and accessible label instead of the default hamburger. It opens a MobileNav drawer via the AppShell mobile context, which AppShell provides automatically.
NavIconBasic
Circular icon containers wrapping semantic icons. Use as logos or accent icons in navigation headers such as TopNavHeading.
NavIconShowcase
Circular icon containers for navigation headers with accent backgrounds.
PaginationDotsCarousel
A review carousel using dot pagination to step through testimonial cards. Use the dots variant for carousels, galleries, and any paged content where the total is small and visible position matters more than a page number.
SectionWashHighlight
A default section stacked with a full-width muted section. Shows how muted draws attention to a specific region like an upgrade prompt or banner.
ToggleButtonColor
Toggle buttons with colored icons in the pressed state. Shows accent-colored toolbar formatting and semantic reaction colors (yellow star, red heart, blue bookmark).
ToggleButtonGroup
Toggle button groups in single-select and multi-select modes. Single selection acts as a view mode switcher; multiple selection forms a formatting toolbar.
ToggleButtonIconSwap
Icon-only toggle buttons that swap between outline and solid icons when pressed. Use for actions like favorite, bookmark, or mute where the icon itself communicates the state.
ToggleButtonLabel
Toggle buttons with visible text labels that show a font weight shift on press. Use when the icon alone is not enough to communicate the action.
ToggleButtonShowcase
ToggleButtonStates
Default, pressed, disabled, and loading states of a standalone toggle button. Shows how visual treatment changes across states.
TokenIcon
Tokens with a leading icon that identifies the entity type. Use when the icon helps users recognize the token category faster, like a user icon for people or a tag icon for labels.
TokenShowcase
ToolbarBulkActions
A compact toolbar with the muted variant for showing bulk selection actions. Use when the user selects multiple items in a list or table and needs quick access to batch operations.
ToolbarCardHeader
A toolbar as a card header with a left-aligned title and icon actions on the right. Use Toolbar instead of LayoutHeader when your card header has interactive actions; Toolbar adds start/end slot layout, keyboard navigation, and automatic size cascading. If the header is just a title with no actions, a LayoutHeader or Section is enough.
ToolbarSizes
Small, medium, and large toolbars side by side. The size prop cascades to child buttons and inputs automatically. Use small in dense UIs like cards, medium for most cases, and large for spacious layouts.
ToolbarThreeSlot
A toolbar with start, center, and end content using the three-column grid layout. Use when you need a centered title or heading with navigation and actions on either side.
ToolbarWithTabs
A toolbar with tabs in the start slot and an action button at the end. Use as a card or section header when content is split into tabs with a primary action alongside.
TopNavShowcase
TopNavHeadingBasic
A product heading with a logo inside a TopNav, linked to the home page. Use as the leading brand element of a top navigation bar.
TreeListFileTreeWithIcons
File browser tree with folder and document icons distinguishing directories from files.
TreeListInteractiveSettings
Settings tree with clickable items and a documentation link.
