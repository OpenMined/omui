import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { CheckIcon } from '@chakra-ui/icons';

import { List } from './';

import sizes from '../../theme/foundations/sizes';

export default { title: 'Components/List', decorators: [withKnobs] };

const items = [
  {
    label: 'Item One'
  },
  {
    label: 'Item Two'
  },
  {
    label: 'Item Three'
  }
];

export const Default = () => {
  const type = select('Type', ['ordered', 'unordered', 'icon'], 'ordered');

  const ItemIcon = () => <CheckIcon color="green.500" mr={2} />;

  return (
    <List
      items={items}
      spacing={select('Spacing', sizes, sizes['2'])}
      type={type === 'icon' ? ItemIcon : type}
    />
  );
};
