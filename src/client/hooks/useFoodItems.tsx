import { useContext } from 'react'
import {FoodItemContext} from '../context/foodItemContext'

const useFoodItems = () => {
  const context = useContext(FoodItemContext)

  const { items, setSearchFilter } = context

  const setFilter = (filterTerm: string) => {
    setSearchFilter(filterTerm);
  }

  return {
    foodItems: items,
    setFoodItemFilter: setFilter
  }
}

export default useFoodItems
