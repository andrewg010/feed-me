import { useContext } from 'react'
import { UserMenuContext } from '../context/userMenuContext'
import { DietaryQuantities } from '../models/dietaryQuantities'
import { IFoodItem } from '../models/item'

const useUserMenu = () => {
  const context = useContext(UserMenuContext)

  const { items, dietaries, setItems, setDietaries } = context

  const updateDietaries = (item: IFoodItem, updateAction: (dietary: string, dietaries: DietaryQuantities) => void) => {
    const updatedDietaries = {...dietaries}
    item.dietaries.forEach(dietary => updateAction(dietary, updatedDietaries))
    setDietaries(updatedDietaries)
  }

  const getSelectedDietaries = () => {
    if (!dietaries) return []

    return Object.keys(dietaries)
      .filter(dietary => dietaries[dietary] !== 0)
      .map(dietary => ({ dietary, quantity: dietaries[dietary] }))
  }

  const addItem = (item: IFoodItem) => {
    const existingMenuItem = items.filter(menuItem => item.id === menuItem.id)
    if (existingMenuItem.length > 0) return

    updateDietaries(item, (dietary: string, dietaries: DietaryQuantities) => dietaries[dietary]++)
    setItems([...items, item])
  }

  const removeItem = (itemId: number) => {
    const removedItem = items[itemId]
    if (!removedItem) return    

    updateDietaries(removedItem, (dietary: string, dietaries: DietaryQuantities) => dietaries[dietary]--)
    const updatedItems = items.filter(item => removedItem.id !== item.id)
    setItems(updatedItems)
  }

  return {
    userMenuItems: items,
    userDietaries: getSelectedDietaries(),
    addUserMenuItem: addItem,
    removeUserMenuItem: removeItem 
  }
}

export default useUserMenu
