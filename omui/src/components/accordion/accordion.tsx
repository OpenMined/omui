import React from 'react';
import {
  Accordion as ChakraAccordion,
  AccordionItem as ChakraAccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  AccordionProps as IAccordionProps,
  AccordionItemProps as IAccordionItemProps
} from '@chakra-ui/core';

import { Box } from '../box';

type AccordionItemProps = IAccordionItemProps & {
  title: string;
};

type AccordionProps = IAccordionProps & {
  items: AccordionItemProps[];
};

export const Accordion = ({ children, items, ...props }: AccordionProps) => {
  return (
    <ChakraAccordion {...props}>
      {items
        ? items.map((item) => (
            <AccordionItem key={item.title} title={item.title}>
              {item.children}
            </AccordionItem>
          ))
        : children}
    </ChakraAccordion>
  );
};

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
      <AccordionButton>
        <Box flex="1" textAlign="left">
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>{children}</AccordionPanel>
    </ChakraAccordionItem>
  );
};
