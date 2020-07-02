import React from 'react';
import {
  Select as ChakraSelect,
  SelectProps as ISelectProps
} from '@chakra-ui/core';

type Option = {
  label: string;
  value: string;
};

type SelectProps = ISelectProps & {
  options: Option[];
};

export const Select = ({ options, ...props }: SelectProps) => (
  <ChakraSelect {...props}>
    {options.map(({ label, value, ...option }) => (
      <option key={value} value={value} {...option}>
        {label}
      </option>
    ))}
  </ChakraSelect>
);
