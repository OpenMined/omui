import React from 'react';
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from '@storybook/addon-knobs';

import { LinearProgress, CircularProgress } from '.';
import { Progress as ProgressStyle } from '../../theme';

import { colors, thirdParty } from '../../theme/foundations/colors';
import { themeAllPossibleColors } from '../../theme/helpers';

export default { title: 'Components/Progress', decorators: [withKnobs] };

const { size, colorScheme } = ProgressStyle.defaultProps;
const {
  size: circularSize,
  thickness,
  color,
  trackColor,
  hasLabel
} = CircularProgress.defaultProps;

const themeProgressColors = [
  ...Object.keys(colors),
  ...Object.keys(thirdParty)
];

const themeProgressSizes = Object.keys(ProgressStyle.sizes);

export const Linear = () => (
  <LinearProgress
    value={number('Value', 65, { min: 0, max: 100, step: 1 })}
    size={select('Size', themeProgressSizes, size)}
    colorScheme={select('Color', themeProgressColors, colorScheme)}
    hasStripe={boolean('Has stripe?', false)}
    isAnimated={boolean('Is stripe animated?', false)}
    isIndeterminate={boolean('Is indeterminate?', false)}
  />
);

export const Circular = () => (
  <CircularProgress
    value={number('Value', 65, { min: 0, max: 100, step: 1 })}
    size={text('Size', circularSize)}
    thickness={text('Thickness', thickness)}
    color={select('Color', themeAllPossibleColors, color)}
    trackColor={select('Track color', themeAllPossibleColors, trackColor)}
    hasLabel={boolean('Show label?', hasLabel)}
    isIndeterminate={boolean('Is indeterminate?', false)}
  />
);
