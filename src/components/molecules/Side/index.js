import React from 'react'

import {
  MainContainer,
  TitleContainer,
  TextContainer,
  TitleSide,
  SubtitleSide,
  ClickButton,
  LanguageText,
} from './styled'

class Side extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      width: "50%",
    }

    this.onHandleChange = this.onHandleChange.bind(this)
  }


  onHandleChange(e){
    e.preventDefault()
    this.setState({width: "100%"})
  }

  render () {
      return (
        <MainContainer widthDesk={this.state.width} bgColor={this.props.bgColor} >
          <LanguageText>{this.props.language}</LanguageText>
          <TitleContainer>
            <TitleSide>{this.props.title}</TitleSide>
          </TitleContainer>
          <TextContainer>
            <SubtitleSide>{this.props.subtitle}</SubtitleSide>
          </TextContainer>
          <ClickButton onClick={this.onHandleChange} src={this.props.imgButton}></ClickButton>
        </MainContainer>
    )
  }
}
export default Side