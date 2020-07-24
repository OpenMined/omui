import { Spinner as ChakraSpinner } from '@chakra-ui/core';

export const Spinner = ChakraSpinner;

Spinner.defaultProps = {
  thickness: '2px',
  speed: '0.5s',
  color: 'blue.500',
  emptyColor: 'transparent'
};
