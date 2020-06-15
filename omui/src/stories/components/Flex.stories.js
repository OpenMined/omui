import React from 'react';
import { withKnobs, text, select, number } from '@storybook/addon-knobs';

import { Flex } from '../..';

export default { title: 'Primitives/Flex', decorators: [withKnobs] };

export const Default = () => (
  <Flex>{text('Text', 'A box is just a div tag with styled props')}</Flex>
);
