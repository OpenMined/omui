import React from 'react'
import {Story, Meta} from '@storybook/react'

import {Tag, TagProps} from './Tag'

const RandomIcon = (
  <svg viewBox="0 -2 16 16" xmlns="http://www.w3.org/2000/svg">
    <path
      fill="currentColor"
      d="M5.73047 10.7812C6.00391 11.0547 6.46875 11.0547 6.74219 10.7812L14.7812 2.74219C15.0547 2.46875 15.0547 2.00391 14.7812 1.73047L13.7969 0.746094C13.5234 0.472656 13.0859 0.472656 12.8125 0.746094L6.25 7.30859L3.16016 4.24609C2.88672 3.97266 2.44922 3.97266 2.17578 4.24609L1.19141 5.23047C0.917969 5.50391 0.917969 5.96875 1.19141 6.24219L5.73047 10.7812Z"
    />
  </svg>
)

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    onClick: {
      mapping: {
        true: () => console.log('click:omui-tag'),
        false: null
      },
      defaultValue: false,
      control: 'boolean'
    }
  }
} as Meta

const Template: Story<TagProps> = args => (
  <Tag {...args} icon={RandomIcon}>
    Tag children
  </Tag>
)

export const Default = Template.bind({})
