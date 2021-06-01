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

const smileyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 0.9375C6.50781 0.9375 0.4375 7.00781 0.4375 14.5C0.4375 21.9922 6.50781 28.0625 14 28.0625C21.4922 28.0625 27.5625 21.9922 27.5625 14.5C27.5625 7.00781 21.4922 0.9375 14 0.9375ZM18.375 10.125C19.3047 10.125 20.125 10.9453 20.125 11.875C20.125 12.8594 19.3047 13.625 18.375 13.625C17.3906 13.625 16.625 12.8594 16.625 11.875C16.625 10.9453 17.3906 10.125 18.375 10.125ZM9.625 10.125C10.5547 10.125 11.375 10.9453 11.375 11.875C11.375 12.8594 10.5547 13.625 9.625 13.625C8.64062 13.625 7.875 12.8594 7.875 11.875C7.875 10.9453 8.64062 10.125 9.625 10.125ZM20.2344 19.4766C18.7031 21.3359 16.4062 22.375 14 22.375C11.5391 22.375 9.24219 21.3359 7.71094 19.4766C6.94531 18.5469 8.3125 17.4531 9.02344 18.3281C10.2812 19.8047 12.0859 20.625 14 20.625C15.9141 20.625 17.6641 19.8047 18.9219 18.3281C19.6328 17.4531 21 18.5469 20.2344 19.4766Z"
      fill="#2D2B3A"
    />
  </svg>
)

const smileyIcon24 = () => (
  <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 0.9375C6.50781 0.9375 0.4375 7.00781 0.4375 14.5C0.4375 21.9922 6.50781 28.0625 14 28.0625C21.4922 28.0625 27.5625 21.9922 27.5625 14.5C27.5625 7.00781 21.4922 0.9375 14 0.9375ZM18.375 10.125C19.3047 10.125 20.125 10.9453 20.125 11.875C20.125 12.8594 19.3047 13.625 18.375 13.625C17.3906 13.625 16.625 12.8594 16.625 11.875C16.625 10.9453 17.3906 10.125 18.375 10.125ZM9.625 10.125C10.5547 10.125 11.375 10.9453 11.375 11.875C11.375 12.8594 10.5547 13.625 9.625 13.625C8.64062 13.625 7.875 12.8594 7.875 11.875C7.875 10.9453 8.64062 10.125 9.625 10.125ZM20.2344 19.4766C18.7031 21.3359 16.4062 22.375 14 22.375C11.5391 22.375 9.24219 21.3359 7.71094 19.4766C6.94531 18.5469 8.3125 17.4531 9.02344 18.3281C10.2812 19.8047 12.0859 20.625 14 20.625C15.9141 20.625 17.6641 19.8047 18.9219 18.3281C19.6328 17.4531 21 18.5469 20.2344 19.4766Z"
      fill="#2D2B3A"
    />
  </svg>
)

const simpleLinks = Array.from({length: 3}, () => ({
  title: 'Text Here',
  target: 'https://openmined.org',
  disabled: false
}))

const iconLinks = Array.from({length: 3}, () => ({
  title: 'Text Here',
  target: 'https://openmined.org',
  icon: smileyIcon
}))

const numberLinks = Array.from([1, 2, 3], n => ({
  title: 'Text Here',
  target: 'https://openmined.org',
  number: n
}))

const iconLinks24 = Array.from({length: 3}, () => ({
  title: 'Text Here',
  target: 'https://openmined.org',
  icon: smileyIcon24
}))

const avatarLinks = Array.from({length: 3}, () => ({
  title: 'Text Here',
  target: 'https://openmined.org',
  avatar:
    'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
}))

const prereqs = [
  {
    title: 'Text Here',
    target: 'https://openmined.org',
    disabled: false
  },
  {
    title: 'Text Here',
    target: 'https://openmined.org',
    disabled: true
  }
]

const Template: Story = args => {
  return (
    <div className="flex">
      <div className="sm:w-1/2">
        <Sidebar {...args} links={simpleLinks} heading="Heading 5" />
        <Sidebar {...args} links={iconLinks} progressPct={50} heading="Heading 5" />
        <br />
        <br />
        <Sidebar {...args} links={numberLinks} hasMessage={true} />
      </div>
      <div className="sm:w-1/2">
        <Sidebar {...args} links={avatarLinks} heading="Heading 5" />
        <Sidebar {...args} links={iconLinks24} heading="Heading 5" progressPct={25} />
        <br />
        <br />
        <Sidebar {...args} links={iconLinks24} borderLeft={true} hasMessage={true} prereqs={prereqs} />
      </div>
    </div>
  )
}

export const main = Template.bind({})
