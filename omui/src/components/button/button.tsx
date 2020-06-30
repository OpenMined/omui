import { IconButton as ChakraIconButton } from '@chakra-ui/core';

import { ButtonStyle } from './';

export { Button } from '@chakra-ui/core';

export const IconButton = ChakraIconButton;

IconButton.defaultProps = {
  ...ButtonStyle.defaultProps,
  isRound: false
};
