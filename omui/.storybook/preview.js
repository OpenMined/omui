import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider, CSSReset, Box } from '@chakra-ui/core';
import theme from '../theme';

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Box p={6}>{storyFn()}</Box>
  </ThemeProvider>
));
