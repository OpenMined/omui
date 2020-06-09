import React from 'react';
import {
  Accordion as ChakraAccordion,
  AccordionItem as ChakraAccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/core';

AccordionPanel.defaultProps = {
  pb: 4,
};

const AccordionTitle = ({ children, ...props }) => (
  <Box flex="1" textAlign="left" {...props}>
    {children}
  </Box>
);

AccordionTitle.defaultProps = {
  fontWeight: 'semibold',
};

export const Accordion = ({ children, ...props }) => (
  <ChakraAccordion {...props}>{children}</ChakraAccordion>
);

export const AccordionItem = ({ title, children, ...props }) => (
  <ChakraAccordionItem key={title} {...props}>
    <AccordionHeader>
      <AccordionTitle>{title}</AccordionTitle>
      <AccordionIcon />
    </AccordionHeader>
    <AccordionPanel>{children}</AccordionPanel>
  </ChakraAccordionItem>
);
