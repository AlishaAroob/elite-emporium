import React from 'react'
import BestSelling from "./Components/BestSelling";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import AllCollection from "./Components/AllCollection";
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact="/" element={<Home />} />
        <Route exact="/about" element={<About />} />
        <Route exact="/contact" element={<Contact />} />
        <Route exact="/best-selling" element={<BestSelling />} />
        <Route exact="/all-collection" element={<AllCollection />} />
      </Routes>
    </div>)
}

export default App;


