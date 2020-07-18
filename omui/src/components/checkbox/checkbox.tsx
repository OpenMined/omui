import React from 'react';
import {
  Checkbox as ChakraCheckbox,
  CheckboxGroup as ChakraCheckboxGroup,
  CheckboxGroupProps as ICheckboxGroupProps
} from '@chakra-ui/core';

import { Stack } from '../stack';

export const Checkbox = ChakraCheckbox;

type CheckboxGroupItemProps = {
  value: string | number;
  label: string;
  checked?: boolean;
  children?: CheckboxGroupItemProps[];
};

type CheckboxGroupProps = ICheckboxGroupProps & {
  direction?: 'horizontal' | 'vertical';
  checkboxes: CheckboxGroupItemProps[];
};

export const CheckboxGroup = ({
  direction,
  checkboxes,
  ...props
}: CheckboxGroupProps) => {
  const defaultValue = checkboxes.filter((i) => i.checked).map((i) => i.value);

  return (
    <ChakraCheckboxGroup {...props} defaultValue={defaultValue}>
      <Stack
        spacing={direction === 'horizontal' ? 6 : 2}
        direction={direction === 'horizontal' ? 'row' : 'column'}
      >
        {checkboxes.map(({ label, value, ...check }) => (
          <Checkbox value={value} key={value} {...check}>
            {label}
          </Checkbox>
        ))}
      </Stack>
    </ChakraCheckboxGroup>
  );
};

CheckboxGroup.defaultProps = {
  direction: 'vertical'
};

CheckboxGroup.displayName = 'CheckboxGroup';
