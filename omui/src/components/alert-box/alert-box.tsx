import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  AlertProps as IAlertProps
} from '@chakra-ui/core';

import { fonts } from '../../theme/foundations/typography';

type AlertBoxProps = IAlertProps & {
  title?: string;
};

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
      <AlertTitle fontFamily={fonts.heading} mt={3} mb={1} fontSize="lg">
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
  status: 'info'
};
