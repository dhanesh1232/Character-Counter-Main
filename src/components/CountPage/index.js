import inputContext from '../../Context/inputContext'
import {
  CountHead,
  TopHeaderContainer,
  NoCountImage,
  UserEnteredCountValues,
  DisplayValuesList,
  NameTag,
} from './styledComponents'

const CountDisplay = () => (
  <inputContext.Consumer>
    {value => {
      const {userValues} = value
      return (
        <>
          <TopHeaderContainer>
            <CountHead>
              Count the characters like a <br />
              Boss...
            </CountHead>
          </TopHeaderContainer>
          {userValues.length === 0 ? (
            <NoCountImage
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
            />
          ) : (
            <UserEnteredCountValues>
              {userValues.map(each => (
                <DisplayValuesList key={each.id}>
                  <NameTag>
                    {each.userEnteredValue}: {each.valLength}
                  </NameTag>
                </DisplayValuesList>
              ))}
            </UserEnteredCountValues>
          )}
        </>
      )
    }}
  </inputContext.Consumer>
)

export default CountDisplay
