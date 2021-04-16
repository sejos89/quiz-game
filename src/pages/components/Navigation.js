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
        {Object.entries(questions).map((item) => (
          <li>
            <button
              className={
                topic.title === item[1].title
                  ? "chosen-topic"
                  : toggleTheme
                  ? "dark-button"
                  : ""
              }
              onClick={() => changeTopic(item[1])}
            >
              {item[1].title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
