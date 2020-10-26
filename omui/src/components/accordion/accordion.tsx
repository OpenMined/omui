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

import { fonts } from '../../theme/foundations/typography';
import { Box } from '../box';

type AccordionTitleWeight = 'normal' | 'medium' | 'bold';
type AccordionTitleSize = 'md' | 'lg' | 'xl' | '2xl' | '4xl';
type AccordionFontStyles = keyof typeof fonts;

type AccordionProps = IAccordionProps & {
  titleWeight?: AccordionTitleWeight;
  titleSize?: AccordionTitleSize;
  titleStyle?: AccordionFontStyles;
};

type AccordionItemProps = IAccordionItemProps & {
  title: string;
  titleWeight?: AccordionTitleWeight;
  titleSize?: AccordionTitleSize;
  titleStyle?: AccordionFontStyles;
};

export const Accordion = ({
  children,
  titleWeight,
  titleSize,
  titleStyle,
  ...props
}: AccordionProps) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    const props = { titleWeight, titleSize, titleStyle };
    if (React.isValidElement(child)) {
      return React.cloneElement(child, props);
    }
    return child;
  });

  return <ChakraAccordion {...props}>{childrenWithProps}</ChakraAccordion>;
};

export const AccordionItem = ({
  title,
  children,
  titleWeight,
  titleSize,
  titleStyle,
  ...props
}: AccordionItemProps) => {
  const itemProps: object = {
    key: title,
    ...props
  };

  return (
    <ChakraAccordionItem {...itemProps}>
      <AccordionButton>
        <Box
          fontFamily={fonts[titleStyle || 'heading']}
          fontSize={titleSize || 'md'}
          fontWeight={titleWeight || 'normal'}
          flex="1"
          textAlign="left"
        >
          {title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>{children}</AccordionPanel>
    </ChakraAccordionItem>
  );
};
