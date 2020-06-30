import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/core';

import theme from '../../theme';

interface ThemeProps {
  children: React.ReactNode;
}

export const Theme = ({ children }: ThemeProps) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    {children}
  </ChakraProvider>
);
