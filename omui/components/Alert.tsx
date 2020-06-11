import React from 'react';
import {
  Alert as ChakraAlert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  IAlert
} from '@chakra-ui/core';

interface AlertProps extends IAlert {
  title?: string;
  closable?: boolean;
  children: string | React.ReactNode;
}

export const Alert = ({ title, closable, children, ...props }: AlertProps) => (
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
  closable: true
};
