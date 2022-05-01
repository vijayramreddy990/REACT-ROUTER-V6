import React from "react";
import { BrowserRouter, Link, Navigate, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Page4044 from "./components/Page4044";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
