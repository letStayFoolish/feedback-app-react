import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./pages/AboutPage";
import {FeedbackProvider} from "./context/FeedbackContex";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header text='Feedback'/>
        <div className='container'>
          <Routes>
            <Route path='/' element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }
            />
            <Route path='/about' element={<AboutPage/>}/>
          </Routes>

          <AboutIconLink/>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
