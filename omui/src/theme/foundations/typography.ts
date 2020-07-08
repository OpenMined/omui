export const fonts = {
  heading: `"Rubik", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  body: `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  mono: `"Fira Code", SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`
};

export const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
  '6xl': '4rem'
};

export const fontWeights = {
  // hairline: 100,
  // thin: 200,
  light: 300,
  normal: 400,
  medium: 500,
  // semibold: 600,
  bold: 700
  // extrabold: 800,
  // black: 900
};

export const letterSpacings = {
  // tighter: '-0.05em',
  tight: '-0.04em', // Original: -0.025em
  normal: '0',
  wide: '0.08em', // Original: 0.025em
  wider: '0.16em', // Original: 0.05em
  widest: '0.24em' // Original: 0.1em
};

export const lineHeights = {
  normal: 'normal',
  none: '1',
  shorter: '1.25',
  short: '1.3', // Original: 1.375
  base: '1.5',
  tall: '1.6', // Original: 1.625
  taller: '2'
};

const typography = {
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights
};

export type Typography = typeof typography;

export default typography;
