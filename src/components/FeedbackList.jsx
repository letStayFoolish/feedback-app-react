import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback.</p>
  }
  const feedbackElement = feedback.map((item, _index) => {
    return item
  })

  return (
    <div className='feedback-list'>
      {feedback.map((item, _index) => (
        <FeedbackItem key={_index} item={item} />
      ))}
    </div>
  )
}

export default FeedbackList