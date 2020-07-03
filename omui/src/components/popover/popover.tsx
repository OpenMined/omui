import React from 'react';
import {
  Popover as ChakraPopover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverProps as IPopoverProps
} from '@chakra-ui/core';

import { default as PopoverStyle } from './popover.style';

type PopoverProps = IPopoverProps & {
  children: React.ReactNode;
  content: string | React.ReactNode;
  header: string;
  footer?: string;
  showClose?: boolean;
  showArrow?: boolean;
};

export const Popover = ({
  children,
  content,
  header,
  footer,
  showClose,
  showArrow,
  ...props
}: PopoverProps) => (
  <ChakraPopover {...props}>
    <PopoverTrigger>{children}</PopoverTrigger>
    <PopoverContent>
      {showArrow && <PopoverArrow />}
      {showClose && <PopoverCloseButton mt="0.4rem" />}
      <PopoverHeader>{header}</PopoverHeader>
      <PopoverBody>{content}</PopoverBody>
      {footer && <PopoverFooter>{footer}</PopoverFooter>}
    </PopoverContent>
  </ChakraPopover>
);

Popover.defaultProps = {
  ...PopoverStyle.defaultProps,
  showClose: true,
  showArrow: true
};
