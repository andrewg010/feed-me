import React from 'react'
import styled from 'styled-components'
import useUserMenu from '../hooks/useUserMenu'
import Dietary from './Dietary'

interface Props {
}

const MenuSummary: React.FC<Props> = () => {
  const { userMenuItems, userDietaries } = useUserMenu()

  return (
    <SummaryContainer>
      <div className='container'>
        <div className='row'>
          <LeftSection className='col-6'>
            <span>{userMenuItems.length} items</span>
          </LeftSection>
          <RightSection data-testid='menu-summary-right' className='col-6'>
            {
              userDietaries.map(({ dietary, quantity }, index) => (
                <React.Fragment key={index}>
                  {quantity}x <Dietary requirement={dietary} />
                </React.Fragment>
              ))
            }
          </RightSection>
        </div>
      </div>
    </SummaryContainer>
  )
}

const SummaryContainer = styled.div`
  background: #F8F8F8;
  padding: 30px 0;
`

const LeftSection = styled.div`
  font-weight: bold;
`

const RightSection = styled.div`
  text-align: right;
`

export default MenuSummary
