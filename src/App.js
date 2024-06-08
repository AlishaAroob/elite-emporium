import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BestSelling from "./Components/BestSelling";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import AllCollection from "./Components/AllCollection";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <BestSelling />
      <About />
      <Contact />
      <Footer />
      <AllCollection />
    </>
  );
}

export default App;
