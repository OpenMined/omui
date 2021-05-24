import React from 'react'
import cn from 'classnames'
import type {PropsWithChildren} from 'react'

type ButtonStyles = 'gray' | 'primary' | 'outline' | 'ghost' | 'link'
type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'responsive'
type ButtonStatus = 'normal' | 'disabled'
type ButtonOutline = 'round' | 'square'

const buttonSizes = {
  xs: 'p-2 text-xs',
  sm: 'p-2 text-sm',
  md: 'py-2 px-3 text-base',
  lg: 'py-3 px-4 text-lg'
}

export function Button({
  style = 'gray',
  size = 'md',
  status = 'normal',
  outline = 'square',
  className,
  children,
  ...props
}: PropsWithChildren<{
  style: ButtonStyles
  size: ButtonSizes
  status: ButtonStatus
  outline: ButtonOutline
  className: String
}>) {
  const buttonSize = buttonSizes[size]
  const fonts = 'font-bold font-roboto'
  const linkHover = style === 'link' ? 'hover:underline hover:cursor-pointer' : ''
  const radius = outline == 'square' ? 'rounded' : 'rounded-full'
  const opacity = status == 'disabled' ? 'opacity-40' : 'opacity-100'

  let hover = 'hover:bg-gradient-to-r hover:from-white hover:to-transparent'
  let textColor = 'text-cyan-600'
  let backgroundColor = 'bg-transparent'
  let borderColor = 'border-transparent'

  if (style == 'primary' || style == 'outline') {
    borderColor = 'border-cyan-600'
  }

  if (style == 'gray') {
    textColor = 'text-primary-200'
    backgroundColor = 'bg-gray-800'
  }

  if (style == 'primary') {
    textColor = 'text-white'
    backgroundColor = 'bg-cyan-500'
  }

  if (style == 'outline') {
    const border = size == 'md' || size == 'lg' ? 'border-2' : 'border'
    borderColor = `border-cyan-500 ${border}`
    hover = 'hover:bg-primary-500 hover:text-white'
  }

  if (style == 'ghost') {
    hover = 'hover:bg-primary-100'
  }

  const classes = cn(
    'flex items-center text-center',
    fonts,
    buttonSize,
    textColor,
    borderColor,
    backgroundColor,
    linkHover,
    radius,
    opacity,
    hover,
    className
  )

  if (style === 'link') {
    return (
      <a {...props} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  )
}
