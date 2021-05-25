import React from 'react'
import cn from 'classnames'

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
  disabled,
  className,
  ...props
}: {
  style: ButtonStyles
  size: ButtonSizes
  status: ButtonStatus
  outline: ButtonOutline
  className: string
  disabled: boolean
}) {
  const buttonSize = buttonSizes[size]
  const fontWeight = 'font-bold'
  const linkHover = style === 'link' ? 'inline-block hover:underline cursor-pointer' : ''
  const radius = outline === 'square' ? 'rounded' : 'rounded-full'
  const textColor = 'text-primary-600'
  const backgroundColor = 'bg-transparent'
  const borderColor = 'border-transparent'

  let hover = 'hover:from-gradient-white'
  let buttonClasses = `${textColor} ${backgroundColor} ${borderColor}`

  if (style === 'gray') {
    buttonClasses = 'text-primary-200 bg-gray-800 bg-gradient-to-r'
  } else if (style === 'primary') {
    buttonClasses = 'text-white bg-primary-500 bg-gradient-to-r border-primary-600'
  } else if (style === 'outline') {
    const border = size === 'md' || size === 'lg' ? 'border-2' : 'border'
    buttonClasses = `${textColor} hover:text-white border-primary-500 hover:bg-primary-500 ${border}`
  } else if (style === 'ghost') {
    hover += ' hover:bg-primary-100'
  }

  const classes = cn(
    'flex items-center text-center space-x-2',
    fontWeight,
    buttonSize,
    textColor,
    borderColor,
    backgroundColor,
    linkHover,
    radius,
    hover,
    buttonClasses,
    disabled && 'opacity-40 cursor-not-allowed',
    className
  )

  if (style === 'link') {
    return <a {...props} className={classes} />
  }

  return <button {...props} className={classes} />
}
