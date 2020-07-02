import React from 'react';
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from '@storybook/addon-knobs';

import { LinearProgress, CircularProgress, ProgressStyle } from '.';
import {
  themeProgressSizes,
  themeProgressColors,
  themeAllPossibleColors
} from '../../helpers/get-theme';

export default { title: 'Components/Progress', decorators: [withKnobs] };

const { size, colorScheme } = ProgressStyle.defaultProps;
const {
  size: circularSize,
  thickness,
  color,
  trackColor,
  hasLabel
} = CircularProgress.defaultProps;

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
