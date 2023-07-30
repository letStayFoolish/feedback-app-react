import Card from './shared/Card'
import {useState, useContext, useEffect} from "react";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContex";

const FeedbackForm = () => {
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [message, setMessage] = useState('')

  const {addFeedback, feedbackEdit} = useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.item.edit !== false) {
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating) // set rating in a Form component, but also we need to change it visually.
    }
  }, [feedbackEdit]);

  function handleTextChange(e) {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)

      // prettier-ignore
    } else if (text.trim().length < 10) { // 👈 check for less than 10
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(text)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        rating,
        text
      }
      addFeedback(newFeedback)
      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us></h2>
        {/*@todo - rating select component*/}
        <RatingSelect select={(rating) => setRating(rating)}/>
        <div className="input-group">
          <input onChange={handleTextChange} type="text" value={text} placeholder='Write a review'/>
          <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
