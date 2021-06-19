import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import cases from 'jest-in-case'

import {Tag} from '../Tag'

describe('Tag', () => {
  cases(
    'styles:classes',
    ({params, result}) => {
      render(
        <Tag data-testid="test-id" {...params}>
          Omui
        </Tag>
      )

      const tagElement = screen.getByTestId('test-id')
      expect(tagElement).toHaveClass(result)
    },
    [
      {
        name: 'Should be default with md size, square and have primary colors',
        params: {},
        result: 'bg-primary-100 text-primary-600 rounded-sm text-md'
      },
      {
        name: 'gray tag has different classes',
        params: {variant: 'gray'},
        result: 'bg-gray-100 text-gray-600 hover:bg-gray-800 hover:text-primary-200'
      },
      {
        name: 'Should have disabled classes',
        params: {disabled: true},
        result: 'opacity-50 pointer-events-none'
      },
      {
        name: 'Should have cursor pointer when clickable',
        params: {onClick: jest.fn},
        result: 'cursor-pointer'
      },
      {
        name: 'Should have text size matching size',
        params: {size: 'lg'},
        result: 'text-lg'
      },
      {
        name: 'Should be fully rounded when tagType is round',
        params: {tagType: 'round'},
        result: 'rounded-full'
      }
    ]
  )

  cases(
    'render:icons',
    ({params, result}) => {
      render(
        <Tag data-testid="test-id" {...params}>
          Omui
        </Tag>
      )

      const tagElement = screen.getByTestId('test-id')
      expect(tagElement.innerHTML).toBe(result)
    },
    [
      {
        name: 'Should render icon on left side',
        params: {icon: <i data-testid="icon" />, iconSide: 'left'},
        result: '<span class="w-4 h-4 mr-1.5"><i data-testid="icon"></i></span>Omui'
      },
      {
        name: 'Should render icon on right side',
        params: {icon: <i data-testid="icon" />, iconSide: 'right'},
        result: 'Omui<span class="w-4 h-4 ml-1.5"><i data-testid="icon"></i></span>'
      }
    ]
  )

  describe('props', () => {
    test('Renders a button element', () => {
      render(
        <Tag data-testid="test-id" onClick={jest.fn}>
          Omui
        </Tag>
      )

      const tagElement = screen.getByTestId('test-id')
      expect(tagElement.tagName).toBe('BUTTON')
    })

    test('Renders a span element', () => {
      render(<Tag data-testid="test-id">Omui</Tag>)

      const tagElement = screen.getByTestId('test-id')
      expect(tagElement.tagName).toBe('SPAN')
    })

    test('Triggers a click on clickable element', () => {
      const mockFn = jest.fn()
      render(
        <Tag data-testid="test-id" onClick={mockFn}>
          Omui
        </Tag>
      )

      const tagElement = screen.getByTestId('test-id')
      userEvent.click(tagElement)
      expect(mockFn).toHaveBeenCalledTimes(1)
    })
  })
})
