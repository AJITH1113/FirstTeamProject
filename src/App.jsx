import React from "react";
import Navbar from "./components/Navbar";
import Page2 from "./components/Page2"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";

const App = () => {
  return (
    <>
    <div className="navbar">
      <h1>Logo</h1>
      <p>Ecommerce website</p>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
    <Page2/>
    </>
  );
};

export default App;
