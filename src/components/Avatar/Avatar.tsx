import React from 'react'
import cn from 'classnames'

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
export type AvatarVariant = 'primary' | 'error' | 'warning' | 'gray' | 'success'
export type AvatarProps = {
  /**
   * Sets the avatar size
   * @defaultValue md
   */
  size?: AvatarSize
  /**
   * Sets the avatar variant to primary, error, warning, gray or success
   * @defaultValue primary
   */
  variant?: AvatarVariant
  /**
   * Indicates active alert or notification, or indicates online status
   * @defaultValue false
   */
  show?: boolean
  className?: string
} & React.ComponentProps<'img'>

const avatarSizes = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
  xl: 'w-12 h-12',
  '2xl': 'w-16 h-16',
  '3xl': 'w-20 h-20'
}

const alertSizes = {
  sm: 'w-2 h-2',
  md: 'w-2.5 h-2.5',
  lg: 'w-3 h-3',
  xl: 'w-3.5 h-3.5',
  '2xl': 'w-4 h-4',
  '3xl': 'w-6 h-6'
}

/**
 * Avatars are used to condense a profile or persona into more of an icon impression. They come in 6 sizes and can have an alert indicator to show or hide.
 */
function Avatar({size = 'md', variant = 'primary', show, className, ...props}: AvatarProps) {
  const classes = cn(avatarSizes[size], 'rounded-full', className)
  const indicatorClasses = cn(
    !show && 'hidden',
    'absolute bottom-0 right-0 block rounded-full ring-2 ring-white bg-gradient-to-r from-gradient-white',
    `bg-${variant}-500`,
    alertSizes[size]
  )

  return (
    <span className="inline-block relative">
      <img alt="avatar" className={classes} {...props} />
      <span className={indicatorClasses} />
    </span>
  )
}

export {Avatar}
