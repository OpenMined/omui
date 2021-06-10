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

const SIZES = {
  container: {
    xs: 'w-6 h-6',
    sm: 'w-8 h-8',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
    xl: 'w-12 h-12'
  },
  icon: {
    xs: 'w-3 h-3',
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-4.5 h-4.5',
    xl: 'w-5 h-5'
  }
}

const Icon = React.forwardRef<HTMLSpanElement, IconProps>(function Icon(
  {size = 'md', variant = 'solid', container = 'round', icon: IconElement, className, containerProps, ...props},
  ref
) {
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

  const containerClassNames = cn(
    'flex items-center justify-center',
    variants,
    borderRadius,
    SIZES.container[size],
    containerProps?.className
  )
  const iconClassNames = cn(SIZES.icon[size], className)

  return (
    <span {...containerProps} className={containerClassNames} ref={ref}>
      <IconElement className={iconClassNames} {...props} />
    </span>
  )
})

export {Icon}
