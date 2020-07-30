import React from 'react';
import {
  Radio as ChakraRadio,
  RadioGroup as ChakraRadioGroup,
  RadioGroupProps as IRadioGroupProps
} from '@chakra-ui/core';

import { Stack } from '../stack';

export const Radio = ChakraRadio;

type RadioGroupItemProps = {
  value: string | number;
  label: string;
  checked?: boolean;
  children?: RadioGroupItemProps[];
};

type RadioGroupProps = IRadioGroupProps & {
  direction?: 'horizontal' | 'vertical';
  radios: RadioGroupItemProps[];
};

export const RadioGroup = ({
  direction,
  radios,
  ...props
}: RadioGroupProps) => {
  const defaultValue = radios.filter((i) => i.checked).map((i) => i.value)[0];

  return (
    <ChakraRadioGroup {...props} defaultValue={defaultValue}>
      <Stack
        spacing={direction === 'horizontal' ? 6 : 2}
        direction={direction === 'horizontal' ? 'row' : 'column'}
      >
        {radios.map(({ label, value, ...radio }) => (
          <Radio value={value} key={value} {...radio}>
            {label}
          </Radio>
        ))}
      </Stack>
    </ChakraRadioGroup>
  );
};

RadioGroup.defaultProps = {
  direction: 'vertical'
};

RadioGroup.displayName = 'RadioGroup';
