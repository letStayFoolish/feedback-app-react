import Header from "./components/Header";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  function deleteFeedback(id) {
    if (window.confirm(`Aree you sure?`)) {
      setFeedback([...feedback].filter((item) => item.id !== id))
    }
  }
  return (
    <>
      <Header text='Feedback' />
      <div className='container'>
        <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
