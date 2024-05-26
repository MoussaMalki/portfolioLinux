import "./NavBar.css";
import { useState, useEffect } from "react";

const NavBar = () => {
  // get date and display it on the right of the header

  const options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const [formattedDate, setFormattedDate] = useState();
 
  setInterval(() => {
    let date = new Date();
    setFormattedDate(date.toLocaleString("en-US", options))
  }, 1000);

  // checking if the terminal paragraph typing animation is still going on
  const handleClick = () => {
    if (localStorage.getItem("typing") === "true") {
      setShowOptions(!showOptions);
    }
  };

  // listen for language change and save in the local storage
  const [selectedOption, setSelectedOption] = useState("en");
  const [showOptions, setShowOptions] = useState(false);

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
      <div
        className="headerLeft"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img src="./images/logo.png" alt="moussa malki's portfolio logo" />
        <p>{formattedDate}</p>
      </div>
      <div
        className="headerRight"
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
