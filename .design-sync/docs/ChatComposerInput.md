# ChatComposerInput

Rich text input for the chat composer. Supports trigger menus (type @ or / to open a typeahead), inline tokens rendered as badges, message history recall with ArrowUp/Down, paste/drop file handling, and a 16px touch-device font-size floor to prevent iOS input zoom. Pass it to ChatComposer's input slot when you need more than a plain textarea.

**Import:** `import {ChatComposerInput} from '@astryxdesign/core/Chat';`

## Props

| Prop          | Type                                 | Default               | Description                                                                                                                                                      |
| ------------- | ------------------------------------ | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `handleRef`   | `React.Ref<ChatComposerInputHandle>` | —                     | Imperative handle for programmatic control: insertToken, insertText, focus, and getValue.                                                                        |
| `value`       | `string`                             | —                     | Controlled input value. Pair with onChange for two-way binding.                                                                                                  |
| `onChange`    | `(value: string) => void`            | —                     | Called when the input value changes. The serialized string includes token placeholders.                                                                          |
| `placeholder` | `string`                             | `'Type a message...'` | Placeholder text shown when the input is empty.                                                                                                                  |
| `maxRows`     | `number`                             | `8`                   | Maximum visible rows before the input scrolls. Use a lower value in compact layouts.                                                                             |
| `triggers`    | `ChatComposerTrigger[]`              | —                     | Trigger definitions for typeahead menus. Each trigger specifies a character (@ or /), a search source, and an onSelect handler that returns the token to insert. |
| `debounceMs`  | `number`                             | `150`                 | Debounce delay for async search sources to avoid excessive network requests.                                                                                     |
| `hasHistory`  | `boolean`                            | `true`                | Enable ArrowUp/Down to recall previously submitted messages.                                                                                                     |
| `label`       | `string`                             | `'Message input'`     | Accessible label announced by screen readers.                                                                                                                    |
| `isDisabled`  | `boolean`                            | `false`               | Disables the input. Use during streaming or when a prerequisite is unmet.                                                                                        |
| `onPaste`     | `(event, text) => void`              | —                     | Called when text is pasted. Use to intercept or transform pasted content.                                                                                        |
| `onFiles`     | `(files: File[]) => void`            | —                     | Called when files are pasted or dropped onto the input. Use to handle attachments.                                                                               |
| `onSubmit`    | `(value: string) => void`            | —                     | Called when the user presses Enter without Shift. The serialized value includes token placeholders.                                                              |

Related block templates:

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
ChatDictationButtonBasic
A dictation button wired to useChatDictation and placed in the sendActions slot of a ChatComposer. Click the microphone to transcribe speech into the input.
ChatDictationButtonShowcase
Interactive dictation button connected to the SpeechRecognition API via useChatDictation. Click the mic to dictate into the composer.
