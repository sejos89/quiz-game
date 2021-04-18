import { useContext } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { AppContext } from "../../context/AppContext";
import questions from "../../resources/questions";
import "./NavigationTest.css";

export default function NavigationTest({ changeTopic }) {
  const { toggleTheme } = useContext(AppContext);
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
    //   <div
    //     className="topic"
    //     style={toggleTheme ? { backgroundColor: "#f3e3e1" } : {}}
    //   >
    //     <p style={toggleTheme ? { color: "black" } : {}}>Choose a Field:</p>
    //     <ul className="scrollBar">
    //       {Object.entries(questions).map((item) => (
    //         <li>
    //           <button
    //             className={
    //               topic.title === item[1].title
    //                 ? "chosen-topic"
    //                 : toggleTheme
    //                 ? "dark-button"
    //                 : ""
    //             }
    //             onClick={() => changeTopic(item[1])}
    //           >
    //             {item[1].title}
    //           </button>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
  );
}
