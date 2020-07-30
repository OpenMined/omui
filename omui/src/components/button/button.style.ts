import theme from '@chakra-ui/theme';

const { Button } = theme.components;

Button.baseStyle! = {
  ...Button.baseStyle!,
  fontWeight: 'medium',
  _focus: { boxShadow: 'none' }
};

Button.defaultProps = {
  ...Button.defaultProps,
  colorScheme: 'blue'
};

export default Button;
