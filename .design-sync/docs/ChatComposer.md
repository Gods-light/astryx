# ChatComposer

Layout shell for a chat composer. Arranges named slots (drawer, header, input, footer, send) with page-radius container, hover/focus shadows, and concentric inner radius for child elements.

**Import:** `import {ChatComposer} from '@astryxdesign/core/Chat';`

## Props

| Prop             | Type                      | Default                        | Description                                                                                             |
| ---------------- | ------------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------- |
| `onSubmit`       | `(value: string) => void` | —                              | Called when the user submits a message. **(required)**                                                  |
| `onStop`         | `() => void`              | —                              | Called when the user requests to stop generation.                                                       |
| `isStopShown`    | `boolean`                 | `false`                        | Whether the stop button is shown instead of the send button.                                            |
| `value`          | `string`                  | —                              | Controlled input value.                                                                                 |
| `onChange`       | `(value: string) => void` | —                              | Change handler for controlled mode.                                                                     |
| `placeholder`    | `string`                  | `'Type a message...'`          | Placeholder text shown when the input is empty.                                                         |
| `isDisabled`     | `boolean`                 | `false`                        | Disables the composer.                                                                                  |
| `density`        | `'compact'                | 'balanced'                     | 'spacious'`                                                                                             | `'balanced'`                                           | Visual density. |
| `drawer`         | `ReactNode`               | —                              | Slot: collapsible drawer above the input: attachments, context chips, etc. Use ChatComposerDrawer.      |
| `headerActions`  | `ReactNode`               | —                              | Slot: left-aligned header actions (attach, mention buttons). Use icon-only size="sm" buttons.           |
| `headerContext`  | `ReactNode`               | —                              | Slot: right-aligned contextual info in the header (context window usage, ProgressBar, supporting text). |
| `input`          | `ReactNode`               | —                              | Slot: custom input element. Replaces the default textarea. Use ChatComposerInput for trigger menus.     |
| `footerActions`  | `ReactNode`               | —                              | Slot: left-aligned footer actions (model selector, etc).                                                |
| `sendActions`    | `ReactNode`               | —                              | Slot: actions to the left of the send button.                                                           |
| `sendButton`     | `ReactNode`               | —                              | Slot: custom send button. Replaces the default send/stop button.                                        |
| `status`         | `{ type: 'error'          | 'warning'; message?: string }` | —                                                                                                       | Status message rendered below (or above) the composer. |
| `statusPosition` | `'top'                    | 'bottom'`                      | `'bottom'`                                                                                              | Where to render the status.                            |

Related block templates:

ChatComposerAttachments
Chat composer with removable file tokens in a collapsible drawer. Use when users can attach files or context to their message.
ChatComposerFooterActions
Chat composer with dropdown menus for a model selector and settings in the footer, and a mic button in the send actions slot.
ChatComposerFullFeatured
Chat composer with all slots populated: collapsible attachment drawer, header actions, context progress bar, footer dropdown menus, and mic button. Shows the maximum composer configuration.
ChatComposerSimple
Minimal chat composer with a placeholder and submit handler. The simplest way to drop a message input into a page.
ChatComposerStreaming
Chat composer with streaming state and a stop button. Use when the assistant is generating a response and the user can cancel.
ChatComposerValidation
Chat composer with error and warning status messages. Status can appear above or below the composer to surface validation or system feedback.
ChatComposerDrawerFeedback
Chat composer drawer with a feedback prompt and selectable lettered options. Use for user confirmation workflows that require explicit action before proceeding.
ChatComposerInputControlledInput
Controlled chat input with live value display. Use controlled mode when you need to read or transform the input value outside the composer.
ChatComposerInputDisabled
Composer in a disabled state. Use when the input should be visible but not interactive, such as during streaming or when a prerequisite is unmet.
ChatComposerInputMentionTrigger
Chat input with an @ trigger that opens a typeahead menu for mentioning users. Selected names appear as inline tokens.
ChatComposerInputMultipleTriggers
Chat input with both @ mentions and / commands. Each trigger type renders tokens in a distinct color so users can tell them apart at a glance.
ChatComposerInputShowcase
ChatComposerInputSlashCommands
Chat input with a / trigger for command selection. Use for AI assistants or bots that support structured commands.
ChatDictationDictationInComposer
Dictation button placed in the sendActions slot of a chat composer. Shows the recommended integration point for voice input alongside the send button.
ChatDictationButtonBasic
A dictation button wired to useChatDictation and placed in the sendActions slot of a ChatComposer. Click the microphone to transcribe speech into the input.
ChatDictationButtonShowcase
Interactive dictation button connected to the SpeechRecognition API via useChatDictation. Click the mic to dictate into the composer.
ChatSendButtonInComposer
Send button inside ChatComposer, where it reads state from context automatically. No wiring needed; the button enables when the input has content.
