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
        <header className="App-header">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="navbar-collapse collapse">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item d-flex align-items-center">
                  <Link className="nav-link d-flex align-items-center" to="/">
                    <img src="/LogoMoviesBlackSmall2.png" alt="MovieSceneSpotlight Logo" height="50" className="me-2" />
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
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
