import {
  Button as ChakraButton,
  IconButton as ChakraIconButton
} from '@chakra-ui/core';

export const Button = ChakraButton;

Button.defaultProps = {
  size: 'md',
  variant: 'solid',
  colorScheme: 'blue'
};

export const IconButton = ChakraIconButton;

IconButton.defaultProps = {
  size: 'md',
  variant: 'solid',
  colorScheme: 'blue',
  isRound: false
};
