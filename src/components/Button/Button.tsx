import React from 'react'
import cn from 'classnames'
import type {ComponentProps} from 'react'

// minor example
export function Button(props: ComponentProps<'button'>) {
  return <button className={cn('p-4 bg-blue-500 text-white', props.className)} {...props} />
}
