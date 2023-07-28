import Header from "./components/Header";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import {v4 as uuidv4 } from 'uuid'
import AboutPage from "./pages/AboutPage";
function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  function addFeedback(newFeedback) {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  function deleteFeedback(id) {
    if (window.confirm(`Aree you sure?`)) {
      setFeedback([...feedback].filter((item) => item.id !== id))
    }
  }
  return (
    <Router>
      <Header text='Feedback' />
        <div className='container'>
          <Routes>
            <Route path='/' element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} deleteFeedback={deleteFeedback} />
              </>
            }
            />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
