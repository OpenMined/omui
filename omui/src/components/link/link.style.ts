// import { ComponentTheme } from '@chakra-ui/theme-tools';

// TODO: remove the 'any' type
const Link: any = {
  baseStyle: {
    transition: `all 0.15s ease-out`,
    cursor: 'pointer',
    textDecoration: 'none',
    outline: 'none',
    color: 'inherit',
    _hover: {
      color: 'blue.700'
    },
    _disabled: {
      opacity: 0.4,
      cursor: 'not-allowed',
      textDecoration: 'none'
    }
  }
};

export default Link;
