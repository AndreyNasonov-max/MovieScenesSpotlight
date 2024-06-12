import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.js'; // Import your components
import About from './components/About.js';
import Contact from './components/Contact.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
    <div class="bg-black text-yellow-500 p-4 flex justify-between items-center">
    <Link className="nav-link d-flex align-items-center" to="/">
    <img src="/LogoMoviesBlackSmall2.png" alt="MovieSceneSpotlight Logo" height="50" className="me-2 w-64" />
   </Link>
  <div class="space-x-4">
    <a href="#" class="hover:text-yellow-300">Home</a>
    <a href="#" class="hover:text-yellow-300">About</a>
    <a href="#" class="hover:text-yellow-300">Contact</a>
  </div>
</div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
