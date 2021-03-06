import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import { Radio, RadioGroup } from './';

import { themeBaseColors } from '../../theme/helpers';

export default { title: 'Components/Radio', decorators: [withKnobs] };

const { colorScheme } = Radio.defaultProps;
const { direction } = RadioGroup.defaultProps;

export const Default = () => (
  <Radio
    defaultIsChecked
    isInvalid={boolean('Is invalid?', false)}
    isDisabled={boolean('Is disabled?', false)}
    colorScheme={select('Color', themeBaseColors, colorScheme)}
    value={text('Value', 'the-value')}
  >
    {text('Label', 'My radio label')}
  </Radio>
);

export const Group = () => {
  const radios = [
    {
      label: 'First option',
      value: 'first-option'
    },
    {
      label: 'Second option',
      value: 'second-option',
      checked: true
    },
    {
      label: 'Third option',
      value: 'third-option'
    }
  ];

  return (
    <RadioGroup
      direction={select('Direction', ['horizontal', 'vertical'], direction)}
      radios={radios}
    />
  );
};
