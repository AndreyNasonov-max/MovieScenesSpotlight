import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.js'; // Import your components
import About from './components/About.js';
import Contact from './components/Contact.js';
=======
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
>>>>>>> 04d2616a3ad109ac22b15c75d8ee9360346d05b4
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
<<<<<<< HEAD
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="navbar-collapse collapse">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item d-flex align-items-center">
                  <Link className="nav-link d-flex align-items-center" to="/">
                    <img src="/LogoMoviesBlackSmall2.png" alt="MovieSceneSpotlight Logo" height="50" className="me-2" />
                    Home
                  </Link>
=======
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">MovieSceneSpotlight</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
>>>>>>> 04d2616a3ad109ac22b15c75d8ee9360346d05b4
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
<<<<<<< HEAD
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
=======
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
>>>>>>> 04d2616a3ad109ac22b15c75d8ee9360346d05b4
      </div>
    </Router>
  );
}

export default App;
