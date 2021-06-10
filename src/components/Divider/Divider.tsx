import React, {PropsWithChildren} from 'react'
import cn from 'classnames'

export type OrientationProp = 'horizontal' | 'vertical'

export type DividerProps = PropsWithChildren<{
  /**
   * Define if the divider should be vertical
   * @defaultValue horizontal
   */
  orientation?: OrientationProp
  /**
   * Define the component element.
   * @defaultValue hr
   */
  component?: string
  /**
   * Define the element role.
   */
  role?: string
  className?: string
}>

export function Divider({
  orientation = 'horizontal',
  children,
  component = children ? 'div' : 'hr',
  role = component !== 'hr' ? 'separator' : undefined,
  className,
  ...props
}: DividerProps) {
  const orientationStyle = {
    'border-l h-full w-px': orientation === 'vertical',
    'border-t w-full': orientation === 'horizontal'
  }

  const classes = cn('border-gray-700 dark:border-gray-200', orientationStyle, className)

  return React.createElement(component, {className: classes, 'aria-orientation': orientation, role, ...props}, children)
}
