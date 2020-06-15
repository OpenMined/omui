import React from 'react';
import { withKnobs, text, select, number } from '@storybook/addon-knobs';

import { Heading } from '../..';

export default { title: 'Primitives/Heading', decorators: [withKnobs] };

export const Default = () => (
  <Heading>{text('Text', 'A box is just a div tag with styled props')}</Heading>
);
