import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContex";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext)

  const rev = feedback.length
  const sum = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0)
  let average = sum / rev
  average = average.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className='feedback-stats'>
      { rev === 1 ? <h4>{rev} Review</h4> : <h4>{rev} Reviews</h4>}
      <h4>Average rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
