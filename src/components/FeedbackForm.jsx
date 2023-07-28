import Card from './shared/Card'
import {useState} from "react";
import Button from "./shared/Button";
const FeedbackForm = () => {
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [text, setText] = useState('')
  const [message, setMessage] = useState('')
  function handleTextChange(e) {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10 ) {
      setBtnDisabled(true)
      setMessage('Text must be at least 10 characters.')
    } else {
      setBtnDisabled(false)
      setMessage(null)
    }
    setText(e.target.value)
  }
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us></h2>
        {/*@todo - rating select component*/}
        <div className="input-group">
          <input onChange={handleTextChange} type="text" value={text} placeholder='Write a review' />
          <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
