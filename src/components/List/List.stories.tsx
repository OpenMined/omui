import React from 'react'
import {Story, Meta} from '@storybook/react'

import {
  List,
  ListAvatarItem,
  ListContainedItem,
  ListIconItem,
  ListItem,
  ListProgressItem,
  OrderedList,
  UnorderedList
} from './List'
import type {ListContainedProps, ListAvatarItemProps, ListIconProps, ListProps} from './List'

export default {
  title: 'Components/List',
  component: List,
  parameters: {
    controls: {
      include: ['children', 'size']
    }
  },
  argTypes: {
    children: {name: 'children', defaultValue: 'Text Here', control: {type: 'text'}},
    label: {name: 'label', defaultValue: 'Text Here', control: {type: 'text'}},
    description: {name: 'description', control: {type: 'text'}}
  }
} as Meta

export const DefaultList: Story<ListProps> = args => (
  <List size={args.size}>
    {Array.from(Array(10).keys()).map(() => (
      <ListItem>{args.children}</ListItem>
    ))}
  </List>
)

export const Ordered: Story<ListProps> = args => (
  <OrderedList size={args.size}>
    {Array.from(Array(10).keys()).map(() => (
      <ListItem>{args.children}</ListItem>
    ))}
  </OrderedList>
)

export const Unordered: Story<ListProps> = args => (
  <UnorderedList size={args.size}>
    {Array.from(Array(10).keys()).map(() => (
      <ListItem>{args.children}</ListItem>
    ))}
  </UnorderedList>
)

export const Avatar: Story<ListAvatarItemProps & ListProps> = args => (
  <List size={args.size}>
    {Array.from(Array(10).keys()).map(() => (
      <ListAvatarItem
        src="https://images.unsplash.com/photo-1623288749528-e40a033da0f7"
        label={args.label}
        description={args.description}
      />
    ))}
  </List>
)

const RandomIcon = ({className}: {className: string}) => (
  <svg className={className} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
    <path
      fill="currentColor"
      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"
    />
  </svg>
)

export const Icon: Story<ListIconProps & ListProps> = args => (
  <List size={args.size}>
    {Array.from(Array(10).keys()).map(() => (
      <ListIconItem icon={RandomIcon}>{args.children}</ListIconItem>
    ))}
  </List>
)

export const Progress: Story<ListProps> = args => (
  <List size={args.size}>
    {Array.from(Array(10).keys()).map(() => (
      <ListProgressItem>{args.children}</ListProgressItem>
    ))}
  </List>
)

export const Contained: Story<ListContainedProps & ListProps> = args => (
  <List size={args.size}>
    {Array.from(Array(10).keys()).map((_, idx) => (
      <ListContainedItem containedValue={idx + 1}>{args.children}</ListContainedItem>
    ))}
  </List>
)
