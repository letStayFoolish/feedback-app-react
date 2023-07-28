import Header from "./components/Header";
import { useState } from "react";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
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
        <FeedbackForm />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
