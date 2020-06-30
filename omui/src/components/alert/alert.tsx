import React from 'react';
import {
  Alert as ChakraAlert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/core';

import { default as AlertStyle } from './alert.style';

import { CloseButton } from '../close-button';

interface AlertProps {
  title?: string;
  closable?: boolean;
  children: string | React.ReactNode;
  onClose?: () => void;
}

export const Alert = ({
  title,
  closable,
  children,
  onClose,
  ...props
}: AlertProps) => (
  <ChakraAlert {...props}>
    <AlertIcon />
    {title && <AlertTitle>{title}</AlertTitle>}
    <AlertDescription>{children}</AlertDescription>
    {closable && (
      <CloseButton
        onClick={onClose}
        position="absolute"
        right="0.4rem"
        top="0.4rem"
      />
    )}
  </ChakraAlert>
);

// Additional defaultProps that we cannot set on the style
Alert.defaultProps = {
  ...AlertStyle.defaultProps,
  status: 'error',
  closable: true
};
