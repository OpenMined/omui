import React from 'react';

import {
  PinInput as ChakraPinInput,
  PinInputField,
  PinInputProps as IPinInputProps
} from '@chakra-ui/core';

import { PinInput as PinInputStyle } from '../../theme';

import { Stack } from '../stack';

type PinInputProps = IPinInputProps & {
  length: number;
  spacing: number;
};

export const PinInput = ({ length, spacing, ...props }: PinInputProps) => {
  const fields = [...Array(length).keys()];

  return (
    <ChakraPinInput {...props}>
      <Stack direction="row" spacing={spacing}>
        {fields.map((_, index) => (
          <PinInputField key={index} />
        ))}
      </Stack>
    </ChakraPinInput>
  );
};

PinInput.defaultProps = {
  ...PinInputStyle.defaultProps,
  spacing: 2
};
