import React from 'react'

const inputContext = React.createContext({
  userValues: [],
  userInput: '',
  updateUserInputValue: () => {},
  addUserTextCount: () => {},
})
export default inputContext
