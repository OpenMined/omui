import React from 'react';
import {
  Accordion as ChakraAccordion,
  AccordionItem as ChakraAccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel as ChakraAccordionPanel,
  AccordionProps as IAccordionProps,
  AccordionPanelProps as IAccordionPanelProps,
  AccordionItemProps as IAccordionItemProps
} from '@chakra-ui/core';

import { fonts } from '../../theme/foundations/typography';
import { themeFontSizes } from '../../theme/helpers';
import { Box } from '../box';

type AccordionTitleWeight = 'normal' | 'medium' | 'bold';
type AccordionTitleSize = 'md' | 'lg' | 'xl' | '2xl' | '4xl';
type AccordionFontStyles = keyof typeof fonts;
type AccordionTextSize = typeof themeFontSizes;

type AccordionSharedProps = {
  titleWeight?: AccordionTitleWeight;
  titleSize?: AccordionTitleSize;
  titleStyle?: AccordionFontStyles;
  textSize?: AccordionTextSize;
};

type AccordionProps = IAccordionProps &
  AccordionSharedProps & {
    items: AccordionItemProps[];
  };

type AccordionPanelProps =
  | IAccordionPanelProps
  | {
      fontSize?: AccordionTextSize;
      children: React.ReactNode;
    };

type AccordionItemProps = IAccordionItemProps &
  AccordionSharedProps & {
    title: string;
  };

const Accordion = ({
  children,
  titleWeight,
  titleSize,
  titleStyle,
  textSize,
  items,
  ...props
}: AccordionProps) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    const props = { titleWeight, titleSize, titleStyle, textSize };
    if (React.isValidElement(child)) {
      return React.cloneElement(child, props);
    }
    return child;
  });

  return (
    <ChakraAccordion {...props}>
      {items
        ? items.map((item) => (
            <AccordionItem
              key={item.title}
              title={item.title}
              titleWeight={titleWeight}
              titleSize={titleSize}
              titleStyle={titleStyle}
              textSize={textSize}
            >
              {item.children}
            </AccordionItem>
          ))
        : childrenWithProps}
    </ChakraAccordion>
  );
};

const AccordionPanel = ({ children, ...props }: AccordionPanelProps) => (
  <ChakraAccordionPanel {...props}>{children}</ChakraAccordionPanel>
);

const AccordionItem = ({
  title,
  children,
  titleWeight,
  titleSize,
  titleStyle,
  textSize,
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
      <AccordionPanel fontSize={textSize || 'md'}>{children}</AccordionPanel>
    </ChakraAccordionItem>
  );
};

export {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
};
