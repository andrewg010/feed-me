import React from 'react'
import { render, screen } from '@testing-library/react'
import FoodItemCard from '../../../src/client/components/FoodItemCard'
import mockItems from '../../../__mocks__/mockItems'

describe('FoodItemCard', () => {
  it('does not render close icon without onClose prop being passed', async () => {
    render(<FoodItemCard itemId={1} {...mockItems[0]} />)

    const closeIcon = screen.queryByText('x')

    expect(closeIcon).toBeNull()
  })

  it('renders close icon when onClose prop is passed to it', async () => {
    render(<FoodItemCard onClose={() => {}} itemId={1} {...mockItems[0]} />)

    const closeIcon = screen.getByText('x')

    expect(closeIcon).toBeInTheDocument()
  })
})
