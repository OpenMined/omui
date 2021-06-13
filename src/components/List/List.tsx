import React, {SVGProps, useContext} from 'react'
import cn from 'classnames'
import {Avatar} from '../Avatar/Avatar'
import {Text} from '../Typography/Text'
import {Icon} from '../Icon/Icon'
import type {ElementType, HTMLAttributes, HTMLProps, PropsWithRef} from 'react'
import type {IconSizeProp} from '../Icon/Icon'
import type {TextSizeProp} from '../Typography/Text'

export type ListVariantProps = 'bullet' | 'number' | 'avatar' | 'progress' | 'icon' | 'contained'
export type ListSizeProp = 'md' | 'lg' | 'xl' | '2xl' | '3xl'

interface Props extends HTMLAttributes<HTMLUListElement> {
  /**
   * The size of the elements of the list.
   * @defaultValue md
   */
  size?: ListSizeProp
  /**
   * The font size of the text.
   * @defaultValue md
   */
  component?: ElementType
}

export type ListProps = PropsWithRef<Props>

const ListContext = React.createContext<{size: ListSizeProp}>({size: 'md'})

const spaceBetweenList: ListByStringSizes<string> = {
  md: 'space-y-5',
  lg: 'space-y-7',
  xl: 'space-y-8',
  '2xl': 'space-y-8',
  '3xl': 'space-y-8'
}

function List({component: Component = 'ul', size = 'md', className, ...props}: ListProps) {
  const classes = cn(`text-${size} text-gray-600 dark:text-gray-200`, spaceBetweenList[size], className)

  return (
    <ListContext.Provider value={{size}}>
      <Component className={classes} {...props} />
    </ListContext.Provider>
  )
}

function OrderedList(props: Exclude<ListProps, 'component'>) {
  const classes = 'list-decimal list-inside'
  return <List className={classes} {...props} component="ol" />
}

function UnorderedList(props: Exclude<ListProps, 'component'>) {
  const classes = 'list-disc list-inside'
  return <List className={classes} {...props} component="ul" />
}

const ListItem = ({children, ...props}: HTMLProps<HTMLLIElement>) => {
  return <li {...props}>{children}</li>
}

type TextSizes = ListByStringSizes<TextSizeProp>

type ListByStringSizes<T> = {
  [k in ListSizeProp]: T
}

const textSizeForAvatar: TextSizes = {
  md: 'sm',
  lg: 'md',
  xl: 'lg',
  '2xl': 'xl',
  '3xl': '2xl'
}

const textSizeForDescription: TextSizes = {
  md: 'sm',
  lg: 'md',
  xl: 'lg',
  '2xl': 'lg',
  '3xl': 'lg'
}

const spaceForAvatar: ListByStringSizes<string> = {
  md: 'ml-3',
  lg: 'ml-4',
  xl: 'ml-4',
  '2xl': 'ml-5',
  '3xl': 'ml-6'
}

export type ListAvatarItemProps = HTMLProps<HTMLLIElement> & {description?: string}

const ListAvatarItem = ({src, label, description, className, ...props}: ListAvatarItemProps) => {
  const {size} = useContext(ListContext)
  const classes = cn('flex items-center', className)
  const isLabelBold = !!(size !== '2xl' && size !== '3xl' && description)
  return (
    <ListItem className={classes} {...props}>
      <Avatar src={src} size={size} />
      <div className={cn('flex flex-col', spaceForAvatar[size])}>
        <Text size={textSizeForAvatar[size]} bold={isLabelBold}>
          {label}
        </Text>
        {description && <Text size={textSizeForDescription[size]}>{description}</Text>}
      </div>
    </ListItem>
  )
}

const iconSize: ListByStringSizes<IconSizeProp> = {
  md: 'xs',
  lg: 'sm',
  xl: 'md',
  '2xl': 'lg',
  '3xl': 'xl'
}

export type ListIconProps = HTMLProps<HTMLLIElement> & {icon: ElementType}

const ListIconItem = ({icon, className, children, ...props}: ListIconProps) => {
  const {size} = useContext(ListContext)
  return (
    <ListItem className={cn('flex', className)} {...props}>
      <Icon
        icon={icon}
        size={iconSize[size]}
        variant="ghost"
        className="fill-gray-800 dark:fill-white"
        containerProps={{className: 'mr-2'}}
      />
      {children}
    </ListItem>
  )
}

const ProgressIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M4.16133 9.11157C4.3957 9.34595 4.79414 9.34595 5.02852 9.11157L11.9191 2.22095C12.1535 1.98657 12.1535 1.58813 11.9191 1.35376L11.0754 0.51001C10.841 0.275635 10.466 0.275635 10.2316 0.51001L4.60664 6.13501L1.9582 3.51001C1.72383 3.27563 1.34883 3.27563 1.11445 3.51001L0.270703 4.35376C0.0363283 4.58813 0.0363283 4.98657 0.270703 5.22095L4.16133 9.11157Z"
      fill="currentColor"
    />
  </svg>
)

const containedSize: ListByStringSizes<string> = {
  md: 'w-4 h-4',
  lg: 'w-5 h-5',
  xl: 'w-6 h-6',
  '2xl': 'w-7 h-7',
  '3xl': 'w-8 h-8'
}

const ListProgressItem = ({className, children, ...props}: HTMLProps<HTMLLIElement>) => {
  const {size} = useContext(ListContext)
  return (
    <ListItem className={cn('flex items-center', className)} {...props}>
      <div
        className={cn(
          'flex items-center justify-center rounded-full bg-success-500 text-gray-800 dark:text-white dark:bg-success-400 mr-2',
          containedSize[size]
        )}
      >
        <ProgressIcon />
      </div>
      {children}
    </ListItem>
  )
}

export type ListContainedProps = HTMLProps<HTMLLIElement> & {containedValue: number | string}

const containedTextSize: ListByStringSizes<string> = {
  md: 'text-xs',
  lg: 'text-sm',
  xl: 'text-md',
  '2xl': 'text-lg',
  '3xl': 'text-xl'
}

const ListContainedItem = ({containedValue, className, children, ...props}: ListContainedProps) => {
  const {size} = useContext(ListContext)
  return (
    <ListItem className={cn('flex items-center', className)} {...props}>
      <div
        className={cn(
          'flex items-center justify-center rounded-full text-gray-50 bg-gray-800 mr-2',
          containedSize[size],
          containedTextSize[size]
        )}
      >
        {containedValue}
      </div>
      {children}
    </ListItem>
  )
}

export {List, UnorderedList, OrderedList, ListItem, ListAvatarItem, ListIconItem, ListProgressItem, ListContainedItem}
