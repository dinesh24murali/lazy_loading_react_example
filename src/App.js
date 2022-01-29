import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to my Website!</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>&nbsp;
          <Link to="/about">About</Link>&nbsp;
          <Link to="/contact">Contact</Link>&nbsp;
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
