import React from 'react'
import {Story, Meta} from '@storybook/react'

import {Divider} from './Divider'

export default {
  title: 'Atoms/Divider',
  component: Divider
} as Meta

const Template: Story = args => (
  <div style={{height: 200}}>
    <Divider {...args} />
  </div>
)

export const Default = Template.bind({})
