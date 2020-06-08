import * as React from 'react';
import { ThemeProvider, CSSReset } from '../../omui';

export const themeHOC = (Component) => (props: any) => (
  <ThemeProvider>
    <CSSReset />
    <Component {...props} />
  </ThemeProvider>
);
