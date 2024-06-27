// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./assets/components/lab/component/Navigation";
import AddProduct from "./assets/components/lab/component/AddProduct";
import Protected from "./assets/components/lab/component/Protected";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Home from "./assets/components/lab/component/Home";
import OrchidsContent from "./assets/components/lab/component/OrchidsContent";
import OrchidProduct from "./assets/components/lab/component/OrchidProduct";
import DashBoard from "./assets/components/lab/component/DashBoard";
import About from "./assets/components/lab/component/About";
import Blog from "./assets/components/lab/component/Blog";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<OrchidsContent />} />
        <Route path="/detail/:id" element={<OrchidProduct />} />
        <Route path="/Dashboard" element={<Protected><DashBoard /></Protected>} />
        <Route path="/Add" element={<Protected><AddProduct /></Protected>} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />

      </Routes>
    </div>
  );
}

export default App;
