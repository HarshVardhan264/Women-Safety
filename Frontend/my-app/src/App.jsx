import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ComplaintPage from "./pages/ComplaintPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/complaint" element={<ComplaintPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;