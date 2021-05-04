import React from 'react'
import cn from 'classnames'
import type {ComponentProps} from 'react'

// minor example
export function TypeFace(props: ComponentProps<'typeface'>) {
  return (
    <>
      <h1 className="text-4xlarge my-4">Default</h1>
      <div className="flex flex-row">
        <div className="pr-4">
          <p className="text-small-bold mb-2 text-center">Regular</p>
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
          <p className="text-small-bold mb-2 text-center">Bold</p>
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
    </>
  )
}
