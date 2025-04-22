import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LadingPage from './Components/LandingPage/LadingPage';
import SignUp from './Components/SignUp/SignUp';
import LogIn from './Components/LogIn/LogIn';
import Home from './Components/Pages/Home';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<LadingPage />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </Router>
  )
}

export default App
