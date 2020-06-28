import React from 'react';
import {
  Radio as ChakraRadio,
  RadioGroup as ChakraRadioGroup,
  RadioGroupProps as IRadioGroupProps
} from '@chakra-ui/core';

import { Checkbox } from '../checkbox/checkbox';
import { Stack } from '../stack/stack';

export const Radio = ChakraRadio;

Radio.defaultProps = Checkbox.defaultProps;

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
  const defaultValue = radios
    .map((i) => {
      if (i.checked) return i.value;
      return null;
    })
    .filter((i) => i !== null)[0];

  return (
    // @ts-ignore
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
