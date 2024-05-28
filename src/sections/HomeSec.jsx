import "./HomeSec.css";
import Terminal from "../components/Terminal";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Translation from "../LanguagesData.json";
import NavBar from "./NavBar";
import React, { useState, useEffect, useRef } from "react";

const HomeSec = () => {
  // for translating:
  const [appNames, setAppNames] = useState({});
  const [translationLang, setTranslationLang] = useState({});
  const [currentLang, setCurrentLang] = useState("");
  const [terminalIsClicked, setTerminalIsClicked] = useState(false);
  const [projectClicked, setProjectClicked] = useState(false);
  const [contactClicked, setContactClicked] = useState(false);

  // for moving the elements
  const [position, setPosition] = useState({ x: 50, y: 100 });
  const [dragging, setDragging] = useState(false);
  const ref = useRef(null);
  const [position2, setPosition2] = useState({ x: 50, y: 300 });
  const [dragging2, setDragging2] = useState(false);
  const ref2 = useRef(null);
  const [position3, setPosition3] = useState({ x: 50, y: 200 });
  const [dragging3, setDragging3] = useState(false);
  const ref3 = useRef(null);

  // for the window buttons
  const [isItHidden, setIsItHidden] = useState(true);
  const [isItHidden2, setIsItHidden2] = useState(true);
  const [isItHidden3, setIsItHidden3] = useState(true);

  // for changing the language on load and when the local storage gets updated
  useEffect(() => {
    changeLang();
    const handleMyKeyUpdated = () => {
      changeLang();
    };
    window.addEventListener("click", handleMyKeyUpdated);
    return () => {
      window.removeEventListener("click", handleMyKeyUpdated);
    };
  }, []);

  function changeLang() {
    if (localStorage.getItem("lang") === "ar") {
      setAppNames(Translation.ar.appNames);
      setTranslationLang(Translation.ar);
      setCurrentLang("ar");
    } else {
      setAppNames(Translation.en.appNames);
      setTranslationLang(Translation.en);
      setCurrentLang("en");
    }
  }
  // event listeners for the mouse grabbing
  useEffect(() => {
    document.addEventListener("mouseup", stopDragging);
    document.addEventListener("mousemove", handleMouseMove);

    document.addEventListener("mouseup", stopDragging2);
    document.addEventListener("mousemove", handleMouseMove2);

    document.addEventListener("mouseup", stopDragging3);
    document.addEventListener("mousemove", handleMouseMove3);

    return () => {
      // clean up functions
      document.removeEventListener("mouseup", stopDragging);
      document.removeEventListener("mousemove", handleMouseMove);

      document.removeEventListener("mouseup", stopDragging2);
      document.removeEventListener("mousemove", handleMouseMove2);

      document.removeEventListener("mouseup", stopDragging3);
      document.removeEventListener("mousemove", handleMouseMove3);
    };
  });
  // moving elements on page functions
  function startDragging(e) {
    if (e.target.parentElement.getAttribute("num") === "1") {
      setDragging(true);
    }
    if (e.target.parentElement.getAttribute("num") === "2") {
      setDragging2(true);
    }
    if (e.target.parentElement.getAttribute("num") === "3") {
      setDragging3(true);
    }
  }

  function stopDragging(e) {
    setDragging(false);
  }

  function stopDragging2(e) {
    setDragging2(false);
  }
  function stopDragging3(e) {
    setDragging3(false);
  }

  function handleMouseMove(e) {
    if (!dragging) return;
    let newX = position.x + e.clientX - ref.current.offsetLeft - 30;
    let newY = position.y + e.clientY - ref.current.offsetTop + 10;
    if (newY + ref.current.offsetHeight > window.innerHeight * 0.9)
      newY = window.innerHeight * 0.9 - ref.current.offsetHeight;
    if (newX < 0) newX = 0;
    if (newY < 83) newY = 83;
    if (newX + ref.current.offsetWidth > window.innerWidth)
      newX = window.innerWidth - ref.current.offsetWidth;
    if (newY + ref.current.offsetHeight > window.innerHeight)
      newY = window.innerHeight - ref.current.offsetHeight;
    setPosition({ x: newX, y: newY });
  }

  function handleMouseMove2(e) {
    if (!dragging2) return;
    let newX = position2.x + e.clientX - ref2.current.offsetLeft - 30;
    let newY = position2.y + e.clientY - ref2.current.offsetTop + 10;
    if (newY + ref2.current.offsetHeight > window.innerHeight * 0.9)
      newY = window.innerHeight * 0.9 - ref2.current.offsetHeight;
    if (newX < 0) newX = 0;
    if (newY < 83) newY = 83;
    if (newX + ref2.current.offsetWidth > window.innerWidth)
      newX = window.innerWidth - ref2.current.offsetWidth;
    if (newY + ref2.current.offsetHeight > window.innerHeight)
      newY = window.innerHeight - ref2.current.offsetHeight;
    setPosition2({ x: newX, y: newY });
  }

  function handleMouseMove3(e) {
    if (!dragging3) return;
    let newX = position3.x + e.clientX - ref3.current.offsetLeft - 30;
    let newY = position3.y + e.clientY - ref3.current.offsetTop + 10;
    if (newY + ref3.current.offsetHeight > window.innerHeight * 0.9)
      newY = window.innerHeight * 0.9 - ref3.current.offsetHeight;
    if (newX < 0) newX = 0;
    if (newY < 83) newY = 83;
    if (newX + ref3.current.offsetWidth > window.innerWidth)
      newX = window.innerWidth - ref3.current.offsetWidth;
    if (newY + ref3.current.offsetHeight > window.innerHeight)
      newY = window.innerHeight - ref3.current.offsetHeight;
    setPosition3({ x: newX, y: newY });
  }

  // getting the items back in their initial position when the window is resized so the elements don't
  // go out of the page

  useEffect(() => {
    const handleResize = () => {
      setPosition({ x: 50, y: 100 });
      setPosition2({ x: 50, y: 300 });
      setPosition3({ x: 50, y: 200 });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <section
        id="Home"
        style={{
          backgroundColor: "var(--background-color)",
          position: "relative",
        }}
      >
        <NavBar />
        <div
          ref={ref}
          num="1"
          style={{
            position: "absolute",
            top: position.y,
            left: position.x,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: "1",
          }}
          onMouseDown={startDragging}
          onClick={() => {
            if (dragging === false) {
              setIsItHidden(false);
            }
          }}
        >
          <img
            src="/public/images/terminal.png"
            style={{ height: "3rem", marginBottom: "0.5rem" }}
            alt=""
          />
          <p style={{ fontSize: "1rem", color: "#fff", weight: "700" }}>
            {appNames.f}
          </p>
        </div>

        <div
          ref={ref2}
          num="2"
          style={{
            position: "absolute",
            top: position2.y,
            left: position2.x,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            zIndex: "1",
          }}
          onMouseDown={startDragging}
          onClick={() => {
            if (dragging3 === false) {
              setIsItHidden3(false);
            }
          }}
        >
          <img
            src="/public/images/gmail.png"
            style={{ height: "2.7rem", marginBottom: "0.6rem", padding: "0 0.3rem" }}
            alt=""
          />

          <p style={{ fontSize: "1rem", color: "#fff", weight: "700" }}>
            {appNames.s}
          </p>
        </div>

        <div
          ref={ref3}
          num="3"
          style={{
            position: "absolute",
            top: position3.y,
            left: position3.x,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            zIndex: "1",
          }}
          onMouseDown={startDragging}
          onClick={() => {
            if (dragging3 === false) {
              setIsItHidden2(false);
            }
          }}
        >
          <img
            src="/public/images/folder.png"
            style={{ height: "2.7rem", marginBottom: "0.6rem" }}
            alt=""
          />

          <p style={{ fontSize: "1rem", color: "#fff", weight: "700" }}>
            {appNames.t}
          </p>
        </div>

        <TerminalContainer
          isItHidden={isItHidden}
          changeHiddenState={(value) => setIsItHidden(value)}
          changeTerminalIsClicked={(value) => {
            setTerminalIsClicked(value);
          }}
          terminalIsClicked={terminalIsClicked}
          translationLang={translationLang}
          currentLang={currentLang}
        />

        <ProjectsContainer
          isItHidden={isItHidden2}
          changeHiddenState={(value) => setIsItHidden2(value)}
          changeProjectIsClicked={(value) => {
            setProjectClicked(value);
          }}
          terminalIsClicked={projectClicked}
          translationLang={translationLang}
          currentLang={currentLang}
        />

        <ContactContainer
          isItHidden={isItHidden3}
          changeHiddenState={(value) => setIsItHidden3(value)}
          changeProjectIsClicked={(value) => {
            setContactClicked(value);
          }}
          terminalIsClicked={contactClicked}
          translationLang={translationLang}
          currentLang={currentLang}
        />
      </section>
    </>
  );
};

const TerminalContainer = (props) => {
  const [position, setPosition] = useState({ x: 20, y: 100 });
  const [dragging, setDragging] = useState(false);
  const ref = useRef(null);
  const [resize, setResize] = useState(false);

  useEffect(() => {
    document.addEventListener("mouseup", stopDragging);
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      // clean up functions
      document.removeEventListener("mouseup", stopDragging);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  });

  useEffect(() => {
    const handleResize = () => {
      setPosition({ x: 20, y: 100 });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function startDragging(e) {
    setDragging(true);
  }

  function stopDragging(e) {
    setDragging(false);
  }

  function handleMouseMove(e) {
    if (!dragging) return;
    let newX = position.x + e.clientX - ref.current.offsetLeft - 250;
    let newY = position.y + e.clientY - ref.current.offsetTop - 10;
    if (newY + ref.current.offsetHeight > window.innerHeight * 1)
      newY = window.innerHeight * 1 - ref.current.offsetHeight;
    if (newX < 0) newX = 0;
    if (newY < 65) newY = 65;
    if (newX + ref.current.offsetWidth > window.innerWidth)
      newX = window.innerWidth - ref.current.offsetWidth;
    if (newY + ref.current.offsetHeight > window.innerHeight)
      newY = window.innerHeight - ref.current.offsetHeight;
    setPosition({ x: newX, y: newY });
  }

  return (
    <div
      ref={ref}
      num="4"
      id="terminal"
      style={{
        position: "absolute",
        top: resize === false ? position.y : 0,
        left: resize === false ? position.x : 0,
        display: props.isItHidden === true ? "none" : "initial",
        maxWidth: resize === false ? "35rem" : "100vw",
        width: resize === false ? "90%" : "100%",
        height: resize === false ? "35rem" : "100vh",
      }}
      onMouseDown={startDragging}
    >
      <div className="terminalBar">
        <div>Moussa@portfolio</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <i
            className="bx bx-minus"
            id="closeWindow"
            style={{
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => {
              if (localStorage.getItem("typing") === "true") {
                props.changeHiddenState(true);
              }

              props.changeTerminalIsClicked(!props.terminalIsClicked);
            }}
          ></i>
          <i
            className="bx bx-square"
            id="resizeWindow"
            style={{ fontSize: "1.07rem", cursor: "pointer" }}
            onClick={() => {
              setResize(!resize);
            }}
          ></i>
          <i
            className="bx bx-x"
            id="hideWindow"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
            onClick={() => {
              if (localStorage.getItem("typing") === "true") {
                props.changeHiddenState(true);
              }
            }}
          ></i>
        </div>
      </div>
      <div className="terminalContent">
        <Terminal
          translation={props.translationLang}
          lang={props.currentLang}
          click={props.terminalIsClicked}
          terminalHidden={props.isItHidden}
        />
      </div>
    </div>
  );
};

const ProjectsContainer = (props) => {
  const [position, setPosition] = useState({ x: 20, y: 100 });
  const [dragging, setDragging] = useState(false);
  const ref = useRef(null);
  const [resize, setResize] = useState(false);

  useEffect(() => {
    document.addEventListener("mouseup", stopDragging);
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      // clean up functions
      document.removeEventListener("mouseup", stopDragging);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  });

  useEffect(() => {
    const handleResize = () => {
      setPosition({ x: 20, y: 100 });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function startDragging(e) {
    setDragging(true);
  }

  function stopDragging(e) {
    setDragging(false);
  }

  function handleMouseMove(e) {
    if (!dragging) return;
    let newX = position.x + e.clientX - ref.current.offsetLeft - 250;
    let newY = position.y + e.clientY - ref.current.offsetTop - 10;
    if (newY + ref.current.offsetHeight > window.innerHeight * 1)
      newY = window.innerHeight * 1 - ref.current.offsetHeight;
    if (newX < 0) newX = 0;
    if (newY < 65) newY = 65;
    if (newX + ref.current.offsetWidth > window.innerWidth)
      newX = window.innerWidth - ref.current.offsetWidth;
    if (newY + ref.current.offsetHeight > window.innerHeight)
      newY = window.innerHeight - ref.current.offsetHeight;
    setPosition({ x: newX, y: newY });
  }

  return (
    <div
      ref={ref}
      num="4"
      id="projects"
      style={{
        position: "absolute",
        top: resize === false ? position.y : 0,
        left: resize === false ? position.x : 0,
        display: props.isItHidden === true ? "none" : "initial",
        maxWidth: resize === false ? "35rem" : "100vw",
        width: resize === false ? "90%" : "100%",
        height: resize === false ? "35rem" : "100vh",
      }}
      onMouseDown={startDragging}
    >
      <div className="projectBar">
        <div>Moussa@portfolio</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <i
            className="bx bx-minus"
            id="closeWindow"
            style={{
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => {
              props.changeHiddenState(true);

              props.changeTerminalIsClicked(!props.terminalIsClicked);
            }}
          ></i>
          <i
            className="bx bx-square"
            id="resizeWindow"
            style={{ fontSize: "1.07rem", cursor: "pointer" }}
            onClick={() => {
              setResize(!resize);
            }}
          ></i>
          <i
            className="bx bx-x"
            id="hideWindow"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
            onClick={() => {
              props.changeHiddenState(true);
            }}
          ></i>
        </div>
      </div>
      <div className="projectsContent">
        <Projects
          translation={props.translationLang}
          lang={props.currentLang}
        />
      </div>
    </div>
  );
};

const ContactContainer = (props) => {
  const [position, setPosition] = useState({ x: 20, y: 100 });
  const [dragging, setDragging] = useState(false);
  const ref = useRef(null);
  const [resize, setResize] = useState(false);

  useEffect(() => {
    document.addEventListener("mouseup", stopDragging);
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      // clean up functions
      document.removeEventListener("mouseup", stopDragging);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  });

  useEffect(() => {
    const handleResize = () => {
      setPosition({ x: 20, y: 100 });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function startDragging(e) {
    setDragging(true);
  }

  function stopDragging(e) {
    setDragging(false);
  }

  function handleMouseMove(e) {
    if (!dragging) return;
    let newX = position.x + e.clientX - ref.current.offsetLeft - 250;
    let newY = position.y + e.clientY - ref.current.offsetTop - 10;
    if (newY + ref.current.offsetHeight > window.innerHeight * 1)
      newY = window.innerHeight * 1 - ref.current.offsetHeight;
    if (newX < 0) newX = 0;
    if (newY < 65) newY = 65;
    if (newX + ref.current.offsetWidth > window.innerWidth)
      newX = window.innerWidth - ref.current.offsetWidth;
    if (newY + ref.current.offsetHeight > window.innerHeight)
      newY = window.innerHeight - ref.current.offsetHeight;
    setPosition({ x: newX, y: newY });
  }

  return (
    <div
      ref={ref}
      num="4"
      id="contact"
      style={{
        position: "absolute",
        top: resize === false ? position.y : 0,
        left: resize === false ? position.x : 0,
        display: props.isItHidden === true ? "none" : "initial",
        maxWidth: resize === false ? "35rem" : "100vw",
        width: resize === false ? "90%" : "100%",
        height: resize === false ? "35rem" : "100vh",
      }}
      onMouseDown={startDragging}
    >
      <div className="contactBar">
        <div>Moussa@portfolio</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <i
            className="bx bx-minus"
            id="closeWindow"
            style={{
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => {
              props.changeHiddenState(true);

              props.changeTerminalIsClicked(!props.terminalIsClicked);
            }}
          ></i>
          <i
            className="bx bx-square"
            id="resizeWindow"
            style={{ fontSize: "1.07rem", cursor: "pointer" }}
            onClick={() => {
              setResize(!resize);
            }}
          ></i>
          <i
            className="bx bx-x"
            id="hideWindow"
            style={{ fontSize: "1.5rem", cursor: "pointer" }}
            onClick={() => {
              props.changeHiddenState(true);
            }}
          ></i>
        </div>
      </div>
      <div className="contactContent">
        <Contact translation={props.translationLang} lang={props.currentLang} />
      </div>
    </div>
  );
};

export default HomeSec;
