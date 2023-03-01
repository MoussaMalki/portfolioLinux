import "./ComponentsStyles.css";
import { useEffect } from "react";
const ThemeSwitch = (props) => {
  const toggleTheme = (e) => {
    if (e.target.checked === false) {
      document.querySelector("#root").className = "dark";
      localStorage.setItem("theme", "dark");
    } else {
      document.querySelector("#root").className = "light";
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      document.querySelector("#root").className = "dark";
    } else {
      document.querySelector("#root").className = "light";
      document.querySelector("#checkbox").checked = true;
    }
  }, []);
  return (
    <div className={props.class}>
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        onClick={toggleTheme}
      />
      <label htmlFor="checkbox" className="checkbox-label">
        <i className="bx bxs-moon" id="moonIcon"></i>
        <i className="bx bxs-sun" id="sunIcon"></i>
        <span className="ball"></span>
      </label>
    </div>
  );
};

export default ThemeSwitch;
