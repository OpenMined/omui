import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import theme from '../theme';

interface ThemeProps {
  children: React.ReactNode;
}

export const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    {children}
  </ThemeProvider>
);
