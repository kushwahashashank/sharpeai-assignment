import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import "./App.css";
import Products from "./Components/Products/Products.jsx";
function App() {
  document.title = "Search Products";
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
