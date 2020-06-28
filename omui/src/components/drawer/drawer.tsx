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
  UseDisclosureProps
} from '@chakra-ui/core';

type DrawerProps = IDrawerProps & {
  disclosure: UseDisclosureProps;
  finalRef: RefObject<HTMLElement>;
  closeButton: boolean;
  header: string | React.ReactNode;
  footer: string | React.ReactNode;
  children: string | React.ReactNode;
};

export const Drawer = ({
  disclosure,
  finalRef,
  closeButton = true,
  header,
  footer,
  children,
  ...props
}: DrawerProps) => {
  const { isOpen, onOpen, onClose } = disclosure;

  // TODO: Chakra doesn't have a configuration file for Drawer yet... this would be helpful for styling!

  // TODO: We have a Typescript error which we are ts-ignoring below
  // Reference issue: https://github.com/microsoft/TypeScript/issues/38535

  return (
    <ChakraDrawer
      // @ts-ignore
      isOpen={isOpen}
      // @ts-ignore
      onClose={onClose}
      finalFocusRef={finalRef}
      {...props}
    >
      <DrawerOverlay>
        <DrawerContent>
          {closeButton && <DrawerCloseButton />}
          <DrawerHeader>{header}</DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
          <DrawerFooter>{footer}</DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </ChakraDrawer>
  );
};

Drawer.defaultProps = {
  placement: 'right',
  size: 'md'
};
