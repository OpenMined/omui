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
  magenta: {
    // Original: pink
    50: '#F6E3EC', // Original: #fff5f7
    100: '#E9B9D0', // Original: #fed7e2
    200: '#DD8CB2', // Original: #fbb6ce
    300: '#D26194', // Original: #f687b3
    400: '#CA437E', // Original: #ed64a6
    500: '#BD2C6A', // Original: #d53f8c
    600: '#AA235E', // Original: #b83280
    700: '#952558', // Original: #97266d
    800: '#7C1E4E', // Original: #702459
    900: '#641947' // Original: #521B41
  },
  red: {
    50: '#FFE5EC', // Original: #fff5f5
    100: '#FCC4D0', // Original: #fed7d7
    200: '#EA8396', // Original: #feb2b2
    300: '#DC6173', // Original: #fc8181
    400: '#D45060', // Original: #f56565
    500: '#C12A45', // Original: #e53e3e
    600: '#B10C33', // Original: #c53030
    700: '#A30B2C', // Original: #9b2c2c
    800: '#920B28', // Original: #822727
    900: '#7A051E' // Original: #63171b
  },
  orange: {
    50: '#FCEEDE', // Original: #FFFAF0
    100: '#F7D3AD', // Original: #FEEBC8
    200: '#F1B77A', // Original: #FBD38D
    300: '#EB9A47', // Original: #F6AD55
    400: '#E88522', // Original: #ED8936
    500: '#E27101', // Original: #DD6B20
    600: '#E06113', // Original: #C05621
    700: '#D14D02', // Original: #9C4221
    800: '#CF3C00', // Original: #7B341E
    900: '#C6260A' // Original: #652B19
  },
  yellow: {
    50: '#FEF7DE', // Original: #fffff0
    100: '#FCEAAB', // Original: #fefcbf
    200: '#FADD73', // Original: #faf089
    300: '#F7D136', // Original: #f6e05e
    400: '#EBBD0A', // Original: #ecc94b
    500: '#D7A30A', // Original: #d69e2e
    600: '#B97F0C', // Original: #b7791f
    700: '#97600D', // Original: #975a16
    800: '#82500A', // Original: #744210
    900: '#734301' // Original: #5F370E
  },
  green: {
    50: '#E6F3E6', // Original: #f0fff4
    100: '#C2E0C1', // Original: #c6f6d5
    200: '#9BCC9A', // Original: #9ae6b4
    300: '#73B973', // Original: #68d391
    400: '#56AB56', // Original: #48bb78
    500: '#399D3A', // Original: #38a169
    600: '#308B31', // Original: #2f855a
    700: '#267D28', // Original: #276749
    800: '#267D28', // Original: #22543d
    900: '#034F0C' // Original: #1C4532
  },
  teal: {
    50: '#DFF1F1', // Original: #E6FFFA
    100: '#AEDEDC', // Original: #B2F5EA
    200: '#79C9C5', // Original: #81E6D9
    300: '#3EB3AD', // Original: #4FD1C5
    400: '#00A39B', // Original: #38B2AC
    500: '#009289', // Original: #319795
    600: '#00837C', // Original: #2C7A7B
    700: '#006F6A', // Original: #285E61
    800: '#005C59', // Original: #234E52
    900: '#004A48' // Original: #1D4044
  },
  cyan: {
    50: '#D8F6FA', // Original: #EDFDFD
    100: '#D8F6FA', // Original: #C4F1F9
    200: '#7CD8E4', // Original: #9DECF9
    300: '#50CFE0', // Original: #76E4F7
    400: '#0FC2DA', // Original: #0BC5EA
    500: '#00AFC9', // Original: #00B5D8
    600: '#00A2B7', // Original: #00A3C4
    700: '#008EA3', // Original: #0987A0
    800: '#007485', // Original: #086F83
    900: '#00525B' // Original: #065666
  },
  blue: {
    50: '#E4EFF5', // Original: #ebf8ff
    100: '#BCD8E7', // Original: #ceedff
    200: '#96C0D7', // Original: #90cdf4
    300: '#75A7C6', // Original: #63b3ed
    400: '#578CB1', // Original: #4299e1
    500: '#427FAB', // Original: #3182ce
    600: '#3470A0', // Original: #2a69ac
    700: '#346692', // Original: #1e4e8c
    800: '#245382', // Original: #153e75
    900: '#223F64' // Original: #1a365d
  },
  indigo: {
    50: '#E7E8EE',
    100: '#C2C6D7',
    200: '#9BA2BC',
    300: '#767EA1',
    400: '#5B638F',
    500: '#49558E',
    600: '#3A4583',
    700: '#2F3971',
    800: '#212962',
    900: '#181F54'
  },
  violet: {
    // Original: purple
    50: '#F1E3EF', // Original: #faf5ff
    100: '#DCBAD7', // Original: #e9d8fd
    200: '#C68DBE', // Original: #d6bcfa
    300: '#AE62A4', // Original: #b794f4
    400: '#9D4392', // Original: #9f7aea
    500: '#8E2183', // Original: #805ad5
    600: '#7C0C78', // Original: #6b46c1
    700: '#650869', // Original: #553c9a
    800: '#530765', // Original: #44337a
    900: '#430258' // Original: #322659
  }
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
