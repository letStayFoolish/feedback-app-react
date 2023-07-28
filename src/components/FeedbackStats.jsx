import PropTypes from "prop-types";
const FeedbackStats = ({ feedback }) => {
  const rev = feedback.length
  const sum = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0)
  let average = sum / rev
  average = average.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className='feedback-stats'>
      <h4>{rev} Reviews</h4>
      <h4>{isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired
}

export default FeedbackStats
