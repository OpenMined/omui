import React from 'react';
import { withKnobs, select, text, boolean } from '@storybook/addon-knobs';

import { Select } from './';
import { Select as SelectStyle } from '../../theme';

export default { title: 'Components/Select', decorators: [withKnobs] };

const { size, variant } = SelectStyle.defaultProps;

const themeSelectSizes = Object.keys(SelectStyle.sizes);
const themeSelectVariants = Object.keys(SelectStyle.variants);

export const Default = () => {
  const options = [
    {
      value: 'one',
      label: 'Option One'
    },
    {
      value: 'two',
      label: 'Option Two'
    },
    {
      value: 'three',
      label: 'Option Three'
    }
  ];

  return (
    <Select
      options={options}
      placeholder={text('Placeholder', 'Select an option...')}
      size={select('Size', themeSelectSizes, size)}
      variant={select('Variant', themeSelectVariants, variant)}
      isRequired={boolean('Is required?', false)}
      isInvalid={boolean('Is invalid?', false)}
      isDisabled={boolean('Is disabled?', false)}
      isReadOnly={boolean('Is read-only?', false)}
    />
  );
};
