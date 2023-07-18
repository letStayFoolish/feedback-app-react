import FeedbackItem from './FeedbackItem'
import PropTypes from "prop-types";
const FeedbackList = ({ feedback, deleteFeedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback.</p>
  }
  const feedbackElement = feedback.map((item, _index) => {
    return item
  })


  return (
    <div className='feedback-list'>
      {feedback.map((item, _index) => (
        <FeedbackItem
          key={_index}
          item={item}
          handleDelete={deleteFeedback}
        />
      ))}
    </div>
  )
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  )
}
export default FeedbackList