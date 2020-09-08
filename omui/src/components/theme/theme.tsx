import React from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/core';

import chakraTheme from '@chakra-ui/theme';
import theme from '../../theme';

type ThemeProps = {
  children: React.ReactNode;
};

export const Theme = ({ children }: ThemeProps) => (
  <ChakraProvider theme={chakraTheme}>
    <CSSReset />
    {children}
  </ChakraProvider>
);
