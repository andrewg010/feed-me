import React from 'react'
import styled from 'styled-components'

import FoodItemCard from './FoodItemCard'
import Input from './Input'
import useItems from '../hooks/useFoodItems'
import useUserMenu from '../hooks/useUserMenu'
import { IFoodItem } from '../models/item'

interface Props {
}

const MenuOptionsBar: React.FC<Props> = () => {
  const { foodItems, setFoodItemFilter } = useItems()
  const { addUserMenuItem } = useUserMenu()

  const handleMenuItemClick = (item: IFoodItem) => {
    addUserMenuItem(item)
  }

  const handleSearch = (value: string) => {
    setFoodItemFilter(value)
  }

  return (
    <div className='col-4'>
      <FiltersContainer>
        <Input onChange={value => handleSearch(value)} placeholder='Name' />
      </FiltersContainer>
      <ItemPicker>
        {foodItems.map((foodItem, index) => <FoodItemCard key={index} itemId={foodItem.id} onClick={handleMenuItemClick} {...foodItem} />)}
      </ItemPicker>
    </div>
  )
}

const FiltersContainer = styled.div`
  background: #F8F8F8;
  padding: 20px;
  list-style: none;
  margin: 0;

  .form-control {
  border: 1px solid #C1C1C1;
  padding: 8px;
  width: 294px;
}
`

const ItemPicker = styled.ul`
  background: #F8F8F8;
  padding: 20px;
  list-style: none;
  margin: 0;
  height: 500px;
  overflow: scroll;
  border-radius: 5px;
`

export default MenuOptionsBar
