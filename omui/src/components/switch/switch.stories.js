import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Switch } from './';
import { Switch as SwitchStyle } from '../../theme';

import { themeColors } from '../../theme/helpers';

export default { title: 'Components/Switch', decorators: [withKnobs] };

const { colorScheme, size } = Switch.defaultProps;
const themeSwitchSizes = Object.keys(SwitchStyle.sizes);

export const Default = () => {
  return (
    <Switch
      id="my-switch"
      label={text('Text', 'Sample text')}
      colorScheme={select('Color', themeColors, colorScheme)}
      size={select('Size', themeSwitchSizes, size)}
      isDisabled={boolean('Is disabled?', false)}
      defaultIsChecked
    />
  );
};
