import React from 'react';
import {
  Switch as ChakraSwitch,
  SwitchProps as ISwitchProps,
  FormLabel,
  FlexProps
} from '@chakra-ui/core';

import { Flex } from '../../';

type SwitchProps = ISwitchProps &
  FlexProps & {
    label?: string;
    id: string;
  };

export const Switch = ({
  label,
  id,
  size,
  name,
  value,
  isChecked,
  isInvalid,
  isDisabled,
  colorScheme,
  defaultIsChecked,
  ...props
}: SwitchProps) => (
  <Flex {...props} align="center">
    <FormLabel htmlFor={id} mb={size === 'sm' ? 0 : 1}>
      {label}
    </FormLabel>
    <ChakraSwitch
      mb={0}
      id={id}
      size={size}
      name={name}
      value={value}
      isChecked={isChecked}
      isInvalid={isInvalid}
      isDisabled={isDisabled}
      colorScheme={colorScheme}
      defaultIsChecked={defaultIsChecked}
    />
  </Flex>
);
