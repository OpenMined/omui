import React from 'react';
import {
  Input as ChakraInput,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  InputLeftElement,
  InputRightElement,
  InputProps as IInputProps
} from '@chakra-ui/core';

type InputProps = IInputProps & {
  left: React.ReactNode;
  right: React.ReactNode;
};

export const Input = ({ left, right, variant, ...props }: InputProps) => {
  if (left || right) {
    const LeftComponent =
      typeof left === 'string' ? InputLeftAddon : InputLeftElement;
    const RightComponent =
      typeof right === 'string' ? InputRightAddon : InputRightElement;

    return (
      <InputGroup variant={variant}>
        {left && <LeftComponent children={left} />}
        <ChakraInput {...props} />
        {right && <RightComponent children={right} />}
      </InputGroup>
    );
  }

  return <ChakraInput variant={variant} {...props} />;
};
