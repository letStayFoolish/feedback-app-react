// Context provides a way to pass data through the component three without having to pass props down manually at every level.
import { createContext, useState} from "react";
import {v4 as uuidv4} from "uuid";

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is feedback item 1',
      rating: 10
    },
    {
      id: 2,
      text: 'This is feedback item 2',
      rating: 7
    },
    {
      id: 3,
      text: 'This is feedback item 3',
      rating: 8
    }
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  // Set item to be updated
  function editFeedback(item) {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  // Delete feedback
  function deleteFeedback(id) {
    if (window.confirm(`Aree you sure?`)) {
      setFeedback([...feedback].filter((item) => item.id !== id))
    }
  }

  // Add feedback
  function addFeedback(newFeedback) {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  // Update feedback item
  function updateFeedback(id, updatedFeedback) {
    setFeedback(
      feedback.map((item) => (item.id === id ? {...item, ...updatedFeedback} : item))
    )
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}
  >
    {children}
  </FeedbackContext.Provider>
  )
}

export default FeedbackContext