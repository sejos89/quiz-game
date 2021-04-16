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
      className="header"
      style={toggleTheme ? { backgroundColor: "#f3e3e1" } : {}}
    >
      <div
        className="navbar"
        style={toggleTheme ? { backgroundColor: "#f3e3e1" } : {}}
      >
        <ToggleButton />

        <ul>
          <li>
            <Link
              to="/team"
              className={
                location.pathname === "/team"
                  ? "chosen-topic"
                  : toggleTheme
                  ? "dark-button"
                  : ""
              }
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              to="/test"
              className={
                location.pathname === "/test"
                  ? "chosen-topic"
                  : toggleTheme
                  ? "dark-button"
                  : ""
              }
            >
              Tests
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
