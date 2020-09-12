import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import MenuOptionsBar from '../../../src/client/components/MenuOptionsBar'
import { FoodItemProvider } from '../../../src/client/context/foodItemContext'

describe('MenuOptionsBar', () => {
  it('Filters search results when a search is made', async () => {
    render(<FoodItemProvider><MenuOptionsBar /></FoodItemProvider>)

    const inputField =  await screen.findByPlaceholderText('Name')
    fireEvent.change(inputField, { target: { value: 'Hake' } })

    const hakeItems = await screen.findAllByText(/Hake/)
    const dillItems = screen.queryByText('Dill & Swiss Chard Potato Cakes, Summer Tabbouleh & Roasted Root')

    expect(hakeItems.length).toBe(2)
    expect(dillItems).toBeNull()
  })
})
