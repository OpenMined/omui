import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Heading } from './';
import { Box } from '../../';

export default { title: 'Primitives/Heading', decorators: [withKnobs] };

const themeHeadingFontSizes = ['2xl', 'xl', 'lg', 'md', 'sm', 'xs'];
const themeHeadingTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export const Default = () => (
  <Box width={600} p={4} bg="gray.100">
    <Heading
      size={select('Size', themeHeadingFontSizes, 'xl')}
      as={select('HTML tag', themeHeadingTags, 'h3')}
      isTruncated={boolean('Truncate text?', true)}
    >
      {text('Text', 'Welcome to OpenMined UI!')}
    </Heading>
  </Box>
);
