import React from 'react'
import {Story, Meta} from '@storybook/react'

import {Text, H1, H2, H3, H4, H5, H6} from './Text'

export default {
  title: 'Atoms/Type',
  component: Text
} as Meta

const Template: Story = args => {
  const types = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl']

  return types.map(type => <Text size={type}>{type}</Text>)
}

const HeadingStory: Story = args => {
  return (
    <>
      <H1>Heading 1</H1>
      <H2>Heading 2</H2>
      <H3>Heading 3</H3>
      <H4>Heading 4</H4>
      <H5>Heading 5</H5>
      <H6>Heading 6</H6>
    </>
  )
}

const Template1: Story = args => (
  <>
    <h1 className="text-4xlarge my-4">Default</h1>
    <div className="flex flex-row mb-4">
      <div className="pr-4">
        <p className="mb-2 text-center text-small-bold">Regular</p>
        <p className="text-xsmall">XSmall</p>
        <p className="text-small">Small</p>
        <p className="text-medium">Medium</p>
        <p className="text-large">Large</p>
        <h1 className="text-xlarge">XLarge</h1>
        <h2 className="text-2xlarge">2XLarge</h2>
        <h3 className="text-3xlarge">3XLarge</h3>
        <h4 className="text-4xlarge">4XLarge</h4>
        <h5 className="text-5xlarge">5XLarge</h5>
        <h6 className="text-6xlarge">6XLarge</h6>
      </div>
      <div>
        <p className="mb-2 text-center text-small-bold">Bold</p>
        <p className="text-xsmall-bold">XSmall</p>
        <p className="text-small-bold">Small</p>
        <p className="text-medium-bold">Medium</p>
        <p className="text-large-bold">Large</p>
        <h1 className="text-xlarge-bold">XLarge</h1>
        <h2 className="text-2xlarge-bold">2XLarge</h2>
        <h3 className="text-3xlarge-bold">3XLarge</h3>
        <h4 className="text-4xlarge-bold">4XLarge</h4>
        <h5 className="text-5xlarge-bold">5XLarge</h5>
        <h6 className="text-6xlarge-bold">6XLarge</h6>
      </div>
    </div>
    <hr />
    <h1 className="my-4 text-4xlarge">Underlined</h1>
    <div className="flex flex-row mb-4">
      <div className="pr-4">
        <p className="mb-2 text-center text-small-bold">Regular</p>
        <p className="underline text-xsmall">XSmall</p>
        <p className="underline text-small">Small</p>
        <p className="underline text-medium">Medium</p>
        <p className="underline text-large">Large</p>
        <h1 className="underline text-xlarge">XLarge</h1>
        <h2 className="underline text-2xlarge">2XLarge</h2>
        <h3 className="underline text-3xlarge">3XLarge</h3>
        <h4 className="underline text-4xlarge">4XLarge</h4>
        <h5 className="underline text-5xlarge">5XLarge</h5>
        <h6 className="underline text-6xlarge">6XLarge</h6>
      </div>
      <div>
        <p className="mb-2 text-center text-small-bold">Bold</p>
        <p className="underline text-xsmall-bold">XSmall</p>
        <p className="underline text-small-bold">Small</p>
        <p className="underline text-medium-bold">Medium</p>
        <p className="underline text-large-bold">Large</p>
        <h1 className="underline text-xlarge-bold">XLarge</h1>
        <h2 className="underline text-2xlarge-bold">2XLarge</h2>
        <h3 className="underline text-3xlarge-bold">3XLarge</h3>
        <h4 className="underline text-4xlarge-bold">4XLarge</h4>
        <h5 className="underline text-5xlarge-bold">5XLarge</h5>
        <h6 className="underline text-6xlarge-bold">6XLarge</h6>
      </div>
    </div>
    <hr />
    <h1 className="my-4 text-4xlarge">Uppercased</h1>
    <div className="flex flex-row mb-4">
      <div className="pr-4">
        <p className="mb-2 text-center text-small-bold">Regular</p>
        <p className="upper-xsmall">XSmall</p>
        <p className="upper-small">Small</p>
        <p className="upper-medium">Medium</p>
        <p className="upper-large">Large</p>
        <h1 className="upper-xlarge">XLarge</h1>
        <h2 className="upper-2xlarge">2XLarge</h2>
        <h3 className="upper-3xlarge">3XLarge</h3>
        <h4 className="upper-4xlarge">4XLarge</h4>
        <h5 className="upper-5xlarge">5XLarge</h5>
        <h6 className="upper-6xlarge">6XLarge</h6>
      </div>
      <div>
        <p className="mb-2 text-center text-small-bold">Bold</p>
        <p className="upper-xsmall-bold">XSmall</p>
        <p className="upper-small-bold">Small</p>
        <p className="upper-medium-bold">Medium</p>
        <p className="upper-large-bold">Large</p>
        <h1 className="upper-xlarge-bold">XLarge</h1>
        <h2 className="upper-2xlarge-bold">2XLarge</h2>
        <h3 className="upper-3xlarge-bold">3XLarge</h3>
        <h4 className="upper-4xlarge-bold">4XLarge</h4>
        <h5 className="upper-5xlarge-bold">5XLarge</h5>
        <h6 className="upper-6xlarge-bold">6XLarge</h6>
      </div>
    </div>
    <hr />
    <h1 className="my-4 text-4xlarge">Monospace</h1>
    <div className="flex flex-row mb-4">
      <div className="pr-4">
        <p className="mb-2 text-center text-small-bold">Regular</p>
        <p className="mono-xsmall">XSmall</p>
        <p className="mono-small">Small</p>
        <p className="mono-medium">Medium</p>
        <p className="mono-large">Large</p>
        <h1 className="mono-xlarge">XLarge</h1>
        <h2 className="mono-2xlarge">2XLarge</h2>
        <h3 className="mono-3xlarge">3XLarge</h3>
        <h4 className="mono-4xlarge">4XLarge</h4>
        <h5 className="mono-5xlarge">5XLarge</h5>
        <h6 className="mono-6xlarge">6XLarge</h6>
      </div>
      <div>
        <p className="mb-2 text-center text-small-bold">Bold</p>
        <p className="mono-xsmall-bold">XSmall</p>
        <p className="mono-small-bold">Small</p>
        <p className="mono-medium-bold">Medium</p>
        <p className="mono-large-bold">Large</p>
        <h1 className="mono-xlarge-bold">XLarge</h1>
        <h2 className="mono-2xlarge-bold">2XLarge</h2>
        <h3 className="mono-3xlarge-bold">3XLarge</h3>
        <h4 className="mono-4xlarge-bold">4XLarge</h4>
        <h5 className="mono-5xlarge-bold">5XLarge</h5>
        <h6 className="mono-6xlarge-bold">6XLarge</h6>
      </div>
    </div>
  </>
)

export const Default = Template.bind({})

export const Headings = HeadingStory.bind({})

Default.args = {
  variant: 'default'
}
