import React from 'react';
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  ModalProps as IModalProps,
  SlideFade
} from '@chakra-ui/core';

import { default as ModalStyle } from './modal.style';

type ModalProps = IModalProps & {
  children: string | React.ReactNode;
  header: string;
  footer?: string;
  showClose?: boolean;
};

export const Modal = ({
  children,
  header,
  footer,
  showClose,
  ...props
}: ModalProps) => (
  <SlideFade in={props.isOpen}>
    {(styles) => (
      <ChakraModal {...props}>
        {/* @ts-ignore */}
        <ModalOverlay opacity={styles.opacity}>
          {/* @ts-ignore */}
          <ModalContent {...styles}>
            <ModalHeader>{header}</ModalHeader>
            {showClose && <ModalCloseButton mt="0.4rem" />}
            <ModalBody>{children}</ModalBody>
            {footer && <ModalFooter>{footer}</ModalFooter>}
          </ModalContent>
        </ModalOverlay>
      </ChakraModal>
    )}
  </SlideFade>
);

Modal.defaultProps = {
  ...ModalStyle.defaultProps,
  showClose: true,
  isCentered: false
};
