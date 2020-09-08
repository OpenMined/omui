import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Switch } from './';
import { Switch as SwitchStyle } from '../../theme';

import { colors, thirdParty } from '../../theme/foundations/colors';

export default { title: 'Components/Switch', decorators: [withKnobs] };

const { colorScheme, size } = Switch.defaultProps;
const themeSwitchSizes = Object.keys(SwitchStyle.sizes);
const themeSwitchColors = [...Object.keys(colors), ...Object.keys(thirdParty)];

export const Default = () => {
  return (
    <Switch
      id="my-switch"
      label={text('Text', 'Sample text')}
      colorScheme={select('Color', themeSwitchColors, colorScheme)}
      size={select('Size', themeSwitchSizes, size)}
      isDisabled={boolean('Is disabled?', false)}
      defaultIsChecked
    />
  );
};
