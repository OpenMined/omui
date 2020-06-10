import { Button as ChakraButton } from '@chakra-ui/core';

export const Button = ChakraButton;

Button.defaultProps = {
  fontWeight: 'medium',
  size: 'md',
  variant: 'solid',
  variantColor: 'blue',
  leftIcon: '',
  rightIcon: '',
};
