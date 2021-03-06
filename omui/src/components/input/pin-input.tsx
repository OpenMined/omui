import React from 'react';

import {
  PinInput as ChakraPinInput,
  PinInputField,
  PinInputProps as IPinInputProps
} from '@chakra-ui/core';

import { Stack } from '../stack';

type PinInputProps = IPinInputProps & {
  length: number;
  spacing: number;
};

const PinInput = ({ length, spacing, ...props }: PinInputProps) => {
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

export { PinInput, PinInputField };
