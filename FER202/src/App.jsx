import Navigation from "./assets/components/lab/Navigation";
import OrchidsContent from "./assets/components/lab/OrchidsContent";
import OrchidProduct from "./assets/components/lab/OrchidProduct";
import Home from "./assets/components/lab/Home";
import AddProduct from "./assets/components/lab/AddProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Shop" element={<OrchidsContent />}></Route>
        <Route path="/detail/:id" element={<OrchidProduct />}></Route>\
        <Route path="/Add" element={<AddProduct/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
