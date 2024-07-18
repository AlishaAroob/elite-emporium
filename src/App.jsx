import React from "react";
import BestSelling from "./Components/BestSelling";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import AllCollection from "./Components/AllCollection";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Shop from "./Components/Shop";

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
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/all-collection" element={<AllCollection />} />
      </Routes>
    </>
  );
}

export default App;
