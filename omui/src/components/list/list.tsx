import React from 'react';
import {
  List as ChakraList,
  OrderedList,
  UnorderedList,
  ListItem,
  ListIcon,
  ListProps as IListProps
} from '@chakra-ui/core';

import { Flex } from '../flex/flex';
import { Box } from '../box/box';

type ListProps = IListProps & {
  type: 'ordered' | 'unordered' | React.ReactNode;
  items: object[];
};

export const List = ({ type, items, ...props }: ListProps) => {
  if (type === 'ordered') {
    return (
      <OrderedList {...props}>
        {/* @ts-ignore */}
        {items.map(({ label, ...item }) => (
          <ListItem {...item} key={label}>
            {label}
          </ListItem>
        ))}
      </OrderedList>
    );
  } else if (type === 'unordered') {
    // TODO: Once this PR is merged (https://github.com/chakra-ui/chakra-ui/pull/1032), the styleType prop below will not be needed
    return (
      <UnorderedList {...props} styleType="bullet">
        {/* @ts-ignore */}
        {items.map(({ label, ...item }) => (
          <ListItem {...item} key={label}>
            {label}
          </ListItem>
        ))}
      </UnorderedList>
    );
  }

  return (
    <ChakraList {...props}>
      {/* @ts-ignore */}
      {items.map(({ label, ...item }) => (
        <ListItem {...item} key={label}>
          <Flex alignItems="center">
            {/* @ts-ignore */}
            <ListIcon as={type} />
            <Box>{label}</Box>
          </Flex>
        </ListItem>
      ))}
    </ChakraList>
  );
};
