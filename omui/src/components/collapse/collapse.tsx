import { Collapse as ChakraCollapse } from '@chakra-ui/core';

export const Collapse = ChakraCollapse;

Collapse.defaultProps = {
  animateOpacity: false,
  // @ts-ignore
  timeout: 1000
};
