import React from 'react'
import {Story, Meta} from '@storybook/react'

import {Button} from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    backgroundColor: {control: 'color'}
  }
} as Meta

const Template: Story = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  variant: 'primary',
  children: 'Button'
}
