import React from 'react'
import cn from 'classnames'

export type AvatarProps = {
  ratio?: '16:9' | '4:3' | '1:1'
  orientation?: 'portrait' | 'landscape'
} & React.ComponentProps<'img'>

const ratios = {
  '16:9': 'aspect-w-16 aspect-h-9',
  '9:16': 'aspect-w-9 aspect-h-16',
  '4:3': 'aspect-w-4 aspect-h-3',
  '3:4': 'aspect-w-3 aspect-h-4',
  '3:2': 'aspect-w-3 aspect-h-2',
  '2:3': 'aspect-w-2 aspect-h-3',
  '1:1': 'aspect-w-1 aspect-h-1'
}

export function Image({
  src = '',
  orientation = 'landscape',
  ratio = '16:9',
  className,
  children,
  ...props
}: AvatarProps) {
  const aspectRatio = orientation === 'landscape' ? ratio : ratio.split(':')?.reverse().join(':')
  const bg = 'bg-gradient-to-tr from-primary-200 to-error-200'
  const opacity = 'hover:opacity-50'

  const classes = cn(ratios[aspectRatio], opacity, bg)

  return (
    <div className={classes}>
      <img src={src} className="object-cover object-center" {...props} />
    </div>
  )
}
