import React from 'react'
import cn from 'classnames'

export type RatioProp = '16:9' | '4:3' | '3:2' | '1:1'
export type OrientationProp = 'portrait' | 'landscape'
export type LoadingProp = 'lazy' | 'eager' | 'auto'

export type ImageProps = {
  /**
   * The alt attribute of the image, required for a11y purposes
   */
  alt: string
  /**
   * The aspect ratio of the image.
   * @defaultValue 16:9
   */
  ratio?: RatioProp
  loading?: LoadingProp
  /**
   * The orientation of the image.
   * If landscape=portrait, the aspect ratio will be reversed (16:9 → 9:16)
   * @defaultValue landscape
   */
  orientation?: OrientationProp
  containerProps?: React.ComponentProps<'div'>
  containerClassName?: string
} & React.ComponentProps<'img'>

export function Image({
  alt,
  orientation = 'landscape',
  ratio = '16:9',
  containerClassName,
  className,
  containerProps,
  ...props
}: ImageProps) {
  const splittedRatio = ratio.split(':')
  const ratioByOrientation = orientation === 'landscape' ? splittedRatio : splittedRatio.reverse()

  const aspectClasses = `aspect-w-${ratioByOrientation[0]} aspect-h-${ratioByOrientation[1]}`

  const containerClasses = cn(
    'bg-gradient-to-tr from-primary-200 to-error-200 hover:opacity-50 color-transparent',
    aspectClasses,
    containerProps?.className
  )

  return (
    <div className={containerClasses} {...containerProps}>
      <img alt={alt} className={cn('object-cover object-center', className)} {...props} />
    </div>
  )
}
