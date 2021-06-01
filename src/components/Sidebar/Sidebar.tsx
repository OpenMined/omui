import React from 'react'
import cn from 'classnames'
import {H5, Text} from '../Typography/Text'
import {Button} from '../Button/Button'
import {Icon} from '../Icons/Icon'
import {Avatar} from '../Avatar/Avatar'
import {ProgressCircle} from '../ProgressCircle/ProgressCircle'

const messageIcon = () => (
  <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.5 8C20.5 3.875 16.0938 0.5 10.75 0.5C5.35938 0.5 1 3.875 1 8C1 9.64062 1.65625 11.0938 2.78125 12.3125C2.125 13.7656 1.09375 14.8906 1.09375 14.8906C1 14.9844 0.953125 15.1719 1 15.3125C1.09375 15.4531 1.1875 15.5 1.375 15.5C3.0625 15.5 4.46875 14.9375 5.5 14.3281C7 15.0781 8.82812 15.5 10.75 15.5C16.0938 15.5 20.5 12.1719 20.5 8ZM26.2188 18.3125C27.2969 17.0938 28 15.6406 28 14C28 10.9062 25.4688 8.1875 21.9062 7.0625C21.9531 7.39062 22 7.71875 22 8C22 12.9688 16.9375 17 10.75 17C10.2344 17 9.71875 17 9.25 16.9531C10.7031 19.625 14.1719 21.5 18.25 21.5C20.1719 21.5 21.9531 21.0781 23.4531 20.3281C24.4844 20.9375 25.8906 21.5 27.625 21.5C27.7656 21.5 27.9062 21.4531 27.9531 21.3125C28 21.1719 28 20.9844 27.8594 20.8906C27.8594 20.8906 26.8281 19.7656 26.2188 18.3125Z"
      fill="#2D2B3A"
    />
  </svg>
)

export function Sidebar({
  heading = '',
  hasMessage = false,
  borderLeft = false,
  progressPct,
  links,
  prereqs,
  className,

  ...props
}: {
  heading: string
  hasMessage: boolean
  borderLeft: boolean
  progressPct: number
  icon: React.ReactType
  links: []
  prereqs: []

  className: string
  disabled: boolean
}) {
  const numberClasses = 'rounded-full bg-gray-800 text-gray-50 text-sm w-5 h-5 leading-snug'
  const containerClasses = `sm:w-1/3 lg:w-1/4 ${borderLeft ? 'border-l-2 pl-6' : ''}`

  const userMessage = () => {
    return (
      <>
        <hr />
        <div className="py-4">
          <Icon icon={messageIcon} style="ghost" />
        </div>
        <Text as="p" size="sm" className="text-gray-600">
          Not seeing an answer to your specific question? Go to our{' '}
          <Text as="a" underline={true} href="#" size="sm" className="text-primary-600">
            discussion boad
          </Text>{' '}
          to get extra assistance.
        </Text>
      </>
    )
  }

  const mapPrerequisites = prereqs => {
    return prereqs.map(prereq => (
      <li className="pb-2">
        <Text as="a" className="text-gray-600 hover:underline hover:text-primary-600" href={prereq.target} size="sm">
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
    <div className={containerClasses}>
      {heading && (
        <>
          <H5 className="pb-1">{heading}</H5>
          <hr />
        </>
      )}
      <ul className="py-2">{links && mapLinks(links)}</ul>
      {hasMessage && userMessage()}
      {prereqs && (
        <div className="pt-4">
          <hr />
          <Text as="h3" size="md" bold={true} className="py-4 text-gray-800">
            Pre-Requisites
          </Text>
        </div>
      )}
      <ul className="list-disc pl-6 pb-6">{prereqs && mapPrerequisites(prereqs)}</ul>
      {progressPct && (
        <>
          <hr />
          {ProgressCircle(progressPct)}
        </>
      )}
    </div>
  )
}
