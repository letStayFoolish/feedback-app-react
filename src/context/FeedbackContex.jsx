// Context provides a way to pass data through the component three without having to pass props down manually at every level.
import { createContext, useState} from "react";

const FeedbackContext = createContext()

const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from context',
      rating: 10
    }
  ])
  return <FeedbackContext.Provider value={{feedback}}
  >
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackProvider
