import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { FaBeer } from 'react-icons/fa';

import { Icon, IconStyle } from './';

import {
  themeIconSizes,
  themeAllPossibleColors
} from '../../helpers/get-theme';

export default { title: 'Components/Icon', decorators: [withKnobs] };

const { size } = IconStyle.defaultProps;

export const Default = () => (
  <Icon
    as={FaBeer}
    size={select('Size', themeIconSizes, size)}
    color={select('Color', themeAllPossibleColors, 'red.500')}
  />
);
