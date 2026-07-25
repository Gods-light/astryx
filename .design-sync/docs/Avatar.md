# Avatar

Avatar represents a person or team with a profile photo, initials, or a default icon. Use it in comment headers, contact lists, chat messages, user cards, and anywhere you need to identify someone visually.

**Import:** `import {Avatar} from '@astryxdesign/core/Avatar';`

## Anatomy

| Element      | Required | Description                                                                             |
| ------------ | -------- | --------------------------------------------------------------------------------------- |
| Photo        | No       | The profile image, loaded from the src URL. Shown when available.                       |
| Initials     | No       | One or two letters extracted from the name. Shown when no photo is available.           |
| Default icon | No       | A generic person silhouette. Shown when there is no photo or name.                      |
| Status dot   | No       | A small indicator in the bottom-right corner showing availability (online, away, busy). |

## Best Practices

- **Do:** Always pass a name so the avatar can show initials if the photo fails to load, and so screen readers can announce who it represents.
- **Do:** Pick a size that matches the context: tiny or xsmall for inline mentions, small or medium for lists and cards, large for profile headers.
- **Do:** Add a status dot when knowing someone's availability matters, like in chat or team views.
- **Don't:** Use Avatar for logos, product images, or anything that isn't a person or team. Use an image or icon instead.
- **Don't:** Force a square or custom shape. Avatars are always circular to stay consistent across the system.

## Props

| Prop          | Type        | Default  | Description                           |
| ------------- | ----------- | -------- | ------------------------------------- |
| `src`         | `string`    | —        | Primary image source URL.             |
| `fallbackSrc` | `string`    | —        | Fallback image when primary fails.    |
| `name`        | `string`    | —        | User name for initials and alt text.  |
| `alt`         | `string`    | —        | Alt text (falls back to name).        |
| `size`        | `'tiny'     | 'xsmall' | 'small'                               | 'medium' | 'large' | number` | `'small'` | Avatar size. Use a named size ('tiny', 'xsmall', 'small', 'medium', 'large') or a numeric pixel value. Note: short names like 'sm', 'md', 'lg' are NOT valid; use the full words. |
| `status`      | `ReactNode` | —        | Corner content for status indicators. |

## Components

### AvatarStatusDot

See `astryx component AvatarStatusDot` for props and usage.

## Theming

| Component class            | Preferred data attributes | Props   | States |
| -------------------------- | ------------------------- | ------- | ------ |
| `astryx-avatar`            | `data-size`               | size    | —      |
| `astryx-avatar-status-dot` | `data-variant`            | variant | —      |

Override in defineTheme:

```ts
components: {
  'avatar': {
    base: { /* CSS properties */ },
    'size:value': { /* variant-specific */ },
  },
  'avatar-status-dot': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

AvatarFallbackChain
Demonstrates the avatar fallback chain: primary image, fallback image, initials, then default icon.
AvatarGroup
Overlap multiple avatars in a row to represent a group of people. Use for team lists, PR reviewers, or participant counts where you want to show faces without taking up much space.
AvatarInitialsFallback
Show initials instead of a photo. The avatar extracts the first and last initials from the name automatically. Use when you only have a user name, like in anonymous accounts or new user onboarding.
AvatarShowcase
Avatars at every size with an image, initials fallback, and a status dot. A quick visual reference for choosing the right size.
AvatarUserCard
Place an avatar next to a name and role to create a user card row. Use for comment headers, contact lists, profile sections, or anywhere you need to identify a person at a glance.
AvatarWithImage
Show a profile photo at different sizes. Use when you have a user photo URL. If the image fails to load, initials are shown instead.
AvatarWithStatus
Add a status dot to an avatar to show whether someone is online, away, or busy. Use in chat, messaging, or any UI where knowing availability matters.
AvatarGroupShowcase
Overlapping avatar rows with max limit and server-side overflow count. Shows team members in a compact facepile layout.
AvatarGroupOverflowCustomText
Provide short custom children such as 12+ when the overflow count needs compact product-specific formatting.
AvatarGroupOverflowDefault
Use AvatarGroupOverflow without children to render the standard +N overflow count.
AvatarGroupOverflowShowcase
Overflow indicators for hidden avatars, including the default +N label and custom count text.
AvatarStatusDotShowcase
AvatarStatusDot renders a presence indicator on an Avatar, with variants for positive, neutral, and negative states. The dot size automatically coordinates with the Avatar size.
AvatarStatusDotVariants
Presence dots on Avatars using the success, neutral, and error variants. Pass an AvatarStatusDot to the Avatar status prop; the dot sizes itself to match the Avatar.
CarouselSnap
Scroll-snap carousel with navigation buttons and team member cards. Each card snaps to the start edge on scroll. Use when items should be viewed one at a time rather than as a continuous strip.
ChatMessageAvatarName
Messages with avatars and sender names. Place the name on the bubble when using bubbles, or on the message wrapper for raw content.
ChatMessageMultiBubble
Grouped bubbles using the group prop for corner radius reduction. Use first, middle, and last to visually connect related bubbles from the same sender.
ChatMessageShowcase
A user multi-bubble group with delivery status and an assistant ghost response with avatar, name, timestamp, and model info.
ChatMessageBubbleGrouping
Multi-bubble messages using first, middle, and last group positions. Grouped bubbles tighten corner radius on the sender side for a continuous visual flow.
ChatMessageBubbleMetadata
Bubbles with name and metadata slots aligned to bubble padding. Put name on the first bubble and metadata on the last bubble in a message.
ChatMessageListDensity
Side-by-side comparison of compact, balanced, and spacious densities. Use compact in sidebars or panels, balanced for most full-page chat, and spacious for long-form reading. Use gap when row spacing needs to differ from density.
ChatMessageListFullFeatured
Conversation showcasing system messages, multi-bubble grouping, markdown, code blocks, and metadata. Combines date dividers, ghost bubbles, grouped messages, and rich content in a single example.
HoverCardShowcase
A hover card that shows a user profile preview when hovering over a trigger button. Starts open for preview.
ItemShowcase
ItemWithMedia
Items with leading avatars and icons in the startContent slot. Keep start content small so the row stays compact and easy to scan.
ListMessageList
Chat-style message list with avatars, preview text, and unread badges.
ListItemWithMedia
List items with leading avatars and icons. Use startContent for compact visual identifiers that help users scan the collection.
PaginationDotsCarousel
A review carousel using dot pagination to step through testimonial cards. Use the dots variant for carousels, galleries, and any paged content where the total is small and visible position matters more than a page number.
StackFillItem
An avatar, text, and button in a row; the text stretches to fill the available space.
