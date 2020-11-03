import { IconButton as ChakraIconButton } from '@chakra-ui/core';

import { default as ButtonStyle } from './button.style';

export { Button, ButtonGroup } from '@chakra-ui/core';

export const IconButton = ChakraIconButton;

IconButton.defaultProps = {
  ...ButtonStyle.defaultProps,
  isRound: false
};
