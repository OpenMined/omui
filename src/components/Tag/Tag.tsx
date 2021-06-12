import React from 'react'
import cn from 'classnames'
import type {ReactNode, HTMLAttributes, PropsWithChildren} from 'React'

export type TagSizeProp = 'sm' | 'md' | 'lg'

interface Props extends HTMLAttributes<HTMLElement> {
  /**
   * The variant of the Tag.
   * @defaultValue outline
   */
  variant: keyof typeof colorByVariant
  /**
   * The size of the Tag.
   * @defaultValue sm
   */
  size: TagSizeProp
  /**
   * Defines if the tag should be disabled.
   * @defaultValue false
   */
  disabled?: boolean
  /**
   * Defines if the tag should be pill shaped.
   * @defaultValue false
   */
  pill?: boolean
  /**
   * Render a icon as complement of the Tag.
   */
  icon?: ReactNode
  /**
   * Defines the position of the icon.
   */
  iconSide?: 'left' | 'right'
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export type TagProps = PropsWithChildren<Props>

const colorByVariant = {
  gray: 'gray',
  primary: 'primary',
  tertiary: 'violet',
  quaternary: 'blue'
}

const Tag = ({
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconSide,
  disabled,
  pill = false,
  onClick,
  className,
  children,
  ...props
}: TagProps) => {
  const clickable = !!onClick
  const color = colorByVariant[variant]
  const classes = cn(
    'inline-flex items-center px-2.5 py-1 transition transition-colors',
    `text-${size}`,
    `bg-${color}-100 text-${color}-600`,
    color === 'gray' ? 'hover:text-primary-200 hover:bg-gray-800' : `hover:text-white hover:bg-${color}-500`,
    disabled ? 'pointer-events-none opacity-50' : clickable && 'cursor-pointer',
    pill ? 'rounded-full' : 'rounded-sm',
    className
  )
  const iconClasses = cn('w-4 h-4', {'ml-1.5': iconSide === 'right', 'mr-1.5': iconSide === 'left'})

  const Component: keyof JSX.IntrinsicElements = clickable ? 'button' : 'span'

  return (
    <Component onClick={onClick} {...props} className={classes}>
      {Icon && iconSide === 'left' ? <span className={iconClasses}>{Icon}</span> : null}
      {children}
      {Icon && iconSide === 'right' ? <span className={iconClasses}>{Icon}</span> : null}
    </Component>
  )
}

export {Tag}
