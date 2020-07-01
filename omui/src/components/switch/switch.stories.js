import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Switch, SwitchStyle } from './';
import { themeSwitchColors, themeSwitchSizes } from '../../helpers/get-theme';

export default { title: 'Components/Switch', decorators: [withKnobs] };

const { colorScheme, size } = SwitchStyle.defaultProps;

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
