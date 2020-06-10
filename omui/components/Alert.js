import React from 'react';
import {
  Alert as ChakraAlert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/core';

export const Alert = ({ title, closable, children, ...props }) => (
  <ChakraAlert {...props}>
    <AlertIcon />
    {title && <AlertTitle mr={2}>{title}</AlertTitle>}
    <AlertDescription>{children}</AlertDescription>
    {closable && <CloseButton position="absolute" right="8px" top="8px" />}
  </ChakraAlert>
);

Alert.defaultProps = {
  status: 'error',
  variant: 'subtle',
  closable: true,
};
