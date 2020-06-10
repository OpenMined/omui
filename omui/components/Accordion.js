import React from 'react';
import {
  Accordion as ChakraAccordion,
  AccordionItem as ChakraAccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Text,
} from '@chakra-ui/core';

export const Accordion = ({ children, ...props }) => (
  <ChakraAccordion {...props}>{children}</ChakraAccordion>
);

export const AccordionItem = ({ title, children, ...props }) => (
  <ChakraAccordionItem key={title} {...props}>
    <AccordionHeader>
      <Text flex="1" textAlign="left" fontWeight="semibold">
        {title}
      </Text>
      <AccordionIcon />
    </AccordionHeader>
    <AccordionPanel pb={4}>{children}</AccordionPanel>
  </ChakraAccordionItem>
);
