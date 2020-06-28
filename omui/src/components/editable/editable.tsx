import React from 'react';
import {
  Editable as ChakraEditable,
  EditableInput,
  EditablePreview,
  EditableProps
} from '@chakra-ui/core';

export const Editable = (props: EditableProps) => {
  return (
    <ChakraEditable {...props}>
      <EditablePreview />
      <EditableInput />
    </ChakraEditable>
  );
};

Editable.defaultProps = {
  selectAllOnFocus: false
};
