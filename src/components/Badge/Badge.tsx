import React, {forwardRef} from 'react'
import cn from 'classnames'
import type {HTMLAttributes, PropsWithRef} from 'react'

export type BadgeVariantProp = 'gray' | 'primary' | 'tertiary' | 'quaternary' | 'danger' | 'success'
export type BadgeTypeProp = 'outline' | 'subtle' | 'solid'

interface Props extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The variant of the badge.
   * @defaultValue primary
   */
  variant: BadgeVariantProp
  /**
   * The type of the badge.
   * @defaultValue outline
   */
  type: BadgeTypeProp
}

export type BadgeProps = PropsWithRef<Props>

const colorByVariant = {
  gray: 'gray',
  primary: 'primary',
  tertiary: 'violet',
  quaternary: 'blue',
  danger: 'error',
  success: 'success'
}

const defaultClass = 'border font-roboto text-xs font-bold px-1.5 py-0.5 rounded-sm'

const Badge = forwardRef<HTMLSpanElement, Props>(function Badge(
  {className, children, variant = 'primary', type = 'outline', ...props},
  ref
) {
  const color = colorByVariant[variant]

  const types = {
    outline: [`border-${color}-600 text-${color}-600 dark:border-${color}-200 dark:text-${color}-200`],
    subtle: [`border-${color}-100 bg-${color}-100 text-${color}-600`],
    solid: [`border-${color}-500 bg-${color}-500 ${color === 'gray' ? 'text-primary-200' : 'text-white'}`]
  }

  const classes = cn(defaultClass, types[type], className)

  return (
    <span className={classes} ref={ref} {...props}>
      {children}
    </span>
  )
})

export {Badge}
