import React, { useContext } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { ThemeContext } from "./ThemeContext";

export default function Navigation() {
  const { theme, toggle, dark } = React.useContext(ThemeContext);

  return (
    <div className="App">
      <Navbar
        className="App-nav"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
        data-testid="toggle-theme-btn"
      >
        <ul className="nav">
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div>
          <button
            type="button"
            onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: "none",
            }}
            data-testid="toggle-theme-btn"
          >
            Toggle to {!dark ? "Dark" : "Light"} theme
          </button>
        </div>
      </Navbar>
    </div>
  );
}
