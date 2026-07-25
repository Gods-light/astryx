# AvatarGroup

AvatarGroup displays multiple avatars in an overlapping row with an optional overflow indicator. Uses a compositional API: pass Avatar children directly so each avatar can carry its own props (status dots, click handlers, etc.).

**Import:** `import {AvatarGroup} from '@astryxdesign/core/AvatarGroup';`

## Anatomy

| Element            | Required | Description                                                                          |
| ------------------ | -------- | ------------------------------------------------------------------------------------ |
| Avatar children    | Yes      | Avatar elements that form the overlapping row. Each can have its own props.          |
| Overflow indicator | No       | A "+N" circle at the end showing hidden count, or a custom AvatarGroupOverflow slot. |

## Best Practices

- **Do:** Set max to limit visible avatars when the list is long; 3-5 is typical.
- **Do:** Use AvatarGroupOverflow for custom overflow content like a popover trigger or "add member" button.
- **Do:** Pass status dots, click handlers, or tooltips directly on each Avatar child.
- **Don't:** Don't nest AvatarGroups; use a single group with all avatars.

## Props

| Prop          | Type                        | Default   | Description                                                                                                                            |
| ------------- | --------------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `children`    | `ReactNode`                 | —         | Avatar children, optionally followed by one AvatarGroupOverflow. Consumers handle slicing to the desired visible count. **(required)** |
| `size`        | `AvatarSize`                | `'small'` | Size applied to all avatars via context.                                                                                               |
| `ref`         | `React.Ref<HTMLDivElement>` | —         | Ref forwarded to the root element.                                                                                                     |
| `xstyle`      | `StyleXStyles`              | —         | StyleX styles for layout customization.                                                                                                |
| `data-testid` | `string`                    | —         | Test selector for automated testing frameworks.                                                                                        |

## Components

### AvatarGroupOverflow

See `astryx component AvatarGroupOverflow` for props and usage.

## Theming

| Component class                | Preferred data attributes | Props | States |
| ------------------------------ | ------------------------- | ----- | ------ |
| `astryx-avatar-group`          | `data-size`               | size  | —      |
| `astryx-avatar-group-overflow` | —                         | —     | —      |

Override in defineTheme:

```ts
components: {
  'avatar-group': {
    base: { /* CSS properties */ },
    'size:value': { /* variant-specific */ },
  },
  'avatar-group-overflow': {
    base: { /* CSS properties */ },
  },
}
```

Related block templates:

AvatarGroup
Overlap multiple avatars in a row to represent a group of people. Use for team lists, PR reviewers, or participant counts where you want to show faces without taking up much space.
AvatarGroupShowcase
Overlapping avatar rows with max limit and server-side overflow count. Shows team members in a compact facepile layout.
AvatarGroupOverflowCustomText
Provide short custom children such as 12+ when the overflow count needs compact product-specific formatting.
AvatarGroupOverflowDefault
Use AvatarGroupOverflow without children to render the standard +N overflow count.
AvatarGroupOverflowShowcase
Overflow indicators for hidden avatars, including the default +N label and custom count text.
