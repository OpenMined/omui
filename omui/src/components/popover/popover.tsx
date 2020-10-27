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
      {header && <PopoverHeader>{header}</PopoverHeader>}
      <PopoverBody>{content}</PopoverBody>
      {footer && <PopoverFooter color="gray.600">{footer}</PopoverFooter>}
    </PopoverContent>
  </ChakraPopover>
);

Popover.defaultProps = {
  showClose: true,
  showArrow: true
};
