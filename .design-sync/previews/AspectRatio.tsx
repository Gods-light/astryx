// Copyright (c) Meta Platforms, Inc. and affiliates.

/* eslint-disable @typescript-eslint/no-explicit-any --
 * `compose()` below is copied verbatim from the design-sync converter's
 * generated preview wrapper (.design-sync/.cache/previews/). It is CSF interop:
 * it reads arbitrary, untyped Storybook story/meta objects (args, argTypes,
 * decorators, render) whose shapes are only known at runtime. Typing them would
 * mean re-deriving Storybook's own generics here and would drift from the
 * generated twin this file must stay diffable against.
 */
import * as React from 'react';
import * as stylex from '@stylexjs/stylex';
import * as S from '@ds-stories/apps/storybook/stories/AspectRatio.stories';
import {AspectRatio} from '@astryxdesign/core/AspectRatio';
import {Text} from '@astryxdesign/core/Text';

function compose(S: any, key: string) {
  const meta: any = S.default ?? {};
  const st: any = S[key];
  const args: any = {...(meta.args ?? {}), ...(st && st.args ? st.args : {})};
  // Storybook resolves argTypes.mapping (control value -> real arg) before
  // rendering; mirror that so mapped args don't render raw.
  const at: any = {
    ...(meta.argTypes ?? {}),
    ...(st && st.argTypes ? st.argTypes : {}),
  };
  for (const k of Object.keys(args)) {
    const m = at[k] && at[k].mapping;
    if (m && typeof m === 'object' && args[k] in m) {
      args[k] = m[args[k]];
    }
  }
  const title: string = typeof meta.title === 'string' ? meta.title : '';
  const ctx: any = {
    args,
    name: key,
    title,
    kind: title,
    id: '',
    componentId: '',
    globals: {},
    viewMode: 'story',
    parameters: (st && st.parameters) ?? meta.parameters ?? {},
  };
  let render: (() => any) | null = null;
  if (st && typeof st.render === 'function') {
    render = () => st.render(args, ctx);
  } else if (typeof st === 'function') {
    render = () => st(args, ctx);
  } else if (typeof meta.render === 'function') {
    render = () => meta.render(args, ctx);
  } else {
    const C = (st && st.component) || meta.component;
    if (C) {
      render = () => React.createElement(C, args);
    }
  }
  if (!render) {
    return () => null;
  }
  // [].concat: a single function is legal CSF decorator shorthand. A
  // decorator returning undefined (stubbed addon) falls through to the inner
  // render — otherwise one unrecognized addon blanks the cell silently.
  const decorators: any[] = ([] as any[])
    .concat((st && st.decorators) ?? [])
    .concat(meta.decorators ?? []);
  return decorators.reduce(
    (inner: any, dec: any) => () => {
      const out = dec(inner, ctx);
      return out === undefined ? inner() : out;
    },
    render,
  );
}

export const Default = /* Default */ compose(S, 'Default');
export const Widescreen16x9 = /* Widescreen 16 X 9 */ compose(
  S,
  'Widescreen16x9',
);
export const Classic4x3 = /* Classic 4 X 3 */ compose(S, 'Classic4x3');
export const Square1x1 = /* Square 1 X 1 */ compose(S, 'Square1x1');

// Ultrawide21x9 is reimplemented (not composed from the story) because the
// story's `gradientPlaceholder` style uses the shorthand `background:
// 'linear-gradient(...)'` property. StyleX's own convention (see every
// gradient in packages/core/dist) is the longhand `backgroundImage` —
// `background` shorthand with a gradient value compiles away to nothing
// under the @stylexjs/unplugin/esbuild pass this pipeline runs, so the box
// rendered with no background at all. Same JSX/copy as the story, with
// `backgroundImage` substituted for `background`.
// Token values referenced by CSS custom-property name (var(--...)) rather
// than through the `theme/tokens.stylex` module import: that module import
// resolves fine from a story file (esbuild walks up from
// apps/storybook/, which has the workspace symlink), but not from this
// owned-preview file's location outside apps/storybook/ — the values below
// are identical at runtime either way, since defineVars tokens compile down
// to the same `var(--token-name)` reference.
const localStyles = stylex.create({
  wideContainer: {
    padding: 'var(--spacing-4)',
    backgroundColor: 'var(--color-background-surface)',
    maxWidth: 1000,
  },
  sectionLabel: {
    marginBlockEnd: 'var(--spacing-2)',
  },
  gradientPlaceholder: {
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: 'var(--radius-element)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
});

export const Ultrawide21x9 = /* Ultrawide 21 X 9 */ () => (
  <div {...stylex.props(localStyles.wideContainer)}>
    <Text type="supporting" xstyle={localStyles.sectionLabel}>
      21:9 - Ultrawide cinematic
    </Text>
    <AspectRatio ratio={21 / 9}>
      <div {...stylex.props(localStyles.gradientPlaceholder)}>
        <Text type="label">Ultrawide 21:9</Text>
      </div>
    </AspectRatio>
  </div>
);

export const EllipseCircle = /* Ellipse Circle */ compose(S, 'EllipseCircle');
export const EllipseOval = /* Ellipse Oval */ compose(S, 'EllipseOval');
export const FitModes = /* Fit Modes */ compose(S, 'FitModes');
export const WithPlaceholderSkeleton = /* With Placeholder Skeleton */ compose(
  S,
  'WithPlaceholderSkeleton',
);
export const ResponsiveGrid = /* Responsive Grid */ compose(
  S,
  'ResponsiveGrid',
);
export const AllRatiosComparison = /* All Ratios Comparison */ compose(
  S,
  'AllRatiosComparison',
);
export const ImageGallery = /* Image Gallery */ compose(S, 'ImageGallery');
