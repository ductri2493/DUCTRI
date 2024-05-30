import Navigation from "./assets/components/lab/Navigation";
import OrchidsContent from "./assets/components/lab/OrchidsContent";
import OrchidProduct from "./assets/components/lab/OrchidProduct";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<OrchidsContent />}></Route>
        <Route path="/detail/:id" element={<OrchidProduct />}></Route>
        {/* <Route path="/contact" element={<Contact />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
