# Timestamp

Timestamp formats a date or time value into human-readable text. Use it to show when something was created, updated, or is scheduled; picking relative for recency, absolute for precision, or auto to let the component decide.

**Import:** `import {Timestamp} from '@astryxdesign/core/Timestamp';`

## Anatomy

| Element        | Required | Description                                                                        |
| -------------- | -------- | ---------------------------------------------------------------------------------- |
| Formatted text | Yes      | The rendered date, time, or relative label like "2 hours ago" or "Mar 21, 2025".   |
| Tooltip        | No       | A hover card showing the full absolute date and time when the display is relative. |

## Best Practices

- **Do:** Use the auto format in feeds and lists so recent items show "2 hours ago" and older items show the full date automatically.
- **Do:** Keep formatting consistent within the same list or table; mixing relative and absolute timestamps in the same column confuses scanning.
- **Do:** Enable isTimezoneShown when the audience spans multiple time zones, like a global team calendar or audit log.
- **Do:** Use isLive for active dashboards or real-time feeds so the relative time stays accurate without a page refresh.
- **Don't:** Don't display raw Unix timestamps or ISO strings to users; always pass them through Timestamp to get a human-readable format.
- **Don't:** Avoid system_date or system_time formats in user-facing UI; they are meant for developer tools, logs, and machine-readable contexts.
- **Don't:** Don't disable the tooltip on relative timestamps; users expect to hover for the full date when they see "3 hours ago".

## Props

| Prop              | Type         | Default        | Description                                                                                                         |
| ----------------- | ------------ | -------------- | ------------------------------------------------------------------------------------------------------------------- |
| `value`           | `string      | number`        | —                                                                                                                   | The date/time to display. Accepts Unix timestamps (seconds) or ISO 8601 strings. **(required)** |
| `format`          | `'relative'  | 'auto'         | 'date'                                                                                                              | 'date_time'                                                                                     | 'time' | 'system_date' | 'system_date_time' | 'system_time'` | `'auto'` | Display format. 'relative' shows '2 hours ago', 'date' shows 'Mar 21, 2025', 'date_time' shows 'Mar 21, 2025, 2:51 PM', 'time' shows '2:51 PM', 'system_*' variants use ISO-style formatting, 'auto' switches from relative to date_time based on recency. |
| `autoThreshold`   | `number`     | `604800`       | Threshold in seconds for 'auto' format to switch from relative to date_time.                                        |
| `hasTooltip`      | `boolean`    | `true`         | Whether to show a tooltip with the full date/time on hover when displaying relative time.                           |
| `isTimezoneShown` | `boolean`    | `false`        | Whether to append the timezone abbreviation. Applies to date_time, time, system_date_time, and system_time formats. |
| `isLive`          | `boolean`    | `false`        | Whether the relative time should update live (e.g. "2 min ago" → "3 min ago").                                      |
| `type`            | `TextType`   | `'supporting'` | Semantic text type from Text. Determines size, weight, and line-height.                                             |
| `size`            | `TextSize`   | —              | Explicit font size override. Overrides the size from type.                                                          |
| `color`           | `TextColor`  | `'secondary'`  | Text color.                                                                                                         |
| `weight`          | `TextWeight` | —              | Font weight override.                                                                                               |

## Theming

| Component class    | Preferred data attributes                | Props               | States |
| ------------------ | ---------------------------------------- | ------------------- | ------ |
| `astryx-timestamp` | `data-type`, `data-color`, `data-format` | type, color, format | —      |

Override in defineTheme:

```ts
components: {
  'timestamp': {
    base: { /* CSS properties */ },
    'type:value': { /* variant-specific */ },
  },
}
```

Related block templates:

ChatMessageAvatarName
Messages with avatars and sender names. Place the name on the bubble when using bubbles, or on the message wrapper for raw content.
ChatMessageGhost
Ghost variant for messages without visible bubble boundaries. Keeps padding for alignment but renders a transparent background, useful for AI-style responses.
ChatMessageMultiBubble
Grouped bubbles using the group prop for corner radius reduction. Use first, middle, and last to visually connect related bubbles from the same sender.
ChatMessageShowcase
A user multi-bubble group with delivery status and an assistant ghost response with avatar, name, timestamp, and model info.
ChatMessageBubbleGrouping
Multi-bubble messages using first, middle, and last group positions. Grouped bubbles tighten corner radius on the sender side for a continuous visual flow.
ChatMessageBubbleMetadata
Bubbles with name and metadata slots aligned to bubble padding. Put name on the first bubble and metadata on the last bubble in a message.
ChatMessageBubbleShowcase
Grouped user bubbles with filled styling and a ghost-variant agent response, with timestamps and delivery status.
ChatMessageListFullFeatured
Conversation showcasing system messages, multi-bubble grouping, markdown, code blocks, and metadata. Combines date dividers, ghost bubbles, grouped messages, and rich content in a single example.
ChatMessageListShowcase
Basic AI chat conversation with user and assistant messages. The simplest way to render a message list with alternating sender bubbles, metadata, and a date divider.
ChatMessageMetadataFooter
Assistant message with footer actions: copy, retry, thumbs up/down, and model label. Use for AI responses that need feedback or utility controls.
ChatMessageMetadataShowcase
Three-message conversation showcasing error status with retry, delivery status, and full footer actions with model label.
ChatMessageMetadataStatus
All 5 delivery statuses (sending, sent, delivered, read, and error), each with a timestamp. Use to show message delivery progress or surface failures.
ChatMessageMetadataTimestamp
Timestamp-only metadata on user and assistant messages. Supports absolute time and relative formats via Timestamp.
TimestampAutoFormat
Auto format that shows relative time for recent dates and switches to the full date for older ones. The default choice for most use cases.
TimestampColors
Timestamp rendered in each available color variant: primary, secondary, disabled, and active.
TimestampFormats
All display formats side by side: date, date_time, time, and their system equivalents. Use date and date_time for user-facing UI, system variants for logs and dev tools.
TimestampRelativeFormat
Relative time labels from seconds to months ago, with hover tooltips showing the full date. Use in feeds, comment threads, and activity logs.
TimestampShowcase
TimestampTimezone
Timestamps with the timezone abbreviation appended. Enable isTimezoneShown for audiences across time zones, like audit logs or team calendars.
