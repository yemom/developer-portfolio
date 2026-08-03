import React, {useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

/**
 * ToggleSwitch — Light/Dark mode toggle
 * Fixed: removed redundant local isChecked state that could desync with context.
 * Now reads isDark directly from StyleContext as the single source of truth.
 */
const ToggleSwitch = () => {
  const {isDark, changeTheme} = useContext(StyleContext);

  return (
    <label
      className="switch"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <input
        type="checkbox"
        checked={isDark}
        onChange={changeTheme}
        aria-checked={isDark}
      />
      <span className="slider round">
        <span className="emoji" aria-hidden="true">
          {isDark ? "🌜" : "☀️"}
        </span>
      </span>
    </label>
  );
};

export default ToggleSwitch;
