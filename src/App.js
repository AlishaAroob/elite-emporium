import React from "react";
import BestSelling from "./Components/BestSelling";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import AllCollection from "./Components/AllCollection";
import { Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <BestSelling />
      <About />
      <Contact />
      <Footer />
      <Routes
        exact
        path="./Components/AllCollection.js"
        Component={AllCollection}
      />
    </>
  );
}

export default App;
