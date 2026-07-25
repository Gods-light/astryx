# ChatTokenizedText

Renders a text string with token patterns replaced by inline Badge components. Wrap any message body inside ChatMessageBubble to turn raw @mentions, #tags, or /commands into styled badges. When no tokens match or none are provided, the text renders as-is: so you can use ChatTokenizedText unconditionally on every message.

**Import:** `import {ChatTokenizedText} from '@astryxdesign/core/Chat';`

## Props

| Prop       | Type                  | Default | Description                                                                                                                                                                                                                                                   |
| ---------- | --------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children` | `string`              | —       | The plain text message containing serialized token values. Patterns matching a token's value are replaced with badge components inline. **(required)**                                                                                                        |
| `tokens`   | `ChatComposerToken[]` | —       | Token definitions: same type returned by trigger onSelect. Each token has a value (the string to match), label (display text), and optional variant and icon. Uses the same type as the composer input, so token definitions work for both input and display. |

Related block templates:

ChatTokenizedTextBasic
A message with @mention tokens. Each matching pattern is replaced with its display name badge.
ChatTokenizedTextColors
Tokens with different color variants to distinguish mentions, bugs, and features. Use variant colors to create a visual taxonomy: blue for people, red for bugs, green for features.
