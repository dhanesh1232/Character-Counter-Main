import {Component} from 'react'
import {v4} from 'uuid'
import inputContext from '../../Context/inputContext'
import CountDisplay from '../CountPage'
import UserInput from '../InputPage'
import {
  MainPageContainer,
  CountPageContainer,
  InputContainer,
} from './styledComponents'

class MainPage extends Component {
  state = {userInput: '', userValues: []}

  updateUserInputValue = value => {
    this.setState({userInput: value})
  }

  addUserTextCount = () => {
    const {userInput} = this.state
    const updatedData = {
      id: v4(),
      userEnteredValue: userInput,
      valLength: userInput.length,
    }
    this.setState(prevState => ({
      userValues: [...prevState.userValues, updatedData],
      userInput: '',
    }))
  }

  render() {
    const {isCount, userInput, userValues} = this.state
    return (
      <inputContext.Provider
        value={{
          userInput,
          userValues,
          addUserTextCount: this.addUserTextCount,
          updateUserInputValue: this.updateUserInputValue,
        }}
      >
        <MainPageContainer>
          <CountPageContainer>
            <CountDisplay isTrue={isCount} />
          </CountPageContainer>
          <InputContainer>
            <UserInput />
          </InputContainer>
        </MainPageContainer>
      </inputContext.Provider>
    )
  }
}

export default MainPage
