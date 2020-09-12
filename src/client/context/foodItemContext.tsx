import React, { createContext, useEffect, useState } from 'react'
import config from '../config'
import useFetch from '../hooks/useFetch'

import { IFoodItem } from '../models/item'

interface IFoodItemContext {
  items: IFoodItem[]
  setSearchFilter: React.Dispatch<string>
}

const FoodItemContext: React.Context<IFoodItemContext> = createContext({} as IFoodItemContext)

const FoodItemProvider: React.FC = props => {
  let [items, setItems] = useState([] as IFoodItem[])
  let [searchFilter, setSearchFilter] = useState('')

  const dataUri = `${config.foodItemUri}?${config.filterQueryTerm}=${searchFilter}`
  const { response } = useFetch(dataUri, {}, {})

  useEffect(() => {
    if (response.items) setItems(response.items)
  }, [response])

  const value = { items, setSearchFilter }
  return <FoodItemContext.Provider value={value} {...props} />
}

export {FoodItemContext, FoodItemProvider}
