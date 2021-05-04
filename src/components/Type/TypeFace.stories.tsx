import React from 'react'
import {Story, Meta} from '@storybook/react'

import {TypeFace} from './TypeFace'

export default {
  title: 'Atoms/Type',
  component: TypeFace
} as Meta

const Template: Story = args => <TypeFace {...args} />

export const Default = Template.bind({})
Default.args = {
  variant: 'default'
}
