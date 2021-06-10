import React from 'react'
import {Story, Meta} from '@storybook/react'

import {Badge, BadgeProps} from './Badge'

export default {
  title: 'Components/Badges',
  component: Badge
} as Meta

const Template: Story<BadgeProps> = args => <Badge {...args}>{args.variant}</Badge>

export const Default = Template.bind({})
