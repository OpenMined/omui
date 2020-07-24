import theme from '@chakra-ui/theme';

const { Button } = theme.components;

Button.baseStyle.container = {
  ...Button.baseStyle.container,
  fontWeight: 'medium',
  _focus: {}
};

Button.defaultProps = {
  ...Button.defaultProps,
  colorScheme: 'blue'
};

export default Button;
