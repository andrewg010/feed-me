import React from 'react'
import styled from 'styled-components'
import useUserMenu from '../hooks/useUserMenu'

import FoodItemCard from './FoodItemCard'

interface Props {
}

const MenuPreviewPanel: React.FC<Props> = () => {
  const { userMenuItems, removeUserMenuItem } = useUserMenu()

  const handleRemoveItem = (itemId: number) => {
    removeUserMenuItem(itemId)
  }

  return (
    <div className='col-8'>
    <h2>Menu preview</h2>
    <MenuPreview>
      {userMenuItems.map((menuItem, index) => <FoodItemCard key={index} itemId={index} onClose={handleRemoveItem} {...menuItem} />)}
    </MenuPreview>
  </div>
  )
}

const MenuPreview = styled.ul`
  padding: 20px;
  list-style: none;
  margin: 0;
`

export default MenuPreviewPanel
