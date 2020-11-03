import React from 'react';
import {
  CircularProgress as ChakraCircularProgress,
  CircularProgressLabel,
  CircularProgressProps as ICircularProgressProps
} from '@chakra-ui/core';

import { default as ProgressStyle } from './progress.style';

export { Progress as LinearProgress } from '@chakra-ui/core';

// TODO: isIndeterminate doesn't work for LinearProgress or CircularProgress

type CircularProgressProps = ICircularProgressProps & {
  hasLabel?: boolean;
};

const CircularProgress = ({ hasLabel, ...props }: CircularProgressProps) => (
  <ChakraCircularProgress {...props}>
    {hasLabel && <CircularProgressLabel>{props.value}%</CircularProgressLabel>}
  </ChakraCircularProgress>
);

CircularProgress.defaultProps = {
  ...ProgressStyle.defaultProps,
  size: '80px',
  thickness: '4px',
  color: 'blue.500',
  trackColor: 'gray.100',
  hasLabel: true
};

export { CircularProgress, CircularProgressLabel };
