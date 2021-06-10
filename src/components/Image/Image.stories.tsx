import React from 'react'
import {Story, Meta} from '@storybook/react'
import {Image, ImageProps} from './Image'

const Template: Story<ImageProps> = args => {
  return (
    <div className="w-2/4">
      <Image {...args} />
    </div>
  )
}

export default {
  title: 'Atoms/Images',
  component: Image,
  argTypes: {
    src: {
      mapping: {
        Empty: '',
        Fox: 'https://images.unsplash.com/photo-1623288749528-e40a033da0f7',
        Building: 'https://images.unsplash.com/photo-1588892487050-67d92a5f4136'
      },
      defaultValue: 'Fox',
      control: {
        options: ['Empty', 'Fox', 'Building'],
        labels: {
          Empty: 'Empty',
          Fox: 'Fox',
          Building: 'Building'
        },
        type: 'select'
      }
    }
  }
} as Meta

export const Default = Template.bind({})
