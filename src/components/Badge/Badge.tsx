import React, {forwardRef} from 'react'
import cn from 'classnames'
import type {HTMLAttributes, PropsWithRef} from 'react'

export type BadgeVariantProp = 'gray' | 'primary' | 'tertiary' | 'quaternary' | 'danger' | 'success'
export type BadgeTypeProp = 'outline' | 'subtle' | 'solid'

interface Props extends HTMLAttributes<HTMLDivElement> {
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

/**
 * All possible Badge types in OMUI.
 */
type Badges = {
  [k in BadgeVariantProp]: {
    [o in BadgeTypeProp]: string
  }
}

const badges: Badges = Object.assign(
  {},
  ...Object.keys(colorByVariant).map(variant => {
    const color = colorByVariant[variant]
    return {
      [variant]: {
        outline: [
          'py-px border',
          `border-${color}-500 text-${color}-600 dark:border-${color}-200 dark:text-${color}-200`
        ],
        subtle: ['py-0.5', `bg-${color}-100 text-${color}-600`],
        solid: ['py-0.5', color === 'gray' ? `text-primary-200 bg-gray-800` : `text-white bg-${color}-500`]
      }
    }
  })
)

const defaultClass = 'inline-block h-5.5 font-roboto text-xs font-bold px-1.5 rounded-sm leading-normal'

const Badge = forwardRef<HTMLDivElement, Props>(function Badge(
  {className, children, variant = 'primary', type = 'outline', ...props},
  ref
) {
  const classes = cn(defaultClass, badges[variant]?.[type], className)

  return (
    <div className={classes} ref={ref} {...props}>
      {children}
    </div>
  )
})

export {Badge}
