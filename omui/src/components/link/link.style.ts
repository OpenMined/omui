import theme from '@chakra-ui/theme';

const { Link } = theme.components;


Link.baseStyle!._hover = {
  textDecoration: 'none'
}

Link.baseStyle!._focus = {
  boxShadow: 'none'
}

export default Link;
