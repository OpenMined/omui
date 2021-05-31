import React from 'react'
import {Story, Meta} from '@storybook/react'
import {Sidebar} from './Sidebar'

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  argTypes: {
    // style: {
    //   defaultValue: 'gray',
    //   options: ['gray', 'primary', 'outline', 'ghost', 'link'],
    //   control: {type: 'select'}
    // },
    // size: {
    //   defaultValue: 'md',
    //   options: ['xs', 'sm', 'md', 'lg', 'responsive'],
    //   control: {type: 'select'}
    // },
    // status: {
    //   defaultValue: 'normal',
    //   options: ['normal', 'disabled'],
    //   control: {type: 'radio'}
    // },
    // outline: {
    //   defaultValue: 'square',
    //   options: ['square', 'round'],
    //   control: {type: 'radio'}
    // }
  }
} as Meta

const Template: Story = args => {
  return (
    <>
      <Sidebar {...args} />
    </>
  )
}

export const main = Template.bind({})
