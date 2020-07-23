// import { ComponentTheme } from '@chakra-ui/theme-tools';

// TODO: remove the 'any' type
const Heading: any = {
  defaultProps: {
    size: 'xl'
  },
  baseStyle: {
    fontFamily: 'heading',
    lineHeight: 'base',
    fontWeight: 'medium'
  },
  sizes: {
    hero: {
      fontSize: ['5xl', null, '6xl'],
      lineHeight: 'none'
    },
    '2xl': {
      fontSize: ['4xl', null, '5xl'],
      lineHeight: 'shorter'
    },
    xl: {
      fontSize: ['3xl', null, '4xl'],
      lineHeight: 'short'
    },
    lg: { fontSize: '2xl' },
    md: { fontSize: 'xl' },
    sm: { fontSize: 'md' },
    xs: { fontSize: 'sm' }
  }
};

export const HeadingSizes = {
  hero: 'hero',
  '2xl': '2xl',
  xl: 'xl',
  lg: 'lg',
  md: 'md',
  sm: 'sm',
  xs: 'xs'
};

export default Heading;
