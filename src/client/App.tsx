import React from 'react'
import styled from 'styled-components'

import MenuOptionsBar from './components/MenuOptionsBar'
import MenuPreviewPanel from './components/MenuPreviewPanel'
import MenuSummaryBar from './components/MenuSummaryBar'
import { FoodItemProvider } from './context/foodItemContext'
import { UserMenuProvider } from './context/userMenuContext'

const App: React.FC = () => (
  <FoodItemProvider>
    <UserMenuProvider>
      <Wrapper>
        <MenuSummaryBar />
        <MenuBuilder className='container'>
          <div className='row'>
            <MenuOptionsBar />
            <MenuPreviewPanel />
          </div>
        </MenuBuilder>
      </Wrapper>
    </UserMenuProvider>
  </FoodItemProvider>

)

const Wrapper = styled.div`
  padding: 50px 0;
  font-family: 'Nunito', sans-serif;
`

const MenuBuilder = styled.div`
  margin: 50px 0;
`

export default App
