import React from "react";
import BestSelling from "./Components/pages/BestSelling";
import Home from "./Components/pages/Home";
import Navbar from "./Components/pages/Navbar";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Footer from "./Components/pages/Footer";
import AllCollection from "./Components/pages/AllCollection";
import { BrowserRouter as Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Home />
      <BestSelling />
      <About />
      <Contact />
      <Footer />
      <Routes>
        <Route path="/" element={<AllCollection />} />
        <Route path="/all-collection" element={<AllCollection />} />
      </Routes>
    </>
  );
}

export default App;
