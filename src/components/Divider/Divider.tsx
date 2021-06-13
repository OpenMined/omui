import React, {PropsWithChildren} from 'react'
import cn from 'classnames'

export type OrientationProp = 'horizontal' | 'vertical'

export type DividerProps = PropsWithChildren<{
  /**
   * Define the orientation of the divider
   * @defaultValue horizontal
   */
  orientation?: OrientationProp
  className?: string
}>

export function Divider({orientation = 'horizontal', children, className, ...props}: DividerProps) {
  const orientationStyle = {
    'border-l h-full w-px': orientation === 'vertical',
    'border-t w-full': orientation === 'horizontal'
  }
  const component = children ? 'div' : 'hr'
  const classes = cn('border-gray-700 dark:border-gray-200', orientationStyle, className)

  return React.createElement(
    component,
    {className: classes, 'aria-orientation': orientation, role: component !== 'hr' ? 'separator' : undefined, ...props},
    children
  )
}
