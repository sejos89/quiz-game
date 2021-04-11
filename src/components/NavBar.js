import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "./NavBar.css";
import ToggleButton from "./ToggleButton";

function NavBar() {
  const { toggleTheme } = useContext(AppContext);
  const location = useLocation();
  return (
    <div
      className="navbar"
      style={toggleTheme ? { backgroundColor: "#f3e3e1" } : {}}
    >
      <ul>
        <li>
          <Link to="/test">
            <button
              className={
                location.pathname === "/test"
                  ? "chosen-topic"
                  : toggleTheme
                  ? "dark-button"
                  : ""
              }
            >
              Tests
            </button>
          </Link>
        </li>
        <li>
          <Link to="/team">
            <button
              className={
                location.pathname === "/team"
                  ? "chosen-topic"
                  : toggleTheme
                  ? "dark-button"
                  : ""
              }
            >
              Equipo docente
            </button>
          </Link>
        </li>
        <li>
          <ToggleButton />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
