import {render, screen} from '@testing-library/react'
import {axe} from 'jest-axe'
import cases from 'jest-in-case'

import {Image} from '../Image'

cases(
  'Validate image aspect ratios and orientations',
  ({params, result}) => {
    render(<Image containerProps={{'data-testid': 'test-id'}} {...params} />)

    const imageElement = screen.getByTestId('test-id')
    expect(imageElement).toHaveClass(result)
  },
  [
    {
      name: 'Should not have aspect ratio reversed',
      params: {},
      result: 'aspect-w-16 aspect-h-9'
    },
    {
      name: 'Should reverse aspect ratio for portrait images',
      params: {orientation: 'portrait'},
      result: 'aspect-w-9 aspect-h-16'
    }
  ]
)

describe('Validate a11y', () => {
  test('Should pass with no axe violations', async () => {
    const {container} = render(<Image containerProps={{'data-testid': 'test-id'}} alt="Alternative text" />)
    const results = await axe(container)

    expect(results).toHaveNoViolations()
  })
})
