import React, { RefObject } from 'react';
import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerProps as IDrawerProps,
  UseDisclosureProps as IUseDisclosureProps
} from '@chakra-ui/core';

// TODO: the default UseDisclosureProps interface defines these required props as optional, they should be required by default
type UseDisclosureProps = IUseDisclosureProps & {
  isOpen: boolean;
  onClose(): void;
};

type DrawerProps = IDrawerProps & {
  disclosure: UseDisclosureProps;
  finalRef: RefObject<HTMLElement>;
  closeButton?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
};

const Drawer = ({
  disclosure,
  finalRef,
  closeButton = true,
  header,
  footer,
  children,
  ...props
}: DrawerProps) => {
  const { isOpen, onOpen, onClose } = disclosure;

  return (
    <ChakraDrawer
      {...props}
      isOpen={isOpen}
      onClose={onClose}
      finalFocusRef={finalRef}
    >
      <DrawerOverlay>
        <DrawerContent>
          {closeButton && <DrawerCloseButton />}
          {header && <DrawerHeader>{header}</DrawerHeader>}
          <DrawerBody>{children}</DrawerBody>
          {footer && <DrawerFooter>{footer}</DrawerFooter>}
        </DrawerContent>
      </DrawerOverlay>
    </ChakraDrawer>
  );
};

Drawer.defaultProps = {
  placement: 'right',
  size: 'md'
};

export {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
};
