import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Test from './components/Test/Test';
import DefaultLayout from './layouts/DefaultLayout';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='' element={<Home />} />
          <Route path='movies' element={<Movies />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='test' element={<Test />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
