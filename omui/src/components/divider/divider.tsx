import { Divider as ChakraDivider } from '@chakra-ui/core';

import { DividerStyle } from './';

export const Divider = ChakraDivider;

Divider.defaultProps = {
  ...DividerStyle.defaultProps,
  borderColor: 'gray.400'
};
