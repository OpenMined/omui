import React from 'react'
import cn from 'classnames'
import {H5, Text} from '../Typography/Text'
import {Button} from '../Button/Button'
import {Icon} from '../Icons/Icon'
import {Avatar} from '../Avatar/Avatar'

const messageIcon = () => (
  <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.5 8C20.5 3.875 16.0938 0.5 10.75 0.5C5.35938 0.5 1 3.875 1 8C1 9.64062 1.65625 11.0938 2.78125 12.3125C2.125 13.7656 1.09375 14.8906 1.09375 14.8906C1 14.9844 0.953125 15.1719 1 15.3125C1.09375 15.4531 1.1875 15.5 1.375 15.5C3.0625 15.5 4.46875 14.9375 5.5 14.3281C7 15.0781 8.82812 15.5 10.75 15.5C16.0938 15.5 20.5 12.1719 20.5 8ZM26.2188 18.3125C27.2969 17.0938 28 15.6406 28 14C28 10.9062 25.4688 8.1875 21.9062 7.0625C21.9531 7.39062 22 7.71875 22 8C22 12.9688 16.9375 17 10.75 17C10.2344 17 9.71875 17 9.25 16.9531C10.7031 19.625 14.1719 21.5 18.25 21.5C20.1719 21.5 21.9531 21.0781 23.4531 20.3281C24.4844 20.9375 25.8906 21.5 27.625 21.5C27.7656 21.5 27.9062 21.4531 27.9531 21.3125C28 21.1719 28 20.9844 27.8594 20.8906C27.8594 20.8906 26.8281 19.7656 26.2188 18.3125Z"
      fill="#2D2B3A"
    />
  </svg>
)

const smSmileyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 0.9375C6.50781 0.9375 0.4375 7.00781 0.4375 14.5C0.4375 21.9922 6.50781 28.0625 14 28.0625C21.4922 28.0625 27.5625 21.9922 27.5625 14.5C27.5625 7.00781 21.4922 0.9375 14 0.9375ZM18.375 10.125C19.3047 10.125 20.125 10.9453 20.125 11.875C20.125 12.8594 19.3047 13.625 18.375 13.625C17.3906 13.625 16.625 12.8594 16.625 11.875C16.625 10.9453 17.3906 10.125 18.375 10.125ZM9.625 10.125C10.5547 10.125 11.375 10.9453 11.375 11.875C11.375 12.8594 10.5547 13.625 9.625 13.625C8.64062 13.625 7.875 12.8594 7.875 11.875C7.875 10.9453 8.64062 10.125 9.625 10.125ZM20.2344 19.4766C18.7031 21.3359 16.4062 22.375 14 22.375C11.5391 22.375 9.24219 21.3359 7.71094 19.4766C6.94531 18.5469 8.3125 17.4531 9.02344 18.3281C10.2812 19.8047 12.0859 20.625 14 20.625C15.9141 20.625 17.6641 19.8047 18.9219 18.3281C19.6328 17.4531 21 18.5469 20.2344 19.4766Z"
      fill="#2D2B3A"
    />
  </svg>
)

const mdSmileyIcon = () => (
  <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 0.9375C6.50781 0.9375 0.4375 7.00781 0.4375 14.5C0.4375 21.9922 6.50781 28.0625 14 28.0625C21.4922 28.0625 27.5625 21.9922 27.5625 14.5C27.5625 7.00781 21.4922 0.9375 14 0.9375ZM18.375 10.125C19.3047 10.125 20.125 10.9453 20.125 11.875C20.125 12.8594 19.3047 13.625 18.375 13.625C17.3906 13.625 16.625 12.8594 16.625 11.875C16.625 10.9453 17.3906 10.125 18.375 10.125ZM9.625 10.125C10.5547 10.125 11.375 10.9453 11.375 11.875C11.375 12.8594 10.5547 13.625 9.625 13.625C8.64062 13.625 7.875 12.8594 7.875 11.875C7.875 10.9453 8.64062 10.125 9.625 10.125ZM20.2344 19.4766C18.7031 21.3359 16.4062 22.375 14 22.375C11.5391 22.375 9.24219 21.3359 7.71094 19.4766C6.94531 18.5469 8.3125 17.4531 9.02344 18.3281C10.2812 19.8047 12.0859 20.625 14 20.625C15.9141 20.625 17.6641 19.8047 18.9219 18.3281C19.6328 17.4531 21 18.5469 20.2344 19.4766Z"
      fill="#2D2B3A"
    />
  </svg>
)

const userMessage = () => {
  return (
    <>
      <hr />
      <div className="p-3">
        <Icon icon={messageIcon} style="ghost" />
      </div>
      <Text as="p" size="sm" className="p-3 text-gray-600">
        Not seeing an answer to your specific question? Go to our{' '}
        <Text as="a" underline={true} href="#" size="sm" className="text-primary-600">
          discussion boad
        </Text>{' '}
        to get extra assistance.
      </Text>
    </>
  )
}

const links = [
  {
    title: 'Text Here',
    target: 'https://openmined.org',
    disabled: false
  },
  {
    title: 'Text Here',
    target: 'https://openmined.org',
    disabled: true
  },
  {
    title: 'Text Here',
    target: 'https://openmined.org',
    disabled: false,
    subtitle: 'Text Here'
  },
  {
    title: 'Text Here',
    target: 'https://openmined.org',
    disabled: true,
    subtitle: 'Text Here'
  },
  {
    title: 'Text Here',
    target: 'https://openmined.org',
    disabled: false,
    number: 1
  },
  {
    title: 'Text Here',
    target: 'https://openmined.org',
    disabled: true,
    number: 1
  },
  {
    title: 'Text Here',
    target: 'https://openmined.org',
    icon: mdSmileyIcon,
    subtitle: 'Text Here'
  },
  {
    title: 'Text Here',
    target: 'https://openmined.org',
    icon: smSmileyIcon
  },
  {
    title: 'Text Here',
    target: 'https://openmined.org',
    disabled: false,
    avatar:
      'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'
  }
]

const prereqs = [
  {
    title: 'Text Here',
    target: 'https://openmined.org',
    disabled: false
  },
  {
    title: 'Text Here',
    target: 'https://openmined.org',
    disabled: true
  }
]

export function Sidebar({
  heading = 'Heading 5',
  hasMessage = true,
  className,

  ...props
}: {
  heading: string
  hasMessage: boolean
  icon: React.ReactType

  className: string
  disabled: boolean
}) {
  const classes = cn('text-primary-600', className)

  const numberClasses = 'rounded-full bg-gray-800 text-gray-50 text-sm w-5 h-5 leading-snug'

  const mapPrerequisites = prereqs => {
    return prereqs.map(prereq => (
      <li>
        <Text as="a" className="text-gray-600 hover:underline hover:text-primary-600" href="link.target" size="md">
          {prereq.title}
        </Text>
      </li>
    ))
  }

  const mapLinks = links => {
    return links.map(link => (
      <li>
        <Button style="ghost" disabled={link.disabled}>
          {link.avatar && <Avatar src={link.avatar} size="md" />}
          {link.number && <span className={numberClasses}>{link.number}</span>}
          {link.icon && <Icon icon={link.icon} style="ghost" />}
          <div className="flex-col">
            <Text as="a" href={link.target} size="sm" className="text-gray-600">
              {link.title}
            </Text>
            {link.subtitle && (
              <Text as="p" size="sm" className="text-gray-600">
                {link.subtitle}
              </Text>
            )}
          </div>
        </Button>
      </li>
    ))
  }

  return (
    <div className="w-1/3">
      {heading && <H5>{heading}</H5>}
      <hr />
      <ul>{mapLinks(links)}</ul>
      <hr />
      {prereqs && (
        <Text as="h3" size="md" bold={true} className="text-gray-800">
          Pre-Requisites
        </Text>
      )}
      <ul className="list-disc p-6">{prereqs && mapPrerequisites(prereqs)}</ul>
      {hasMessage && userMessage()}
    </div>
  )
}
