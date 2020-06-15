import React from 'react';
import { withKnobs, text, select, number } from '@storybook/addon-knobs';

import { Text } from '../..';

export default { title: 'Primitives/Text', decorators: [withKnobs] };

export const Default = () => (
  <Text>{text('Text', 'A box is just a div tag with styled props')}</Text>
);
