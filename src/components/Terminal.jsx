import { createElement } from "react";
import { useState, useEffect, useRef } from "react";
const Terminal = (props) => {
  const [owner, setOwner] = useState("");
  const [intro, setIntro] = useState("");
  const [lang, setLang] = useState("");
  const [firstRender, setFirstRender] = useState(false);
  const [click, setClick] = useState();
  const [typingIsDone, setTypingIsDone] = useState(true);
  const [isItHidden, setIsItHidden] = useState("");

  const [helpCommand, setHelpCommand] = useState("");
  const [aboutCommand, setAboutCommand] = useState("");

  const [Question, setQuestion] = useState("The Question is..");
  const [Answer, setAnswer] = useState("Unknown");

  useEffect(() => {
    if (firstRender) {
      setOwner(props.translation.terminalCommands.owner);
      setIntro(props.translation.terminalCommands.intro);
      setHelpCommand(props.translation.terminalCommands.help);
      setAboutCommand(props.translation.terminalCommands.about);
      setLang(props.lang);
      setClick(props.click);
      setIsItHidden(props.terminalHidden);
    }
    localStorage.setItem("typing", typingIsDone);
    setTimeout(() => {
      setFirstRender(true);
    }, 100);
  });

  useEffect(() => {
    if (isItHidden === false) {
      typeParagraph();
    }
    localStorage.setItem("hidden", isItHidden);
    document.querySelector("#currentCommand").textContent = "";
  }, [isItHidden, lang]);

  function typeParagraph() {
    var paragraph = document.getElementById("terminalP");
    paragraph.style.visibility = "visible";

    var text = intro;
    paragraph.textContent = "";
    for (var i = 0; i < text.length; i++) {
      (function (i) {
        setTimeout(function () {
          paragraph.textContent += text[i];
          if (i == text.length - 1) {
            setTypingIsDone(true);
            localStorage.setItem("typing", "true");
            localStorage.setItem("lang", lang);
          } else {
            setTypingIsDone(false);
            localStorage.setItem("typing", "false");
            localStorage.setItem("lang", lang);
          }
        }, 50 * i);
      })(i);
    }
  }

  const handleSub = (e) => {
    e.preventDefault();
    let paragraph = document.querySelector("#currentCommand");
    let command = e.target.children[0].value;

    let ownerP = document.createElement("span");
    ownerP.innerHTML = `<span style="fontSize:1rem; color: #2196f3">${owner}</span>
    <span style="fontSize: 1.1rem; color: #e91e63">${
      lang === "ar" ? "$:" : "$:"
    }</span>`;

    if (command === "help" || command === "مساعدة") {
      let span = document.createElement("span");
      span.innerHTML = `${ownerP.innerHTML}  ${helpCommand}`;
      span.style.cssText = "color: #e91e63; margin-bottom: 0.5rem";
      paragraph.appendChild(span);
      e.target.children[0].value = "";
    } else if (
      command === "/about" ||
      command === "\\عني" ||
      command === "عني\\"
    ) {
      let span = document.createElement("span");
      span.innerHTML = `${ownerP.innerHTML} <span style="color: #e91e63">${
        lang === "ar" ? "\\عني" : "/about"
      }</span> ${aboutCommand}`;
      span.style.cssText = "color: #fff; margin-bottom: 0.5rem";
      paragraph.appendChild(span);
      e.target.children[0].value = "";
    } else if (
      command === "/projects" ||
      command === "مشاريعي\\" ||
      command === "\\مشاريعي"
    ) {
      let span = document.createElement("span");
      span.style.cssText = "margin-bottom: 0.5rem";
      let pt1 = lang === "ar" ? "موقع لتتبع العادات" : "habit tracker site";
      let pt2 = lang === "ar" ? "موقع جيم" : "gym site";

      span.innerHTML = `${
        ownerP.innerHTML
      } <span style="color: #e91e63;  margin-bottom: 0.5rem;">${
        lang === "ar" ? "\\مشاريعي" : "/projects"
      }
      <span style="color: #fff">${
        lang === "ar" ? "اخر مشاريع قمت بهم" : "My recent projects:"
      }</span>
      </br><a href="https://habitrio.netlify.app"  target="_blank" style="text-decoration: underline; color: #FFB84C; cursor: pointer">${pt1}</a></span>
      </br><a href="https://fitness-gymwebsite.netlify.app"  target="_blank" style="text-decoration: underline; color: #FFB84C; cursor: pointer">${pt2}</a></span>

      </span>`;
      paragraph.appendChild(span);
      e.target.children[0].value = "";
    } else if (
      command === "/contact" ||
      command === "تواصل\\" ||
      command === "\\تواصل"
    ) {
      let span = document.createElement("span");
      span.style.cssText = "margin-bottom: 0.5rem";
      let pt1 = lang === "ar" ? "فيسبوك" : "Facebook";
      let pt2 = lang === "ar" ? "تويتر" : "Twitter";

      span.innerHTML = `${
        ownerP.innerHTML
      } <span style="color: #e91e63;  margin-bottom: 0.5rem;">${
        lang === "ar" ? "\\تواصل" : "/contact"
      }
      <span style="color: #fff">${
        lang === "ar"
          ? "يمكنك التواصل معي عن طريق"
          : "Feel free to contact me on:"
      }
     
    </br> <a href="https://www.facebook.com/moussa.em.1"  target="_blank" style="text-decoration: underline; color: #FFB84C; cursor: pointer">${pt1} </a>
    </br> <a href="https://twitter.com/MalkiRave"  target="_blank" style="text-decoration: underline; color: #FFB84C; cursor: pointer">${pt2} </a>
  
      </span>
    
      </span>`;
      paragraph.appendChild(span);
      e.target.children[0].value = "";
    } else if (
      command === "#clear" ||
      command === "#امسح" ||
      command === "امسح#"
    ) {
      document.querySelector("#currentCommand").innerHTML = "";
      e.target.children[0].value = "";
    } else if (command === "#randomQuote" && lang === "en") {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "f858ffbd64msh58d1f4a32e8751ap1dd925jsn7f91c02b3fae",
          "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
        },
      };
      fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
        .then((response) => response.json())
        .then((response) => {
          span.innerHTML = `${ownerP.innerHTML} <span style="color:#FFB84C">"${response.content}"</span> <span style="color:var(--main-color)">- ${response.originator.name}</span>`;
        })
        .catch((err) => console.error(err));
      let span = document.createElement("span");
      span.style.cssText = "margin-bottom: 0.5rem";
      paragraph.appendChild(span);
      e.target.children[0].value = "";
    } else if (command === "#randomQuestion" && lang === "en") {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "f858ffbd64msh58d1f4a32e8751ap1dd925jsn7f91c02b3fae",
          "X-RapidAPI-Host": "trivia-by-api-ninjas.p.rapidapi.com",
        },
      };
      fetch("https://trivia-by-api-ninjas.p.rapidapi.com/v1/trivia", options)
        .then((response) => response.json())
        .then((response) => {
          span.innerHTML = `${ownerP.innerHTML} <span style="color:#FFB84C">"${response[0].question}"</span><span style="color:var(--main-color)"> - ${response[0].answer}</span>`;
        })
        .catch((err) => console.error(err));

      let span = document.createElement("span");
      span.style.cssText = "margin-bottom: 0.5rem";
      paragraph.appendChild(span);

      e.target.children[0].value = "";
    } else {
      let span = document.createElement("span");
      if (lang === "ar") {
        span.innerHTML = `${ownerP.innerHTML} هذا الامر لا يوجد اكتب "مساعدة" لتحقق من الاوامر المتوفرة`;
      } else {
        span.innerHTML = `${ownerP.innerHTML} the command "${command}" doesn't exist, type "help" to see a list of available ones`;
      }
      span.style.cssText = "color: #FFB84C; margin-bottom: 0.5rem";
      paragraph.appendChild(span);
      e.target.children[0].value = "";
    }
  };

  return (
    <div style={{ width: "95%", marginTop: "1rem" }}>
      <p
        style={{
          wordWrap: "break-word",
          color: "#fff",
          textAlign: lang === "ar" ? "right" : "left",
          fontSize: "1.1rem",
        }}
      >
        <TerminalOwner text={owner} lang={lang} />
        <span id="terminalP"> {intro}</span>
      </p>
      <p
        id="currentCommand"
        style={{
          wordWrap: "break-word",
          color: "#fff",
          textAlign: lang === "ar" ? "right" : "left",
          fontSize: "1.1rem",
          marginTop: "0.5rem",
          display: "flex",
          flexDirection: "column",
        }}
      ></p>

      {typingIsDone === true ? (
        <form onSubmit={handleSub}>
          <input
            type="text"
            maxLength={15}
            style={{
              width: "100%",
              background: "none",
              border: "none",
              padding: "0.2rem 0",
              fontSize: "1.1rem",
              outline: "none",
              color: "#fff",
              textAlign: lang === "ar" ? "right" : "left",
            }}
            placeholder={lang === "ar" ? "اكتب <" : "> type"}
          />
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

const TerminalOwner = (props) => {
  return (
    <span>
      <span style={{ fontSize: "1.1rem", color: "#2196f3" }}>
        {props.text}{" "}
      </span>
      <span style={{ fontSize: "1.1rem", color: "#e91e63" }}>
        {props.lang === "ar" ? "$:" : "$:"}
      </span>{" "}
    </span>
  );
};

export default Terminal;
