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
    return (
      <UnorderedList {...props}>
        {items.map(({ label, ...item }: ItemProps) => (
          <ListItem {...item} key={label}>
            {label}
          </ListItem>
        ))}
      </UnorderedList>
    );
  }

  return false;
};
