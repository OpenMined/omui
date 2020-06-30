import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription
} from '@chakra-ui/core';

import { AlertStyle } from '../alert';

interface AlertBoxProps {
  title?: string;
  children: string | React.ReactNode;
}

export const AlertBox = ({ title, children, ...props }: AlertBoxProps) => (
  <Alert
    {...props}
    flexDirection="column"
    justifyContent="center"
    textAlign="center"
    py={10}
  >
    <AlertIcon boxSize="10" mr={0} />
    {title && (
      <AlertTitle mt={3} mb={1} fontSize="lg">
        {title}
      </AlertTitle>
    )}
    <AlertDescription maxWidth="sm" lineHeight="base">
      {children}
    </AlertDescription>
  </Alert>
);

// Additional defaultProps that we cannot set on the style
AlertBox.defaultProps = {
  ...AlertStyle.defaultProps,
  status: 'info'
};
