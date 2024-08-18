import HomePage from './pages/HomePage';
import './styles/app.scss'
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ss" element={<HomePage />} />
    </Routes>
  )
}

export default App
