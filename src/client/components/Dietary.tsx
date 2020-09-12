import React from 'react'
import styled from 'styled-components'

interface Props {
  requirement: string
}

const Dietary: React.FC<Props> = ({ requirement }) => <Container>{requirement}</Container>

const Container = styled.span`
  font-size: 10pt;
  border-radius: 100%;
  background: #A0C9CD;
  box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.1);
  width: 26px;
  height: 26px;
  text-align: center;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  color: #FFF;
`

export default Dietary
