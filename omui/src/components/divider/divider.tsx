import { Divider as ChakraDivider } from '@chakra-ui/core';
import { default as DividerStyle } from './divider.style';

export const Divider = ChakraDivider;

Divider.defaultProps = {
  ...DividerStyle.defaultProps,
  borderColor: 'gray.400'
};
