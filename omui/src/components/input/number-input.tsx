import React from 'react';
import {
  NumberInput as ChakraNumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputProps
} from '@chakra-ui/core';

const NumberInput = (props: NumberInputProps) => {
  return (
    <ChakraNumberInput {...props}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </ChakraNumberInput>
  );
};

export {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
};
