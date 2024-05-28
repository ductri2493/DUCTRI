import { useState } from "react";
import Navigation from "./assets/components/Navigation";
import Footer from "./assets/components/Footer";
import Main from "./assets/components/Main";
import Counter from "./assets/components/Counter";
import { ThemeContext } from "./assets/components/ThemeContext";
import { ThemeProvider } from "./assets/components/ThemeContext";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navigation />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
