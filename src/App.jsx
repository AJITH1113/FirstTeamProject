import React from "react";
import Page2 from "./components/Page2"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
const App = () => {
  return (
    <>
    <div className="navbar">
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
