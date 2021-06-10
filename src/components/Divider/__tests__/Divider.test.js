import {render, screen} from '@testing-library/react'
import cases from 'jest-in-case'

import {Divider} from '../Divider'

cases(
  'Validate Divider aria attribute',
  ({params, result}) => {
    render(<Divider data-testid="test-id" {...params} />)

    const dividerElement = screen.getByTestId('test-id')
    expect(dividerElement).toHaveAttribute('aria-orientation', result)
  },
  [
    {
      name: 'Should render aria attribute correctly',
      params: {},
      result: 'horizontal'
    },
    {
      name: 'Should render aria attribute correctly',
      params: {orientation: 'horizontal'},
      result: 'horizontal'
    },
    {
      name: 'Should render aria attribute correctly',
      params: {orientation: 'vertical'},
      result: 'vertical'
    }
  ]
)

describe('Validate Divider role attribute', () => {
  test('Should not have aria role when component is a hr', () => {
    render(<Divider data-testid="test-id" />)

    const dividerElement = screen.getByTestId('test-id')
    expect(dividerElement).not.toHaveAttribute('role')
  })

  test('Should have role separator when component has children', () => {
    render(<Divider data-testid="test-id" children="OMUI" />)

    const dividerElement = screen.getByTestId('test-id')
    expect(dividerElement).toHaveAttribute('role', 'separator')
  })

  test('Should have role separator when component is not a hr', () => {
    render(<Divider data-testid="test-id" component="div" />)

    const dividerElement = screen.getByTestId('test-id')
    expect(dividerElement).toHaveAttribute('role', 'separator')
  })
})
