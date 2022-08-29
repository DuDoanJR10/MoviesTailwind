import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Movies from './pages/Movies';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App;
