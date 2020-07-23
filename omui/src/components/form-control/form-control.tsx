import React from 'react';
import {
  FormControl as ChakraFormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  RequiredIndicator,
  FormControlProps as IFormControlProps
} from '@chakra-ui/core';

type FormControlProps = IFormControlProps & {
  children: React.ReactNode;
  label?: string;
  helper?: string;
  error?: string;
};

export const FormControl = ({
  children,
  label,
  helper,
  error,
  ...props
}: FormControlProps) => {
  const isGroupedChild =
    children &&
    ['CheckboxGroup', 'RadioGroup'].includes(
      // @ts-ignore
      children.displayName || children.type.displayName
    );
  const isSwitch =
    children &&
    ['Switch'].includes(
      // @ts-ignore
      children.displayName || children.type.displayName
    );

  return (
    <ChakraFormControl {...props} as={isGroupedChild ? 'fieldset' : 'div'}>
      {label && (
        <FormLabel as={isGroupedChild ? 'legend' : 'label'}>
          {label}
          {props.isRequired && <RequiredIndicator />}
        </FormLabel>
      )}
      {children}
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
      {helper && <FormHelperText>{helper}</FormHelperText>}
    </ChakraFormControl>
  );
};

FormControl.displayName = 'FormControl';
