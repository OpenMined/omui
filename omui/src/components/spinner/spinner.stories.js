import React from 'react';
import { withKnobs, text, number, select } from '@storybook/addon-knobs';

import { Spinner } from './';
import { Spinner as SpinnerStyle } from '../../theme';
import { themeAllPossibleColors } from '../../theme/helpers';

export default { title: 'Components/Spinner', decorators: [withKnobs] };

const { thickness, speed, color, emptyColor, size } = Spinner.defaultProps;
const themeSpinnerColors = themeAllPossibleColors;
const themeSpinnerSizes = Object.keys(SpinnerStyle.sizes);

export const Default = () => (
  <Spinner
    thickness={text('Thickness', thickness)}
    speed={text('Speed', speed)}
    color={select('Color', themeSpinnerColors, color)}
    emptyColor={select('Empty color', themeSpinnerColors, emptyColor)}
    size={select('Size', themeSpinnerSizes, size)}
  />
);
