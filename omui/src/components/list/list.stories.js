import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

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
  return (
    <List
      items={items}
      spacing={select('Spacing', sizes, sizes['2'])}
      type={select('Type', ['ordered', 'unordered'], 'ordered')}
    />
  );
};
