import theme from '@chakra-ui/theme';

const { Heading } = theme.components;

Heading.baseStyle! = {
  ...Heading.baseStyle!,
  lineHeight: 'base',
  fontWeight: 'medium'
};


const sizes = {
  ...Heading.sizes!,
  hero: {
    fontSize: ['5xl', null, '6xl'], lineHeight: 'none'
  },
  '2xl': {
    fontSize: ['4xl', null, '5xl'], lineHeight: 'shorter'
  },
  xl: {
    fontSize: ['3xl', null, '4xl'], lineHeight: 'short'
  }
};

Heading.sizes = sizes;

export default Heading;
