import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./ToggleButton.scss";

export default function ToggleButton() {
  const { toggleTheme, setToggleTheme } = useContext(AppContext);

  return (
    <div className="switch">
      <input
        type="checkbox"
        class="switch__input"
        id="Switch"
        onClick={() => setToggleTheme(!toggleTheme)}
      />
      <label className="switch__label" for="Switch">
        <span className="switch__indicator"></span>
        <span className="switch__decoration"></span>
      </label>
    </div>
  );
}
