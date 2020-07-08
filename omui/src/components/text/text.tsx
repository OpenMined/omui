import React from 'react';
import { Text as ChakraText } from '@chakra-ui/core';

export const Text = ChakraText;

type ParagraphProps = {
  size: 'lg' | 'md' | 'sm';
  children: string | React.ReactNode;
};

export const Paragraph = ({ size, children, ...props }: ParagraphProps) => (
  <Text {...props} fontSize={size} lineHeight="base">
    {children}
  </Text>
);

Paragraph.defaultProps = {
  size: 'md'
};
