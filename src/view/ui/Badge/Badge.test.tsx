import {render} from '@testing-library/react'
import UserEvent from '@testing-library/user-event'

import {Badge} from './'

describe('Badge', () => {
  it('should render with children', () => {
    const {container} = render(<Badge>Children Badge</Badge>)
    expect(container).toBeTruthy()

    expect(container.textContent).toBe('Children Badge')
  })

  it('should render with image', () => {
    const {container} = render(
      <Badge imagePath="/images/profile.jpg">Test Badge</Badge>,
    )

    expect(container).toBeTruthy()
    expect(container.textContent).toBe('Test Badge')

    const img = container.querySelector('img')
    expect(img).toBeTruthy()
  })

  it('should render with image and without image', () => {
    const {container, rerender} = render(<Badge>Test Badge</Badge>)

    expect(container).toBeTruthy()
    expect(container.textContent).toBe('Test Badge')
    expect(container.querySelector('img')).toBeFalsy()

    rerender(<Badge imagePath="/images/profile.jpg">New Test Badge</Badge>)
    expect(container.textContent).toBe('New Test Badge')
    expect(container.querySelector('img')).toBeTruthy()
  })

  it('should click and run an event', () => {
    const mockOnClick = jest.fn()
    const {container} = render(<Badge onClick={mockOnClick}>Test Badge</Badge>)

    expect(container.textContent).toBe('Test Badge')

    const badge = container.querySelector('[data-testid="badge"]') as Element
    UserEvent.click(badge)
    expect(mockOnClick).toHaveBeenCalled()
    expect(mockOnClick).toHaveBeenCalledTimes(1)
    UserEvent.click(badge)
    UserEvent.click(badge)
    UserEvent.click(badge)
    expect(mockOnClick).toHaveBeenCalledTimes(4)
  })
})
