import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import App from '../../src/client/App'

describe('App', () => {
    it('When a menu option is clicked it appears in the preview panel', async () => {
        render(<App />)

        const menuOption = await screen.findByText('Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots')
        fireEvent(menuOption, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }))

        const menuItems = screen.getAllByText('Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots')

        expect(menuItems.length).toEqual(2)
    })

    it('When a menu review option is closed it disappears from the preview panel', async () => {
        render(<App />)

        const menuOption = await screen.findByText('Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots')
        fireEvent(menuOption, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }))

        const menuOption2 = await screen.findByText('Dill & Swiss Chard Potato Cakes, Summer Tabbouleh & Roasted Roots')
        fireEvent(menuOption2, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }))

        const closeButtons = await screen.findAllByText('x')

        fireEvent(closeButtons[0], new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }))

        const menuItems = await screen.findAllByText('Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots')

        expect(menuItems.length).toEqual(1)
    })

    it('The number of selected menu items in the summary bar updates when one is clicked', async () => {
        render(<App />)

        const menuItem = await screen.findByText('Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots')
        fireEvent(menuItem, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }))

        const menuItem2 = await screen.findByText('Dill & Swiss Chard Potato Cakes, Summer Tabbouleh & Roasted Roots')
        fireEvent(menuItem2, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }))

        const itemsCountText = await screen.findByText('2 items')
        expect(itemsCountText).toBeInTheDocument()
    })

    it('The dietary requirements totals in summary update when a food item is added to the menu preview', async () => {
        render(<App />)

        const menuItem = await screen.findByText('Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots')
        fireEvent(menuItem, new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        }))

        const dietariesContainer = await screen.findByTestId('menu-summary-right')
        const dietaries = dietariesContainer.querySelectorAll('span.dietary')
        expect(dietaries?.length).toEqual(0)
    })
})
