import theme from '@chakra-ui/theme';

const { Link } = theme.components;

Link.baseStyle.link = {
  ...Link.baseStyle.link,
  _hover: {
    color: 'blue.700'
  },
  _focus: {}
};

export default Link;
