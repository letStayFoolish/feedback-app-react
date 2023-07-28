import { motion, AnimatePresence } from "framer-motion"
import FeedbackItem from './FeedbackItem'
import PropTypes from "prop-types";
const FeedbackList = ({ feedback, deleteFeedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback.</p>
  }

  return (
    <div className='feedback-list'>
      <AnimatePresence>
        {feedback.map((item, _index) => (
          <motion.div
            key={item.id}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={deleteFeedback}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )


  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item, _index) => (
  //       <FeedbackItem
  //         key={_index}
  //         item={item}
  //         handleDelete={deleteFeedback}
  //       />
  //     ))}
  //   </div>
  // )
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
