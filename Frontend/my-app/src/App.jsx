import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ComplaintPage from './pages/ComplaintPage'
import Anonymous from './pages/Anonymous'
import Identity from './pages/Identity'
import IdentityReport from './pages/IdentityReport'
import Completion from './pages/Completion'
import TrackComplaint from './pages/TrackComplaint'
import Chatbot from './pages/Chatbot'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/complaint" element={<ComplaintPage />} />
        <Route path="/anonymous" element={<Anonymous />} />
        <Route path="/identity" element={<Identity />} />
        <Route path="/identityreporting" element={<IdentityReport />} />
        <Route path="/completion" element={<Completion />} />
        <Route path="/track" element={<TrackComplaint />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;