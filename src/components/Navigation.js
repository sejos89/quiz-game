import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import questions from "../resources/questions";
import "./Navigation.css";
import ToggleButton from "./ToggleButton";

export default function Navigation({ changeTopic }) {
  const { toggleTheme } = useContext(AppContext);

  return (
    <div
      className="topic"
      style={toggleTheme ? { backgroundColor: "#f3e3e1" } : {}}
    >
      <ToggleButton />
      <p style={toggleTheme ? { color: "black" } : {}}>Choose a Field:</p>
      <ul>
        <li>
          <button
            className={toggleTheme ? "dark-button" : ""}
            onClick={() => changeTopic(questions.nuclear_chemistry)}
          >
            Nuclear Chemistry
          </button>
        </li>
        <li>
          <button
            className={toggleTheme ? "dark-button" : ""}
            onClick={() => changeTopic(questions.periodic_relationship)}
          >
            Periodic relationships
          </button>
        </li>
        <li>
          <button
            className={toggleTheme ? "dark-button" : ""}
            onClick={() => changeTopic(questions.ionic_bond)}
          >
            The ionic bond
          </button>
        </li>
        <li>
          <button
            className={toggleTheme ? "dark-button" : ""}
            onClick={() => changeTopic(questions.covalent_bond)}
          >
            The covalent bond
          </button>
        </li>
        <li>
          <button
            className={toggleTheme ? "dark-button" : ""}
            onClick={() => changeTopic(questions.intermolecular)}
          >
            Intermolecular forces
          </button>
        </li>
        <li>
          <button
            className={toggleTheme ? "dark-button" : ""}
            onClick={() => changeTopic(questions.acids_bases)}
          >
            Acids and Bases
          </button>
        </li>
        <li>
          <button
            className={toggleTheme ? "dark-button" : ""}
            onClick={() => changeTopic(questions.redox)}
          >
            Redox reactions
          </button>
        </li>
      </ul>
    </div>
  );
}
