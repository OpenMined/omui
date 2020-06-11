import React from 'react';
import { addDecorator } from '@storybook/react';
import { Box, Theme } from '../src';

addDecorator((storyFn) => (
  <Theme>
    <Box p={6}>{storyFn()}</Box>
  </Theme>
));
