import React, { Suspense } from 'react';
import { Routes, Route, Link } from "react-router-dom";

import "./App.css";

const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="App">
      <h1>Welcome to my Website!</h1>
      <div>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
        <Link className="link" to="/contact">Contact</Link>
      </div>
      <div className="content">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
