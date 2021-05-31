import React from 'react'
import cn from 'classnames'
import type {PropsWithChildren} from 'react'

type TextComponent = 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'a'
type TextSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl'
type FontWeight = 'font-medium' | 'font-normal' | 'font-black' | 'font-bold'

export function Text({
  as = 'h1',
  size = 'md',
  bold = false,
  uppercase = false,
  underline = false,
  mono = false,
  className,
  children,
  ...props
}: PropsWithChildren<{
  as: TextComponent
  size: TextSizes
  bold: boolean
  uppercase: boolean
  underline: boolean
  mono: boolean
  className: string
}>) {
  const underlined = underline ? 'underline' : ''

  let uppercased = uppercase ? 'uppercase' : ''

  let fontSize = `text-${size}`

  let fontFamily = ['xs', 'sm', 'md', 'lg'].includes(size) ? 'font-roboto' : 'font-rubik'

  let fontWeight: FontWeight

  if (fontFamily === 'font-roboto') {
    fontWeight = bold ? 'font-bold' : 'font-normal'
  } else {
    fontWeight = bold ? 'font-black' : 'font-medium'
  }

  if (mono) {
    fontFamily = 'fira-code'
    uppercased = 'uppercase'
  }

  if (mono && bold) {
    fontWeight = 'font-bold'
  }

  if (uppercase && ['4xl', '5xl', '6xl'].includes(size)) {
    if (size == '4xl') {
      fontSize = 'text-4xl-upper'
    } else if (size == '5xl') {
      fontSize = 'text-5xl-upper'
    } else {
      fontSize = 'text-6xl-upper'
    }
  }

  if (mono && ['4xl', '5xl'].includes(size)) {
    fontSize = size == '4xl' ? 'text-4xl-mono' : 'text-5xl-mono'
  }

  const classes = cn(fontFamily, fontWeight, fontSize, underlined, uppercased, className)

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
