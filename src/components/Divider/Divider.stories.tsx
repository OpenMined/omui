import React from 'react'
import {Story, Meta} from '@storybook/react'

import {Divider, DividerProps} from './Divider'

export default {
  title: 'Atoms/Divider',
  component: Divider
} as Meta

const Template: Story<DividerProps> = ({orientation}) => (
  <div style={{height: 200}}>
    <Divider orientation={orientation} />
  </div>
)

export const Default = Template.bind({})
