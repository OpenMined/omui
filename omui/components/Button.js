import {
  Button as ChakraButton,
  IconButton as ChakraIconButton,
} from '@chakra-ui/core';

export const Button = ChakraButton;

Button.defaultProps = {
  fontWeight: 'medium',
  size: 'md',
  variant: 'solid',
  variantColor: 'blue',
  leftIcon: '',
  rightIcon: '',
};

export const IconButton = ChakraIconButton;

IconButton.defaultProps = {
  size: 'md',
  variant: 'solid',
  variantColor: 'blue',
  isRound: false,
};
