import React from 'react';
import {
  Alert as ChakraAlert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  AlertProps as IAlertProps
} from '@chakra-ui/core';

import { CloseButton } from '../close-button';

type AlertProps = IAlertProps & {
  title?: string;
  closable?: boolean;
  onClose?: () => void;
};

const Alert = ({
  title,
  closable,
  children,
  onClose,
  ...props
}: AlertProps) => (
  <ChakraAlert {...props}>
    <AlertIcon />
    {title && <AlertTitle mr={2}>{title}</AlertTitle>}
    <AlertDescription>{children}</AlertDescription>
    {closable && (
      <CloseButton
        onClick={onClose}
        style={{
          position: 'absolute',
          right: '0.4rem',
          top: '0.4rem'
        }}
      />
    )}
  </ChakraAlert>
);

// Additional defaultProps that we cannot set on the style
Alert.defaultProps = {
  status: 'error',
  closable: true
};

export { Alert, AlertIcon, AlertTitle, AlertDescription };
