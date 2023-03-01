import "./NavBar.css";
import ThemeSwitch from "../components/ThemeSwitch";
import { useState, useEffect } from "react";

const NavBar = () => {
  // get date and display it
  const date = new Date();
  const options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDate = date.toLocaleString("en-US", options);

  const [selectedOption, setSelectedOption] = useState("en");
  const [showOptions, setShowOptions] = useState(false);

  const handleClick = () => {
    if (localStorage.getItem("typing") === "true") {
      setShowOptions(!showOptions);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("lang") === "ar") {
      setSelectedOption("ar");
    } else {
      setSelectedOption("en");
    }
  }, []);

  const handleOptionClick = (option) => {
    localStorage.setItem("lang", option);
    setSelectedOption(option);
    setShowOptions(false);
  };

  return (
    <header>
      <div className="boxOne" style={{ display: "flex", alignItems: "center" }}>
        <img src="./images/appLogo.png" alt="moussa malki's portfolio logo" />
        <p>{formattedDate}</p>
      </div>

      <div
        className="boxThree"
        style={{ display: "flex", alignItems: "center" }}
      >
        <div className="custom-dropdown">
          <div className="selected-option" onClick={handleClick}>
            {selectedOption}
            <i className="bx bx-chevron-down"></i>
          </div>
          {showOptions && (
            <ul className="options">
              <li onClick={() => handleOptionClick("en")}>en</li>
              <li onClick={() => handleOptionClick("ar")}>ar</li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
