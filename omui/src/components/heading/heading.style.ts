import theme from '@chakra-ui/theme';
import { Sizes } from '@chakra-ui/theme-tools';

const { Heading } = theme.components;

const register = {
  ...Heading.register,
  sizes: ['hero', '2xl', 'xl', 'lg', 'md', 'sm', 'xs']
} as const;

Heading.baseStyle.heading = {
  ...Heading.baseStyle.heading,
  lineHeight: 'base',
  fontWeight: 'medium'
};

const sizes: Sizes<typeof register> = {
  ...Heading.sizes,
  hero: {
    heading: { fontSize: ['5xl', null, '6xl'], lineHeight: 'none' }
  },
  '2xl': {
    heading: { fontSize: ['4xl', null, '5xl'], lineHeight: 'shorter' }
  },
  xl: {
    heading: { fontSize: ['3xl', null, '4xl'], lineHeight: 'short' }
  }
};

Heading.sizes = sizes;

export default Heading;
