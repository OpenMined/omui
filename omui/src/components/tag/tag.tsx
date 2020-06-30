import React from 'react';
import {
  Tag as ChakraTag,
  TagLabel,
  TagProps as ITagProps
} from '@chakra-ui/core';

import { CloseButton } from '../close-button';

type TagProps = ITagProps & {
  label: string;
  closable?: boolean;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  onClose?: () => void;
};

export const Tag = ({
  label,
  closable,
  leftElement,
  rightElement,
  onClose,
  ...props
}: TagProps) => {
  return (
    <ChakraTag {...props}>
      {leftElement && leftElement}
      <TagLabel>{label}</TagLabel>
      {rightElement && rightElement}
      {closable && <CloseButton onClick={onClose} size="sm" ml={2} mr={-2} />}
    </ChakraTag>
  );
};
