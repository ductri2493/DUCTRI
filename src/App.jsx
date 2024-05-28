import { useState } from "react";
import Navigation from "./assets/components/Navigation";
import Footer from "./assets/components/Footer";
import Main from "./assets/components/Main";
import Counter from "./assets/components/Counter";
import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <Navigation />
        <Main />
        {/* <Counter /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
