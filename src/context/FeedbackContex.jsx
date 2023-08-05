// Context provides a way to pass data through the component three without having to pass props down manually at every level.
import { createContext, useState, useEffect} from "react";

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  useEffect(() => {
    fetchFeedback()
  }, []);

  async function fetchFeedback() {
    const response = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }

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
  async function addFeedback(newFeedback) {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newFeedback)
    })

    const data = await response.json()

    setFeedback([data, ...feedback])
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
        isLoading,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback
    }}
  >
    {children}
  </FeedbackContext.Provider>
  )
}

export default FeedbackContext
