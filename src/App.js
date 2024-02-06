import {HashRouter as Router,Routes, Route, Navigate} from 'react-router-dom';
import About from './components/About.js';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Navigate to='/home' />} />
      </Routes>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
