# Center

Center aligns content to the middle of its container. Use it for empty states, loading screens, login forms, or any content that should sit in the center of the available space.

**Import:** `import {Center} from '@astryxdesign/core/Center';`

## Anatomy

| Element   | Required | Description                                                                             |
| --------- | -------- | --------------------------------------------------------------------------------------- |
| Container | Yes      | A flexbox wrapper that aligns its children to the center along the chosen axis.         |
| Content   | Yes      | Any children passed to Center. Typically a card, form, spinner, or empty state message. |

## Best Practices

- **Do:** Use axis="horizontal" or axis="vertical" when you only need one direction. Both axes is the default but not always needed.
- **Do:** Set a height when centering vertically. Center needs a defined height to know what space to center within.
- **Do:** Use isInline to center small elements like icons or badges within a line of text without breaking the text flow.
- **Don't:** Wrap large page sections in Center. Use Layout or AppShell for page-level structure.
- **Don't:** Use Center for horizontal lists of items. Use Stack with hAlign="center" instead.

## Props

| Prop        | Type           | Default      | Description                                                                                                                                         |
| ----------- | -------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `axis`      | `'both'        | 'horizontal' | 'vertical'`                                                                                                                                         | `'both'` | Which direction(s) to center. |
| `width`     | `SizeValue`    | —            | Container width (px or CSS value).                                                                                                                  |
| `height`    | `SizeValue`    | —            | Container height (px or CSS value).                                                                                                                 |
| `maxWidth`  | `SizeValue`    | —            | Maximum container width (px or CSS value).                                                                                                          |
| `minHeight` | `SizeValue`    | —            | Minimum container height (px or CSS value).                                                                                                         |
| `isInline`  | `boolean`      | `false`      | Use inline-flex (useful for text/icons).                                                                                                            |
| `children`  | `ReactNode`    | —            | Content to center.                                                                                                                                  |
| `xstyle`    | `StyleXStyles` | —            | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value, not an inline style object like style={{}}. |

## Theming

| Component class | Preferred data attributes | Props | States |
| --------------- | ------------------------- | ----- | ------ |
| `astryx-center` | `data-axis`               | axis  | —      |

Override in defineTheme:

```ts
components: {
  'center': {
    base: { /* CSS properties */ },
    'axis:value': { /* variant-specific */ },
  },
}
```

Related block templates:

AspectRatioCircleImage
Circular container via shape="ellipse" with ratio={1}, ideal for avatars and profile images.
AspectRatioSquareImage
1:1 square aspect ratio, ideal for avatars and Instagram-style images.
AspectRatioWidescreen
16:9 widescreen aspect ratio wrapping an image.
AspectRatioWithSkeleton
Aspect ratio container with a skeleton loading placeholder.
CenterHorizontal
An editor toolbar with a document title on the left and formatting actions on the right. This shows axis="horizontal", centering in one direction only. Use when content needs to be horizontally centered while other elements are positioned independently around it.
CenterInsideACard
An empty state with an icon, heading, and description centered both vertically and horizontally inside a card. This is the most common use of Center: placing content in the middle of a fixed-height area like a panel, card, or content region. The height prop defines the centering space.
CenterShowcase
Content centered horizontally and vertically inside a fixed-height container.
HoverCardHookUsage
Custom profile preview using useHoverCard with direct trigger and render control.
LayerHookUsage
Low-level anchored overlay rendered with useLayer and a custom surface.
LayoutContentBasic
A scrollable main content area below a fixed header. Use LayoutContent inside Layout to get automatic padding and scroll containment for the primary content.
LayoutFooterActions
A fixed footer with end-aligned action buttons below scrollable content. Use LayoutFooter inside Layout for persistent actions like Save and Cancel.
LayoutHeaderWithActions
A fixed page header with a title and a primary action, above scrollable content. Use LayoutHeader inside Layout for persistent page-level headers.
LayoutPanelNavigation
A fixed-width side panel holding a navigation list next to the main content. Use LayoutPanel in the start or end slot of Layout for sidebars.
MultiSelectorColumnVisibilitySelector
Column visibility toggle with hidden label, search, select-all, and selection count.
MultiSelectorForm
Two multi-selectors in a form with required/optional states.
MultiSelectorSearchableMultiSelector
Multi-select with search filtering and select-all.
MultiSelectorSectionedMultiSelector
Multi-select with options grouped into labeled sections.
NumberInputClearableNumberInput
Number input with a clear button, unit suffix, and min/max constraint
NumberInputRangeNumberInput
Number input with min/max boundaries and a helper description
NumberInputStatuses
Number inputs showing error, warning, and success validation states
NumberInputWithUnits
Number input with a percentage unit suffix and valid range
OverflowListCollapseFromStartList
Overflow list that hides items from the start, keeping the latest visible
PopoverHookUsage
Custom quick-actions popover using usePopover for trigger refs, ARIA attributes, and focus trapping.
ProgressBarCustomFormat
Progress bar with a custom value label showing disk usage in GB.
ProgressBarIndeterminate
Indeterminate progress bar for operations with unknown duration.
ProgressBarSemanticVariants
All semantic color variants stacked vertically.
ProgressBarWithValueLabel
Progress bar with its current percentage displayed.
SelectorClearable
Selector with a clear button to reset the selected value.
SelectorWithSections
Selector with options grouped into labeled sections.
SelectorWithStatus
Selector showing error, warning, and success validation states.
SliderWithStatus
Sliders with error, warning, and success validation states.
SwitchDisabled
Disabled switch with label and description for gated features.
SwitchSettingsPanel
Settings panel with spread-spaced switches in a card.
SwitchWithDescription
Toggle with a label and supporting description text.
SwitchWithStatus
Switches with error, warning, and success validation states.
TooltipActionBarTooltips
Tooltips on an action button bar with contextual descriptions.
TooltipHookUsage
Tooltip using the useTooltip hook for programmatic control.
TypeaheadLimitedResults
Typeahead with a capped dropdown showing at most three results.
TypeaheadSearchField
Search input with icon and suggestions on focus.
TypeaheadWithHelperText
Typeahead with a description below the label.
TypeaheadWithValidation
Typeahead with an error validation message.
TypeaheadItemBasic
A typeahead whose results are rendered with TypeaheadItem, adding a secondary description below each label. Use inside renderItem to keep custom results visually consistent.
