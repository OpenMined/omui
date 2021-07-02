import React, {forwardRef} from 'react'
import cn from 'classnames'
import {Text} from '../Typography/Text'
import type {HTMLAttributes, PropsWithRef} from 'react'
import type {OmuiColors} from '@/styles/colorType'

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

const VARIANT_COLORS: Record<BadgeVariantProp, OmuiColors> = {
  gray: 'gray',
  primary: 'primary',
  tertiary: 'violet',
  quaternary: 'blue',
  danger: 'error',
  success: 'success'
} as const

type Badges = {
  [K in BadgeVariantProp]: {
    [O in BadgeTypeProp]: string | string[]
  }
}

// type Badges2 = Record<BadgeVariantProp, Record<BadgeTypeProp, string | string[]>>
const badges: Badges = Object.assign(
  {},
  ...(Object.keys(VARIANT_COLORS) as Array<BadgeVariantProp>).map(variant => {
    const color = VARIANT_COLORS[variant]
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

const defaultClass = 'inline-block text-xs leading-normal px-1.5 rounded-sm'

/**
 * Badges are used to indicate categories, rank, or classifier.
 */
const Badge = forwardRef<HTMLDivElement, Props>(function Badge(
  {className, children, variant = 'primary', type = 'outline', ...props},
  ref
) {
  const classes = cn(defaultClass, badges[variant]?.[type], className)

  return (
    <div className={classes} ref={ref} {...props}>
      <Text bold size="xs" className="leading-normal">
        {children}
      </Text>
    </div>
  )
})

export {Badge}
