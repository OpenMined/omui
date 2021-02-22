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
  SlideFade,
  ModalContentProps
} from '@chakra-ui/core';

import { default as ModalStyle } from './modal.style';

type ModalProps = IModalProps & {
  children: string | React.ReactNode;
  header: string;
  footer?: string;
  showClose?: boolean;
};

const Modal = ({
  children,
  header,
  footer,
  showClose,
  ...props
}: ModalProps) => (
  <SlideFade in={props.isOpen}>
    <ChakraModal {...props}>
      <ModalOverlay>
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          {showClose && <ModalCloseButton mt="0.4rem" />}
          <ModalBody>{children}</ModalBody>
          {footer && <ModalFooter>{footer}</ModalFooter>}
        </ModalContent>
      </ModalOverlay>
    </ChakraModal>
  </SlideFade>
);

Modal.defaultProps = {
  ...ModalStyle.defaultProps,
  showClose: true,
  isCentered: false
};

export {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
};
