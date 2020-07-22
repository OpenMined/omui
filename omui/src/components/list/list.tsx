import React from 'react';
import {
  OrderedList,
  UnorderedList,
  ListItem,
  ListProps as IListProps
} from '@chakra-ui/core';

type ItemProps = {
  label: string;
};

type ListProps = IListProps & {
  type: 'ordered' | 'unordered';
  items: ItemProps[];
};

export const List = ({ type, items, ...props }: ListProps) => {
  if (type === 'ordered') {
    return (
      <OrderedList {...props}>
        {items.map(({ label, ...item }: ItemProps) => (
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
        {items.map(({ label, ...item }: ItemProps) => (
          <ListItem {...item} key={label}>
            {label}
          </ListItem>
        ))}
      </UnorderedList>
    );
  }
};
