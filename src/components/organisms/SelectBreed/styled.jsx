import styled from 'styled-components'
import Dropdown from 'react-dropdown'

export const MainContainer = styled.div`
  background-color: #23b2e3;
  height: 100vh;
`
export const Title = styled.h2`
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
`

export const Subtitle = styled.span`
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
`
export const ImgDropdown = styled.img`
  width: 200px;
`
export const StyledDropdown = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  .ui.fluid.dropdown {
    width: 50%;
    position: relative;
  }
`