import React from 'react'
import cn from 'classnames'

type IconSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'responsive'
type IconStyles = 'gray' | 'solid' | 'subtle' | 'outline' | 'ghost'
type IconContainers = 'round' | 'square'

export type IconProps = {
  size?: IconSizes
  style?: IconStyles
  container?: IconContainers
  icon: React.ReactType
  className?: string
}

const iconSizes = {
  xs: 'w-3 h-3',
  sm: 'w-3.5 h-3.5',
  md: 'w-4 h-4',
  lg: 'w-4.5 h-4.5',
  xl: 'w-5 h-5'
}

const containerStyles = {
  xs: 'w-6 h-6',
  sm: 'w-8 h-8',
  md: 'w-9 h-9',
  lg: 'w-11 h-11',
  xl: 'w-12 h-12'
}

const borderRadiusStyles = {
  round: 'rounded-full',
  square: 'rounded-md'
}

function makeResponsive(styleObj) {
  return Object.keys(styleObj).reduce((prev, curr) => {
    const style = styleObj[curr]
    const styleRules = style.split(' ').map((rule: string) => (curr === 'xs' ? rule : `${curr}:${rule}`))
    return `${prev} ${styleRules.join(' ')}`
  }, '')
}

export function Icon({size = 'md', style = 'solid', container = 'round', icon, className}: IconProps) {
  let bg
  let fill
  let border

  if (style === 'outline') {
    bg = 'bg-transparent shadow-icon-border'
    border = 'border-primary-500 border dark:border-primary-200'
    fill = 'fill-current text-primary-500 dark:text-primary-200'
  } else if (style === 'gray') {
    bg = 'bg-gray-800'
    fill = 'fill-current text-primary-200'
  } else if (style === 'solid') {
    bg = 'bg-primary-500'
    fill = 'fill-current text-white'
  } else if (style === 'subtle') {
    bg = 'bg-primary-200'
    fill = 'fill-current text-primary-600'
  } else if (style === 'ghost') {
    fill = 'fill-current'
  }

  const borderRadius = borderRadiusStyles[container]
  const containerClasses = containerStyles[size]
  const iconSize = iconSizes[size]
  const classes = cn('flex items-center justify-center', bg, border, borderRadius, containerClasses, className)
  const iconClasses = cn(iconSize, fill)
  const IconComponent = icon

  if (style === 'ghost') {
    return <IconComponent className={iconClasses} />
  }

  return (
    <div className={classes}>
      <IconComponent className={iconClasses} />
    </div>
  )
}
