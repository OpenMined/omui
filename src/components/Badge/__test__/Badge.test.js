import {render, screen} from '@testing-library/react'
import cases from 'jest-in-case'

import {Badge} from '../Badge'

cases(
  'Validate badge classes',
  ({params, result}) => {
    render(
      <Badge data-testid="test-id" {...params}>
        Omui
      </Badge>
    )

    const textElement = screen.getByTestId('test-id')
    expect(textElement).toHaveClass(result)
  },
  [
    {
      name: 'Should have colors based on default variant: primary',
      params: {},
      result: 'border-primary-500 text-primary-600 dark:border-primary-200 dark:text-primary-200'
    },
    {
      name: 'Should have colors based on variant gray',
      params: {variant: 'gray'},
      result: 'border-gray-500 text-gray-600 dark:border-gray-200 dark:text-gray-200'
    },
    {
      name: 'Should have colors based on variant primary',
      params: {variant: 'primary'},
      result: 'border-primary-500 text-primary-600 dark:border-primary-200 dark:text-primary-200'
    },
    {
      name: 'Should have colors based on variant danger',
      params: {variant: 'danger'},
      result: 'border-error-500 text-error-600 dark:border-error-200 dark:text-error-200'
    },
    {
      name: 'Should have classes based on default type: outline',
      params: {},
      result: 'border-primary-500 text-primary-600 dark:border-primary-200 dark:text-primary-200'
    },
    {
      name: 'Should have classes based on type subtle',
      params: {type: 'subtle'},
      result: 'border-primary-100 bg-primary-100 text-primary-600'
    },
    {
      name: 'Should have classes based on type solid',
      params: {type: 'solid'},
      result: 'border-primary-500 bg-primary-500 text-white'
    },
    {
      name: 'Should have classes based on type solid following gray custom rule',
      params: {type: 'solid', variant: 'gray'},
      result: 'border-gray-800 bg-gray-800 text-primary-200'
    }
  ]
)
