import React from 'react';
import { ThemeProvider, CSSReset } from '../../omui';
import theme from '../../omui/theme';

export default (Component: any) => (props: any) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <Component {...props} />
  </ThemeProvider>
);
