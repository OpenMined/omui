import React from 'react'
import {Story, Meta} from '@storybook/react'

import {TypeStyle} from './TypeStyle'

export default {
  title: 'Atoms/Type',
  component: TypeStyle,
} as Meta

const Template: Story = args => <TypeStyle {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: 'default'
}
