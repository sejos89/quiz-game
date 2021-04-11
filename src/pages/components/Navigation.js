import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import questions from "../../resources/questions";
import "./Navigation.css";

export default function Navigation({ changeTopic }) {
  const { toggleTheme } = useContext(AppContext);
  const { topic } = useContext(AppContext);

  return (
    <div
      className="topic"
      style={toggleTheme ? { backgroundColor: "#f3e3e1" } : {}}
    >
      <p style={toggleTheme ? { color: "black" } : {}}>Choose a Field:</p>
      <ul className="scrollBar">
        <li>
          <button
            className={
              topic.title === questions.nuclear_chemistry.title
                ? "chosen-topic"
                : toggleTheme
                ? "dark-button"
                : ""
            }
            onClick={() => changeTopic(questions.nuclear_chemistry)}
          >
            {questions.nuclear_chemistry.title}
          </button>
        </li>
        <li>
          <button
            className={
              topic.title === questions.periodic_relationship.title
                ? "chosen-topic"
                : toggleTheme
                ? "dark-button"
                : ""
            }
            onClick={() => changeTopic(questions.periodic_relationship)}
          >
            {questions.periodic_relationship.title}
          </button>
        </li>
        <li>
          <button
            className={
              topic.title === questions.ionic_bond.title
                ? "chosen-topic"
                : toggleTheme
                ? "dark-button"
                : ""
            }
            onClick={() => changeTopic(questions.ionic_bond)}
          >
            {questions.ionic_bond.title}
          </button>
        </li>
        <li>
          <button
            className={
              topic.title === questions.covalent_bond.title
                ? "chosen-topic"
                : toggleTheme
                ? "dark-button"
                : ""
            }
            onClick={() => changeTopic(questions.covalent_bond)}
          >
            {questions.covalent_bond.title}
          </button>
        </li>
        <li>
          <button
            className={
              topic.title === questions.intermolecular.title
                ? "chosen-topic"
                : toggleTheme
                ? "dark-button"
                : ""
            }
            onClick={() => changeTopic(questions.intermolecular)}
          >
            {questions.intermolecular.title}
          </button>
        </li>
        <li>
          <button
            className={
              topic.title === questions.acids_bases.title
                ? "chosen-topic"
                : toggleTheme
                ? "dark-button"
                : ""
            }
            onClick={() => changeTopic(questions.acids_bases)}
          >
            {questions.acids_bases.title}
          </button>
        </li>
        <li>
          <button
            className={
              topic.title === questions.redox.title
                ? "chosen-topic"
                : toggleTheme
                ? "dark-button"
                : ""
            }
            onClick={() => changeTopic(questions.redox)}
          >
            {questions.redox.title}
          </button>
        </li>
      </ul>
    </div>
  );
}
