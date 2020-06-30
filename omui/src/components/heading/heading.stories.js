import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Heading } from './';
import { Box } from '../../';

import {
  themeHeadingFontSizes,
  themeHeadingTags
} from '../../helpers/get-theme';

export default { title: 'Primitives/Heading', decorators: [withKnobs] };

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
