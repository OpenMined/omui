import React from 'react';
import {
  Accordion as ChakraAccordion,
  AccordionItem as ChakraAccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AccordionProps
} from '@chakra-ui/core';
import { Box } from './Box';

export const Accordion = ({ children, ...props }: AccordionProps) => (
  <ChakraAccordion {...props}>{children}</ChakraAccordion>
);

interface AccordionItemProps {
  title: string;
  children: string | React.ReactNode;
}

export const AccordionItem = ({
  title,
  children,
  ...props
}: AccordionItemProps) => {
  const itemProps: object = {
    key: title,
    ...props
  };

  return (
    <ChakraAccordionItem {...itemProps}>
      <AccordionButton _focus={{ outline: 'none' }}>
        <Box flex="1" textAlign="left">
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>{children}</AccordionPanel>
    </ChakraAccordionItem>
  );
};
