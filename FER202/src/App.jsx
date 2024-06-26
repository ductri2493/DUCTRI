// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./assets/components/lab/Navigation";
import OrchidsContent from "./assets/components/lab/OrchidsContent";
import OrchidProduct from "./assets/components/lab/OrchidProduct";
import Home from "./assets/components/lab/Home";
import AddProduct from "./assets/components/lab/AddProduct";
import Protected from "./assets/components/lab/Protected";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<OrchidsContent />} />
        <Route path="/detail/:id" element={<OrchidProduct />} />
        <Route path="/Add" element={<Protected><AddProduct /></Protected>} />
      </Routes>
    </div>
  );
}

export default App;
