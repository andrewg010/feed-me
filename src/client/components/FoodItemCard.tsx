import React from 'react'
import styled from 'styled-components'
import { IFoodItem } from '../models/item'
import Dietary from './Dietary'

interface Props {
  dietaries: string[]
  itemId: number
  name: string
  onClick?: (item: IFoodItem) => void
  onClose?: (itemId: number) => void
}

const FoodItemCard: React.FC<Props> = ({ dietaries, itemId, name, onClick, onClose }) => {
  const handleClick = () => {
    const item: IFoodItem = {
      dietaries,
      id: itemId,
      name,
    }

    if (onClick) onClick(item)
  }

  const handleClose = () => {
    if (onClose) onClose(itemId)
  }

  return (
    <Container>
      <div onClick={() => handleClick()}>
        <Heading>{name}</Heading>
        <Paragraph>
          {dietaries.map((dietary, index) => <Dietary key={index} requirement={dietary} />)}
        </Paragraph>
      </div>
      {onClose && <RemoveButton onClick={() => handleClose()}>x</RemoveButton>}
    </Container>
  )
}

const Container = styled.li`
  border-radius: 5px;
  background: #FFF;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin-bottom: 20px;
  position: relative;
`

const Heading = styled.h2`
  font-size: 12pt;
`

const Paragraph = styled.p`
  margin: 0;
`

const RemoveButton = styled.button`
  position: absolute;
  top: -13px;
  right: -13px;
  -webkit-appearance: none;
  border: 2px solid #000;
  background: #FFF;
  font-weight: bold;
  width: 26px;
  height: 26px;
  line-height: 0px;
  border-radius: 100%;
  padding: 0;
  cursor: pointer;

  :focus {
    outline: none
  }
`

export default FoodItemCard
