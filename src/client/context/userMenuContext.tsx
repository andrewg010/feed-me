import React, { createContext, useState } from 'react'
import config from '../config'

import {DietaryQuantities} from '../models/dietaryQuantities'
import {IFoodItem} from '../models/item'

interface IUserMenuContext {
  dietaries: DietaryQuantities
  items: IFoodItem[]
  setDietaries: React.Dispatch<React.SetStateAction<DietaryQuantities>>
  setItems: React.Dispatch<React.SetStateAction<IFoodItem[]>>
}

const UserMenuContext: React.Context<IUserMenuContext> = createContext({} as IUserMenuContext)

const UserMenuProvider: React.FC = props => {
  const [items, setItems] = useState([] as IFoodItem[])
  const [dietaries, setDietaries] = useState(config.defaultDietaryQuantities as DietaryQuantities)
  const value = {items, setItems, dietaries, setDietaries}
  return <UserMenuContext.Provider value={value} {...props} />
}

export {UserMenuContext, UserMenuProvider}
