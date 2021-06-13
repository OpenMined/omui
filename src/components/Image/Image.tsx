import React, {PropsWithRef} from 'react'
import cn from 'classnames'

export type ImageRatioProp = '16:9' | '4:3' | '3:2' | '1:1'
export type ImageOrientationProp = 'portrait' | 'landscape'

export type ImageProps = PropsWithRef<
  {
    /**
     * The alt attribute of the image, sometimes required for accessibility purposes. Please refer
     * to {@link.https://www.w3.org/WAI/tutorials/images} for more information on image accessibility.
     * @defaultValue ''
     */
    alt?: string
    /**
     * The aspect ratio of the image.
     * @defaultValue 16:9
     */
    ratio?: ImageRatioProp
    /**
     * The orientation of the image.
     * If landscape = portrait, the aspect ratio will be reversed (16:9 → 9:16).
     * @defaultValue landscape
     */
    orientation?: ImageOrientationProp
    /**
     * Props passed to a <div> that engulfs the image.
     */
    containerProps?: React.ComponentProps<'div'>
  } & React.ComponentProps<'img'>
>

type ValidAspectRatios = {
  [k in ImageRatioProp | '9:16' | '3:4' | '2:3']: string | string[]
}

const validAspectRatios: ValidAspectRatios = {
  '1:1': 'aspect-w-1 aspect-h-1',
  '2:3': 'aspect-w-2 aspect-h-3',
  '3:2': 'aspect-w-3 aspect-h-2',
  '3:4': 'aspect-w-3 aspect-h-4',
  '4:3': 'aspect-w-4 aspect-h-3',
  '9:16': 'aspect-w-9 aspect-h-16',
  '16:9': 'aspect-w-16 aspect-h-19'
}

const defaultContainerClasses = 'bg-gradient-to-tr from-primary-200 to-error-200 hover:opacity-50 color-transparent'
const defaultImageClasses = 'object-cover object-center'

const Image = React.forwardRef<HTMLDivElement, ImageProps>(function Image(
  {alt = '', orientation = 'landscape', ratio = '16:9', className, containerProps, ...props},
  ref
) {
  const splittedRatio = ratio.split(':')
  const ratioByOrientation = orientation === 'landscape' ? splittedRatio : splittedRatio.reverse()

  const aspectClasses = `aspect-w-${ratioByOrientation[0]} aspect-h-${ratioByOrientation[1]}`

  const containerClasses = cn(
    'bg-gradient-to-tr from-primary-200 to-error-200 hover:opacity-50 color-transparent',
    aspectClasses,
    containerProps?.className
  )

  return (
    <div {...containerProps} className={containerClasses} ref={ref}>
      <img alt={alt} className={cn('object-cover object-center', className)} {...props} />
    </div>
  )
})

export {Image}
