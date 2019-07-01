import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 100%;
  background-color: ${props => props.bgColor ? props.bgColor : '#23b2e3'};
  align-items: center;
  justify-content: center;
  transition: width 0.5s;
  @media screen and (min-width: 768px) {
    height: 100vh;
    width: ${props => props.widthDesk ? props.widthDesk : "50%"};
    z-index: ${props => props.zIndex ? props.zIndex : '0'};
  }
`


export const TitleContainer = styled.div`
  width: 60%;
`
export const TextContainer = styled.div`
  width: 60%;
`
export const LanguageText = styled.span`
  text-transform: uppercase;
  font-size: 16px;
  color: white;
  margin: 25px 0;
`

export const TitleSide = styled.h2`
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
`
export const SubtitleSide = styled.span`
  color: white;
  font-size: 16px;
  text-transform: uppercase;
  text-align: center;
`
export const ClickButton = styled.img`
  width: 125px;
  @media screen and (min-width: 768px) {
    width: 220px;
  }
  &:hover {
    cursor: pointer;
  }
`