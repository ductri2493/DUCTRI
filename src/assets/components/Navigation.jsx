import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);

  return (
    <div>
      <nav
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
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
        <div style={{ position: "relative" }}>
          <button
            className="switch-mode"
            href="#"
            onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: "none",
            }}
            data-testid="toggle-theme-btn"
          >
            Switch Theme {!dark ? "Light" : "Dark"} mode
          </button>
        </div>
      </nav>
    </div>
  );
}
