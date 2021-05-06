import React from 'react'
import cn from 'classnames'
import type {PropsWithChildren} from 'react'

type TextComponent = 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type TextSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
type FontWeight = 'font-medium' | 'font-normal' | 'font-black' | 'font-bold'

export function Text({
  as = 'h1',
  size = 'md',
  bold = false,
  className,
  children,
  ...props
}: PropsWithChildren<{
  as: TextComponent
  size: TextSizes
  bold: boolean
  className: string
}>) {
  const fontFamily = ['xs', 'sm', 'md', 'lg'].includes(size) ? 'font-roboto' : 'font-rubik'

  const fontSize = `text-${size}`

  let fontWeight: FontWeight

  if (fontFamily === 'font-roboto') {
    fontWeight = bold ? 'font-bold' : 'font-normal'
  } else {
    fontWeight = bold ? 'font-black' : 'font-medium'
  }

  const classes = cn(fontFamily, fontWeight, fontSize, className)

  return React.createElement(as, {className: classes, ...props}, children)
}

export function H1(props) {
  return <Text {...props} as="h1" size="5xl" />
}

export function H2(props) {
  return <Text {...props} as="h2" size="4xl" />
}

export function H3(props) {
  return <Text {...props} as="h3" size="3xl" />
}

export function H4(props) {
  return <Text {...props} as="h4" size="2xl" />
}

export function H5(props) {
  return <Text {...props} as="h5" size="xl" />
}

export function H6(props) {
  return <Text {...props} as="h6" size="sm" />
}
