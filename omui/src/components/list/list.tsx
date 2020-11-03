import React from 'react';
import {
  OrderedList,
  UnorderedList,
  ListItem,
  ListIcon,
  ListProps as IListProps
} from '@chakra-ui/core';

type ItemProps = {
  label: string;
};

type ListProps = IListProps & {
  type: 'ordered' | 'unordered';
  items: ItemProps[];
};

const List = ({ type, items, children, ...props }: ListProps) => {
  if (type === 'ordered') {
    return (
      <OrderedList {...props}>
        {items
          ? items.map(({ label, ...item }: ItemProps) => (
              <ListItem {...item} key={label}>
                {label}
              </ListItem>
            ))
          : children}
      </OrderedList>
    );
  } else if (type === 'unordered') {
    return (
      <UnorderedList {...props}>
        {items
          ? items.map(({ label, ...item }: ItemProps) => (
              <ListItem {...item} key={label}>
                {label}
              </ListItem>
            ))
          : children}
      </UnorderedList>
    );
  }

  return false;
};

export { List, ListItem, ListIcon };
