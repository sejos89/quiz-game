import { useContext } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { AppContext } from "../../context/AppContext";
import questions from "../../resources/questions";
import "./NavigationTest.css";

export default function NavigationTest({ changeTopic }) {
  const { topic } = useContext(AppContext);

  return (
    <DropdownButton
      id="dropdown-basic-button"
      className="d-inline-block"
      title={topic.title}
    >
      {Object.entries(questions).map((item) => (
        <Dropdown.Item onClick={() => changeTopic(item[1])}>
          {item[1].title}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}
