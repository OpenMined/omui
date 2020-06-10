import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import theme from '../theme';

export const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    {children}
  </ThemeProvider>
);
