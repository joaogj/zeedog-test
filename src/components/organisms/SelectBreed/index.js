import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios'


import {
  MainContainer,
  Title,
  Subtitle,
  ImgDropdown,
  StyledDropdown
} from './styled'

const Request = () => {
  axios.get("https://s3-sa-east-1.amazonaws.com/zee.dog/athena/breedSizes.json")
  .then(function (response) {
    // handle success
    console.log(response);
  })
}

const breeds = [

]

const countryOptions = [
  {text: 'Afghanistan' },
  {text: 'Aland Islands' },
  {text: 'Albania' },
  {text: 'Algeria' },
  {text: 'American Samoa' },
  {text: 'Andorra' },
  {text: 'Angola' },
  {text: 'Anguilla' },
  {text: 'Antigua' },
  {text: 'Argentina' },
  {text: 'Armenia' },
  {text: 'Aruba' },
  {text: 'Australia' },
  {text: 'Austria' },
  {text: 'Azerbaijan' },
  {text: 'Bahamas' },
  {text: 'Bahrain' },
  {text: 'Bangladesh' },
  {text: 'Barbados' },
  {text: 'Belarus' },
  {text: 'Belgium' },
  {text: 'Belize' },
  {text: 'Benin' },
]
class SelectBreed extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      options: []
    }
  }

  componentDidMount() {
    axios.get("https://s3-sa-east-1.amazonaws.com/zee.dog/athena/breedSizes.json")
      .then(response => {
        // handle success
        console.log(response);
        // for(let k in response) {
          
        // }
        this.setState({options: response.data.key})
        console.log(this.state.options)
      })
  }

  render () {
    return (
      <MainContainer>
        <Title></Title>
        <StyledDropdown>
          <Dropdown
            placeholder='Select Country'
            fluid
            search
            selection
            options={countryOptions}
          />
          <ImgDropdown src={"/img/dropdown.png"}></ImgDropdown>
        </StyledDropdown>
      </MainContainer>
    )
  }
}

export default SelectBreed