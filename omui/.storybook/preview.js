import React from 'react';
import { addDecorator } from '@storybook/react';
import { Box, Theme } from '../';

addDecorator((storyFn) => (
  <Theme>
    <Box p={6}>{storyFn()}</Box>
  </Theme>
));
