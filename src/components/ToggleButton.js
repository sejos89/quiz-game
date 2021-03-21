import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "./ToggleButton.scss";

export default function ToggleButton() {
  const { toggleTheme, setToggleTheme } = useContext(AppContext);

  return (
    <div class="switch">
      <input
        type="checkbox"
        class="switch__input"
        id="Switch"
        onClick={() => setToggleTheme(!toggleTheme)}
      />
      <label class="switch__label" for="Switch">
        <span class="switch__indicator"></span>
        <span class="switch__decoration"></span>
      </label>
    </div>
  );
}
