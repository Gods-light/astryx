# TabList

TabList provides tab-style navigation for organizing content into categorized sections. Use it to let users switch between related views without leaving the page, with overflow items handled by a built-in "more" menu.

**Import:** `import {TabList} from '@astryxdesign/core/TabList';`

## Anatomy

| Element             | Required | Description                              |
| ------------------- | -------- | ---------------------------------------- |
| Left Content        | No       | Most important area; hugs content width. |
| Center-Fill Content | No       | Stretches to fill available space.       |
| Right Content       | No       | Hugs content width.                      |

## Best Practices

- **Do:** Keep tab labels short and descriptive so users can quickly scan available sections.
- **Do:** Use TabMenu to group overflow items when horizontal space is limited rather than scrolling tabs off-screen.
- **Do:** When using hasDivider with action buttons alongside tabs, use a smaller button size (sm) so the actions don't overpower the tab row.
- **Don't:** Use tabs for sequential steps or workflows; use a stepper or wizard pattern instead.
- **Don't:** Place more than 6–8 visible tabs before the overflow menu; prioritize the most important categories.
- **Don't:** Confuse TabList with SegmentedControl or ToggleButton. TabList is for navigation between views. SegmentedControl and ToggleButton are input controls: SegmentedControl always has exactly one selected option, while ToggleButton can be toggled on or off.

## Props

| Prop          | Type                      | Default     | Description                                                                                                                                         |
| ------------- | ------------------------- | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| `value`       | `string`                  | —           | The currently selected tab value. **(required)**                                                                                                    |
| `onChange`    | `(value: string) => void` | —           | Callback fired when a tab is selected. **(required)**                                                                                               |
| `size`        | `'sm'                     | 'md'        | 'lg'`                                                                                                                                               | `'md'`                                                                                                                                                                                                                              | Size variant applied to all child tabs. |
| `layout`      | `'hug'                    | 'fill'`     | `'hug'`                                                                                                                                             | Layout mode for tab sizing. 'hug': each tab hugs its content width. 'fill': tabs stretch equally to fill the container width.                                                                                                       |
| `hasDivider`  | `boolean`                 | `false`     | Whether to show a bottom border divider under the tab list.                                                                                         |
| `orientation` | `'horizontal'             | 'vertical'` | `'horizontal'`                                                                                                                                      | Orientation of the tab strip, controlling which arrow keys move focus between tabs and the reported aria-orientation. 'horizontal': ArrowLeft/ArrowRight. 'vertical': ArrowUp/ArrowDown. Both axes' arrows are accepted regardless. |
| `children`    | `ReactNode`               | —           | Tab and TabMenu items to render inside the nav. **(required)**                                                                                      |
| `xstyle`      | `StyleXStyles`            | —           | StyleX styles for layout customization (margins, positioning, sizing). Must be a stylex.create() value: not an inline style object like style={{}}. |

## Components

### Tab

See `astryx component Tab` for props and usage.

### TabMenu

See `astryx component TabMenu` for props and usage.

## Theming

| Component class            | Preferred data attributes | Props | States   |
| -------------------------- | ------------------------- | ----- | -------- |
| `astryx-tab-list`          | `data-size`               | size  | —        |
| `astryx-tab`               | `data-selected`           | —     | selected |
| `astryx-tab-indicator`     | `data-selected`           | —     | selected |
| `astryx-tab-menu`          | —                         | —     | —        |
| `astryx-tab-menu-dropdown` | —                         | —     | —        |
| `astryx-tab-menu-item`     | —                         | —     | —        |

Override in defineTheme:

```ts
components: {
  'tab-list': {
    base: { /* CSS properties */ },
    'size:value': { /* variant-specific */ },
  },
  'tab': {
    base: { /* CSS properties */ },
    'selected': { /* state-specific */ },
  },
}
```

Related block templates:

TabShowcase
Tab is an individual tab item within a TabList, supporting labels, icons, selected icons, and end content slots.
TabWithSelectedIcon
A tab that changes its icon when selected.
TabListShowcase
TabListTabsFillLayout
Tabs that stretch to fill the available width with a bottom divider.
TabListTabsWithActions
Page header pattern with tabs on the left and action buttons pushed to the right. When hasDivider is true, pair with a smaller button size (sm) so actions don't overpower the tab row.
TabListTabsWithBadge
Tabs with notification badge counts rendered via endContent. Uses error variant for urgent counts and neutral for informational ones.
TabListTabsWithIcons
Tabs with leading icons alongside text labels.
TabListTabsWithMenu
Tab list with a dropdown menu for additional items that do not fit inline.
TabListTabsWithStatusDot
Tabs with status dot indicators rendered via endContent to show live environment health at a glance.
TabMenuBasic
An overflow menu at the end of a TabList that collects secondary tabs behind a dropdown. Use it when there are more tabs than fit comfortably inline.
TabMenuShowcase
TabMenu is an overflow menu within a TabList that groups additional tab options into a dropdown, showing the selected option's label as the trigger text.
ToolbarWithTabs
A toolbar with tabs in the start slot and an action button at the end. Use as a card or section header when content is split into tabs with a primary action alongside.
