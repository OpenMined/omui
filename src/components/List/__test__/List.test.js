import {render, screen, isInaccessible} from '@testing-library/react'
import cases from 'jest-in-case'
import {axe} from 'jest-axe'

import {List, ListItem, UnorderedList, OrderedList, ListAvatarItem, ListProgressItem, ListIconItem} from '../List'

const list = Array.from(Array(10).keys()).map(i => `Item ${i}`)

describe('Default list and list item', () => {
  test('It render the list item as children', () => {
    render(
      <List data-testid="list-id">
        {list.map(i => (
          <ListItem key={i}>{i}</ListItem>
        ))}
      </List>
    )

    const listElement = screen.getByTestId('list-id')
    expect(listElement.childElementCount).toBe(10)
  })

  test('It set a custom size based on List prop', async () => {
    render(
      <List data-testid="list-id" size="3xl">
        {list.map(i => (
          <ListItem key={i}>{i}</ListItem>
        ))}
      </List>
    )

    const listElement = screen.getByTestId('list-id')
    expect(listElement).toHaveClass('text-3xl space-y-8')
  })

  test('It is accessible', async () => {
    const {container} = render(
      <List data-testid="list-id">
        {list.map(i => (
          <ListItem key={i}>{i}</ListItem>
        ))}
      </List>
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

describe('Unordered list with bullet and list item', () => {
  test('It render the list as list-disc', () => {
    render(
      <UnorderedList data-testid="list-id">
        {list.map(i => (
          <ListItem key={i}>{i}</ListItem>
        ))}
      </UnorderedList>
    )

    const listElement = screen.getByTestId('list-id')
    expect(listElement).toHaveClass('list-disc')
  })

  test('It is accessible', async () => {
    const {container} = render(
      <UnorderedList data-testid="list-id">
        {list.map(i => (
          <ListItem key={i}>{i}</ListItem>
        ))}
      </UnorderedList>
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

describe('Ordered list with number count and list item', () => {
  test('It render the list as list-decimal', () => {
    render(
      <OrderedList data-testid="list-id">
        {list.map(i => (
          <ListItem key={i}>{i}</ListItem>
        ))}
      </OrderedList>
    )

    const listElement = screen.getByTestId('list-id')
    expect(listElement).toHaveClass('list-decimal')
  })

  test('It is accessible', async () => {
    const {container} = render(
      <OrderedList data-testid="list-id">
        {list.map(i => (
          <ListItem key={i}>{i}</ListItem>
        ))}
      </OrderedList>
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

describe('List with Avatar Item', () => {
  test('It render the list of avatars and labels', () => {
    render(
      <List data-testid="list-id">
        {list.map(i => (
          <ListAvatarItem src={i} alt={i} key={i} label={`Title ${i}`} />
        ))}
      </List>
    )

    const avatarElements = screen.getAllByRole('img')
    const textElements = screen.getAllByText(/Title Item/)
    expect(avatarElements.length).toBe(list.length)
    expect(textElements.length).toBe(list.length)
  })

  test('It render the list as label and description', () => {
    render(
      <List data-testid="list-id">
        {list.map(i => (
          <ListAvatarItem src={i} alt={i} key={i} label={`Title ${i}`} description={`Desc ${i}`} />
        ))}
      </List>
    )

    const labelElements = screen.getAllByText(/Title/)
    const descElements = screen.getAllByText(/Desc/)
    expect(labelElements.length).toBe(list.length)
    expect(descElements.length).toBe(list.length)
  })

  test('It follow the size of the parent List', () => {
    render(
      <List data-testid="list-id" size="3xl">
        {list.map(i => (
          <ListAvatarItem src={i} alt={i} key={i} label={`Title ${i}`} description={`Desc ${i}`} />
        ))}
      </List>
    )

    const firstAvatarElement = screen.getByAltText('Item 0')
    const firstLabelElement = screen.getByText('Title Item 0')
    const firstDescElement = screen.getByText('Desc Item 0')

    expect(firstAvatarElement).toHaveClass('w-20 h-20')
    expect(firstLabelElement).toHaveClass('text-2xl')
    expect(firstDescElement).toHaveClass('text-lg')
  })

  test('It is accessible when has only label', async () => {
    const {container} = render(
      <List data-testid="list-id">
        {list.map(i => (
          <ListAvatarItem src={i} alt="avatar" key={i} label={i} />
        ))}
      </List>
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  test('It is accessible when has label and description', async () => {
    const {container} = render(
      <List data-testid="list-id">
        {list.map(i => (
          <ListAvatarItem src={i} alt="avatar" key={i} label={i} description={i} />
        ))}
      </List>
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

describe('List with Progress Item', () => {
  test('It render the progress icon and children', () => {
    render(
      <List data-testid="list-id">
        {list.map(i => (
          <ListProgressItem key={i}>{i}</ListProgressItem>
        ))}
      </List>
    )

    const textElements = screen.getAllByText(/Item/)
    expect(textElements.length).toBe(list.length)
  })

  test('It follow the default size of the parent List', () => {
    render(
      <List data-testid="list-id">
        {list.map(i => (
          <ListProgressItem key={i}>{i}</ListProgressItem>
        ))}
      </List>
    )

    const firstIconElement = screen.getAllByRole('img')[0].parentNode

    expect(firstIconElement).toHaveClass('w-4 h-4')
  })

  test('It follow the size of the parent List', () => {
    render(
      <List data-testid="list-id" size="2xl">
        {list.map(i => (
          <ListProgressItem key={i}>{i}</ListProgressItem>
        ))}
      </List>
    )

    const firstIconElement = screen.getAllByRole('img')[0].parentNode

    expect(firstIconElement).toHaveClass('w-7 h-7')
  })

  test('It is accessible', async () => {
    const {container} = render(
      <List data-testid="list-id">
        {list.map(i => (
          <ListProgressItem key={i}>{i}</ListProgressItem>
        ))}
      </List>
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

const RandomIcon = ({className}) => (
  <svg className={className} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
    <path
      fill="currentColor"
      d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"
    />
  </svg>
)

describe('List with Icon Item', () => {
  test('It render the icon and children', () => {
    render(
      <List data-testid="list-id">
        {list.map(i => (
          <ListIconItem icon={RandomIcon} key={i}>
            {i}
          </ListIconItem>
        ))}
      </List>
    )

    const textElements = screen.getAllByText(/Item/)
    expect(textElements.length).toBe(list.length)
  })

  test('It follow the default size of the parent List', () => {
    render(
      <List data-testid="list-id">
        {list.map(i => (
          <ListIconItem icon={RandomIcon} key={i}>
            {i}
          </ListIconItem>
        ))}
      </List>
    )

    const firstIconElement = screen.getAllByRole('img')[0]

    expect(firstIconElement).toHaveClass('w-3 h-3')
  })

  test('It follow the size of the parent List', () => {
    render(
      <List data-testid="list-id" size="2xl">
        {list.map(i => (
          <ListIconItem icon={RandomIcon} key={i}>
            {i}
          </ListIconItem>
        ))}
      </List>
    )

    const firstIconElement = screen.getAllByRole('img')[0].parentNode

    expect(firstIconElement).toHaveClass('w-11 h-11')
  })

  test('It is accessible', async () => {
    const {container} = render(
      <List data-testid="list-id">
        {list.map(i => (
          <ListProgressItem key={i}>{i}</ListProgressItem>
        ))}
      </List>
    )

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
