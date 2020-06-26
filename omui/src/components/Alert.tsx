import React from 'react';
import {
  Alert as ChakraAlert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton
} from '@chakra-ui/core';

interface AlertProps {
  title?: string;
  closable?: boolean;
  children: string | React.ReactNode;
}

export const Alert = ({ title, closable, children, ...props }: AlertProps) => (
  <ChakraAlert {...props}>
    <AlertIcon />
    {title && <AlertTitle mr={2}>{title}</AlertTitle>}
    <AlertDescription>{children}</AlertDescription>
    {closable && (
      <CloseButton
        position="absolute"
        right="2"
        top="2"
        _focus={{ outline: 'none' }}
      />
    )}
  </ChakraAlert>
);

Alert.defaultProps = {
  status: 'error',
  variant: 'subtle',
  closable: true
};
