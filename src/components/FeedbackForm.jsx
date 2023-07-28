import Card from './shared/Card'
import {useState} from "react";
const FeedbackForm = () => {
  const [text, setText] = useState('')
  function handleTextChange(e) {
    setText(e.target.value)
  }
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us></h2>
        {/*@todo - rating select component*/}
        <div className="input-group">
          <input onChange={handleTextChange} type="text" value={text} placeholder='Write a review' />
          <button type='submit'>Send</button>
        </div>
      </form>
    </Card>
  )
}

export default FeedbackForm
