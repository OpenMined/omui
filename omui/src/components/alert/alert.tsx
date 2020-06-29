import React from 'react';
import {
  Alert as ChakraAlert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton
} from '@chakra-ui/core';

import AlertStyle from './alert.style';

interface AlertProps {
  title?: string;
  closable?: boolean;
  children: string | React.ReactNode;
}

export const Alert = ({ title, closable, children, ...props }: AlertProps) => (
  <ChakraAlert {...props}>
    <AlertIcon />
    {title && <AlertTitle>{title}</AlertTitle>}
    <AlertDescription>{children}</AlertDescription>
    {closable && (
      <CloseButton position="absolute" right="0.4rem" top="0.4rem" />
    )}
  </ChakraAlert>
);

// Additional defaultProps that we cannot set on the style
Alert.defaultProps = {
  ...AlertStyle.defaultProps,
  status: 'error',
  closable: true
};
