import inputContext from '../../Context/inputContext'
import {
  UserInputContainer,
  UserInputHead,
  InputContainer,
  InputUser,
  AddButton,
} from './styledComponents'

const UserInput = () => (
  <inputContext.Consumer>
    {value => {
      const {userInput, addUserTextCount, updateUserInputValue} = value
      const updateUserInput = event => {
        updateUserInputValue(event.target.value)
      }

      const addUSerInputValues = event => {
        event.preventDefault()
        addUserTextCount()
      }
      return (
        <UserInputContainer>
          <UserInputHead>Character Counter</UserInputHead>
          <InputContainer onSubmit={addUSerInputValues}>
            <InputUser
              type="text"
              placeholder="Enter the Characters here"
              onChange={updateUserInput}
              value={userInput}
            />
            <AddButton type="submit">Add</AddButton>
          </InputContainer>
        </UserInputContainer>
      )
    }}
  </inputContext.Consumer>
)

export default UserInput
