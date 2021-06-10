import React from 'react'
import cn from 'classnames'

type IconSizeProp = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'custom'
type IconVariantProp = 'gray' | 'solid' | 'subtle' | 'outline' | 'ghost'
type IconContainerProp = 'round' | 'square'

export type IconProps = {
  /**
   * The size of the icon.
   * @defaultValue md
   */
  size?: IconSizeProp
  /**
   * The variant of the icon.
   * @defaultValue solid
   */
  variant?: IconVariantProp
  /**
   * The container of the icon
   * @defaultValue round
   */
  container?: IconContainerProp
  icon: React.ElementType
  containerProps?: React.ComponentPropsWithoutRef<'span'>
  containerClassName?: string
  className?: string
}

const VARIANTS = {
  OUTLINE:
    'bg-transparent shadow-icon-border border-primary-500 border dark:border-primary-200 text-primary-500 dark:text-primary-200',
  GRAY: 'bg-gray-800 text-primary-200',
  SOLID: 'bg-primary-500 text-white',
  SUBTLE: 'bg-primary-200 text-primary-600',
  GHOST: 'text-primary-500'
}

export function Icon({
  size = 'md',
  variant = 'solid',
  container = 'round',
  icon: Icon,
  className,
  containerClassName,
  containerProps,
  ...props
}: IconProps) {
  const variants = {
    [VARIANTS.OUTLINE]: variant === 'outline',
    [VARIANTS.GRAY]: variant === 'gray',
    [VARIANTS.SOLID]: variant === 'solid',
    [VARIANTS.SUBTLE]: variant === 'subtle',
    [VARIANTS.GHOST]: variant === 'ghost'
  }
  const borderRadius = {
    'rounded-full': container === 'round',
    'rounded-md': container === 'square'
  }
  const sizes = {
    container: {
      'w-6 h-6': size === 'xs',
      'w-8 h-8': size === 'sm',
      'w-9 h-9': size === 'md',
      'w-11 h-11': size === 'lg',
      'w-12 h-12': size === 'xl'
    },
    icon: {
      'w-3 h-3': size === 'xs',
      'w-3.5 h-3.5': size === 'sm',
      'w-4 h-4': size === 'md',
      'w-4.5 h-4.5': size === 'lg',
      'w-5 h-5': size === 'xl'
    }
  }

  const containerClassNames = cn(
    'flex items-center justify-center',
    variants,
    borderRadius,
    sizes.container,
    containerClassName
  )
  const iconClassNames = cn(sizes.icon, className)

  return (
    <span className={containerClassNames} {...containerProps}>
      <Icon className={iconClassNames} {...props} />
    </span>
  )
}
