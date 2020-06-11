import React from 'react';
import {
  Accordion as ChakraAccordion,
  AccordionItem as ChakraAccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  IAccordion,
  IAccordionItem
} from '@chakra-ui/core';
import { Text } from './Text';

export const Accordion = ({ children, ...props }: IAccordion) => (
  <ChakraAccordion {...props}>{children}</ChakraAccordion>
);

interface AccordionItemProps extends IAccordionItem {
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
      <AccordionHeader>
        <Text flex="1" textAlign="left" fontWeight="semibold">
          {title}
        </Text>
        <AccordionIcon />
      </AccordionHeader>
      <AccordionPanel pb={4}>{children}</AccordionPanel>
    </ChakraAccordionItem>
  );
};
