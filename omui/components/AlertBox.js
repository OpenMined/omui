import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle as ChakraAlertTitle,
  AlertDescription,
} from '@chakra-ui/core';

export const AlertBox = ({ title, status, variant, children, ...props }) => (
  <Alert status={status} variant={variant} {...props}>
    <AlertIcon size={8} mr={0} />
    {title && (
      <ChakraAlertTitle mt={3} mb={1} fontSize="lg">
        {title}
      </ChakraAlertTitle>
    )}
    <AlertDescription maxWidth="sm">{children}</AlertDescription>
  </Alert>
);

AlertBox.defaultProps = {
  status: 'info',
  variant: 'subtle',
  flexDirection: 'column',
  justifyContent: 'center',
  textAlign: 'center',
  py: 12,
};
