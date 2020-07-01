import { Spinner as ChakraSpinner } from '@chakra-ui/core';

import { default as SpinnerStyle } from './spinner.style';

export const Spinner = ChakraSpinner;

Spinner.defaultProps = {
  ...SpinnerStyle.defaultProps,
  thickness: '2px',
  speed: '0.5s',
  color: 'blue.500',
  emptyColor: 'transparent'
};
