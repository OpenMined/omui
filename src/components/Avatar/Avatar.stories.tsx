import React from 'react'
import {Story, Meta} from '@storybook/react'
import {Avatar} from './Avatar'
import type {AvatarProps} from './Avatar'

const AvatarStory: Story<AvatarProps> = args => {
  return (
    <Avatar
      src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"
      size={args.size}
      show={args.show}
    />
  )
}

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      defaultValue: 'md',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl'],
      control: {type: 'select'}
    },
    show: {
      description: 'Indicates active alert or notification, or indicates online status',
      control: {type: 'boolean'}
    }
  },
  parameters: {
    controls: {
      include: ['size', 'show']
    }
  }
} as Meta

export const Template = AvatarStory.bind({})
