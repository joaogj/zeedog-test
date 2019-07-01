import React from 'react'
import Side from '../../molecules/Side'

import {
  MainContainer,

} from './styled'

class BothSides extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      width: "50%",
      id: '',
    }
    this.onHandleChange = this.onHandleChange.bind(this)
  }

  onHandleChange(){
      //   if(this.state.width === "50%") {
           this.setState({width: "100%"})
      //     console.log(this.state.id)
      //   }
      // console.log(this.state.width)
      // if(this.state.width === "100%"){
      //   this.setState({width: "50%"})
      // }
  }

  render () {
    return (
      <MainContainer>
        {
          this.props.renderSides.map((item, key) =>{
            console.log("iteração " + key)
            console.log(this.state.width)
            return (
              <Side
                id={key}
                key={key}
                widthDesk={this.state.width}
                onClick={this.onHandleChange}
                bgColor={item.bgColor}
                language={item.language}
                title={item.title}
                subtitle={item.subtitle}
                imgButton={item.imgButton}
              />
              
            )
          })
        }
      </MainContainer>
    )
  }
}
export default BothSides