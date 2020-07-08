export interface ColorHues {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

export type Colors = typeof colors;

export const base = {
  transparent: 'transparent',
  current: 'currentColor',
  black: '#000',
  white: '#fff'
};

export const alphas = {
  whiteAlpha: {
    50: 'rgba(255, 255, 255, 0.04)',
    100: 'rgba(255, 255, 255, 0.06)',
    200: 'rgba(255, 255, 255, 0.08)',
    300: 'rgba(255, 255, 255, 0.16)',
    400: 'rgba(255, 255, 255, 0.24)',
    500: 'rgba(255, 255, 255, 0.36)',
    600: 'rgba(255, 255, 255, 0.48)',
    700: 'rgba(255, 255, 255, 0.64)',
    800: 'rgba(255, 255, 255, 0.80)',
    900: 'rgba(255, 255, 255, 0.92)'
  },
  blackAlpha: {
    50: 'rgba(0, 0, 0, 0.04)',
    100: 'rgba(0, 0, 0, 0.06)',
    200: 'rgba(0, 0, 0, 0.08)',
    300: 'rgba(0, 0, 0, 0.16)',
    400: 'rgba(0, 0, 0, 0.24)',
    500: 'rgba(0, 0, 0, 0.36)',
    600: 'rgba(0, 0, 0, 0.48)',
    700: 'rgba(0, 0, 0, 0.64)',
    800: 'rgba(0, 0, 0, 0.80)',
    900: 'rgba(0, 0, 0, 0.92)'
  }
};

export const colors = {
  gray: {
    50: '#FAFAFA', // Original: #F7FAFC
    100: '#F5F5F5', // Original: #EDF2F7
    200: '#EDEDED', // Original: #E2E8F0
    300: '#DFDFDF', // Original: #CBD5E0
    400: '#BCBCBC', // Original: #A0AEC0
    500: '#9D9D9D', // Original: #718096
    600: '#747474', // Original: #4A5568
    700: '#606060', // Original: #2D3748
    800: '#323232', // Original: #1A202C
    900: '#202020' // Original: #171923
  },
  red: {
    50: '#FCE9EE', // Original: #fff5f5
    100: '#F7C7D1', // Original: #fed7d7
    200: '#E48F99', // Original: #feb2b2
    300: '#D66373', // Original: #fc8181
    400: '#DF3A53', // Original: #f56565
    500: '#E3173B', // Original: #e53e3e
    600: '#D40639', // Original: #c53030
    700: '#C30033', // Original: #9b2c2c
    800: '#B6002B', // Original: #822727
    900: '#A70020' // Original: #63171b
  },
  orange: {
    50: '#FCF0DE', // Original: #FFFAF0
    100: '#F7D8AE', // Original: #FEEBC8
    200: '#F1BF7A', // Original: #FBD38D
    300: '#ECA645', // Original: #F6AD55
    400: '#E8941B', // Original: #ED8936
    500: '#E58200', // Original: #DD6B20
    600: '#E17700', // Original: #C05621
    700: '#DB6800', // Original: #9C4221
    800: '#D55800', // Original: #7B341E
    900: '#CB3C00' // Original: #652B19
  },
  // yellow: {
  //   50: '#fffff0',
  //   100: '#fefcbf',
  //   200: '#faf089',
  //   300: '#f6e05e',
  //   400: '#ecc94b',
  //   500: '#d69e2e',
  //   600: '#b7791f',
  //   700: '#975a16',
  //   800: '#744210',
  //   900: '#5F370E'
  // },
  green: {
    50: '#E6F3E6', // Original: #f0fff4
    100: '#C2E0C1', // Original: #c6f6d5
    200: '#9BCC9A', // Original: #9ae6b4
    300: '#73B973', // Original: #68d391
    400: '#56AB56', // Original: #48bb78
    500: '#399D3A', // Original: #38a169
    600: '#308F31', // Original: #2f855a
    700: '#257D27', // Original: #276749
    800: '#1A6D1E', // Original: #22543d
    900: '#034F0C' // Original: #1C4532
  },
  teal: {
    50: '#E1F2EF', // Original: #E6FFFA
    100: '#B6DFD7', // Original: #B2F5EA
    200: '#88CABE', // Original: #81E6D9
    300: '#5CB5A4', // Original: #4FD1C5
    400: '#41A592', // Original: #38B2AC
    500: '#2F9580', // Original: #319795
    600: '#2B8874', // Original: #2C7A7B
    700: '#267865', // Original: #285E61
    800: '#216857', // Original: #234E52
    900: '#184C3C' // Original: #1D4044
  },
  cyan: {
    50: '#E3F6F8', // Original: #EDFDFD
    100: '#BBE8EC', // Original: #C4F1F9
    200: '#95DAE0', // Original: #9DECF9
    300: '#77CAD3', // Original: #76E4F7
    400: '#6BBFC9', // Original: #0BC5EA
    500: '#69B4C0', // Original: #00B5D8
    600: '#62A4AE', // Original: #00A3C4
    700: '#5A8F96', // Original: #0987A0
    800: '#537B7F', // Original: #086F83
    900: '#475757' // Original: #065666
  },
  blue: {
    50: '#E7E8EE', // Original: #ebf8ff
    100: '#C2C6D7', // Original: #ceedff
    200: '#9BA2BC', // Original: #90cdf4
    300: '#767EA1', // Original: #63b3ed
    400: '#5B638F', // Original: #4299e1
    500: '#3D4984', // Original: #3182ce
    600: '#37427C', // Original: #2a69ac
    700: '#2F3971', // Original: #1e4e8c
    800: '#272F66', // Original: #153e75
    900: '#181F54' // Original: #1a365d
  },
  purple: {
    50: '#F1E3EF', // Original: #faf5ff
    100: '#DCBAD7', // Original: #e9d8fd
    200: '#C68DBE', // Original: #d6bcfa
    300: '#AE62A4', // Original: #b794f4
    400: '#9D4392', // Original: #9f7aea
    500: '#8E2183', // Original: #805ad5
    600: '#821D7E', // Original: #6b46c1
    700: '#721776', // Original: #553c9a
    800: '#64116E', // Original: #44337a
    900: '#4B0661' // Original: #322659
  }
  // pink: {
  //   50: '#fff5f7',
  //   100: '#fed7e2',
  //   200: '#fbb6ce',
  //   300: '#f687b3',
  //   400: '#ed64a6',
  //   500: '#d53f8c',
  //   600: '#b83280',
  //   700: '#97266d',
  //   800: '#702459',
  //   900: '#521B41'
  // }
};

export const thirdParty = {
  // linkedin: {
  //   50: '#E8F4F9',
  //   100: '#CFEDFB',
  //   200: '#9BDAF3',
  //   300: '#68C7EC',
  //   400: '#34B3E4',
  //   500: '#00A0DC',
  //   600: '#008CC9',
  //   700: '#0077B5',
  //   800: '#005E93',
  //   900: '#004471'
  // },
  facebook: {
    50: '#E8F4F9',
    100: '#D9DEE9',
    200: '#B7C2DA',
    300: '#6482C0',
    400: '#4267B2',
    500: '#385898',
    600: '#314E89',
    700: '#29487D',
    800: '#223B67',
    900: '#1E355B'
  },
  // messenger: {
  //   50: '#D0E6FF',
  //   100: '#B9DAFF',
  //   200: '#A2CDFF',
  //   300: '#7AB8FF',
  //   400: '#2E90FF',
  //   500: '#0078FF',
  //   600: '#0063D1',
  //   700: '#0052AC',
  //   800: '#003C7E',
  //   900: '#002C5C'
  // },
  // whatsapp: {
  //   50: '#e2f7f4',
  //   100: '#c3f0e9',
  //   200: '#a0e7dc',
  //   300: '#76dccd',
  //   400: '#43cfba',
  //   500: '#00BFA5',
  //   600: '#00ac92',
  //   700: '#009780',
  //   800: '#007d6a',
  //   900: '#005a4c'
  // },
  twitter: {
    50: '#e5f4fd',
    100: '#c8e9fb',
    200: '#a8dcfa',
    300: '#83cdf7',
    400: '#57bbf5',
    500: '#1DA1F2',
    600: '#1a94da',
    700: '#1681bf',
    800: '#136b9e',
    900: '#0d4d71'
  }
  // telegram: {
  //   50: '#e3f2f9',
  //   100: '#c5e4f3',
  //   200: '#a2d4ec',
  //   300: '#7ac1e4',
  //   400: '#47a9da',
  //   500: '#0088CC',
  //   600: '#007ab8',
  //   700: '#006ba1',
  //   800: '#005885',
  //   900: '#003f5e'
  // }
};

export default {
  ...base,
  ...alphas,
  ...colors,
  ...thirdParty
};
