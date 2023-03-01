import { useState, useEffect } from "react";
const Projects = (props) => {
  const [projectIsOpen, setProjectIsOpen] = useState(false);
  const [projectNum, setProjectNum] = useState(0);
  const [translation, setTranslation] = useState("");

  return (
    <>
      <section
        style={{
          textAlign: props.lang === "ar" ? "right" : "left",
          display: projectIsOpen ? "none" : "initial",
        }}
      >
        <h1 style={{ fontSize: "1.2rem" }}>
          {props.lang === "ar" ? ":اخر مشاريعي" : "Recent projects:"}
        </h1>
        <div style={{ marginTop: "1rem", display: "flex" }}>
          {/* first project */}
          <div
            style={{
              width: "8rem",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              cursor: "pointer",
            }}
            onClick={() => {
              setProjectIsOpen(true);
              setProjectNum(1);
            }}
          >
            <img
              src="./images/habitrio.png"
              alt="logo of my app habitrio"
              style={{ width: "5rem" }}
            />
            <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>Habitiro</p>
          </div>
          {/* second project */}
          <div
            style={{
              width: "8rem",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              cursor: "pointer",
            }}
            onClick={() => {
              setProjectIsOpen(true);
              setProjectNum(2);
            }}
          >
            <img
              src="./images/localGym.png"
              alt="logo of my app habitrio"
              style={{ width: "5.3rem" }}
            />
            <p style={{ fontSize: "1.1rem", marginTop: "0.5rem" }}>Local gym</p>
          </div>
        </div>
        {/* each project page */}
      </section>
      <section
        style={{
          display: projectIsOpen ? "initial" : "none",
        }}
      >
        <i
          class="bx bx-arrow-back"
          style={{
            cursor: "pointer",
            fontSize: "1.3rem",
            marginBottom: "1rem",
          }}
          onClick={() => {
            setProjectIsOpen(false);
          }}
        ></i>
        <div style={{}}>
          <Project
            projectNum={projectNum}
            translation={props.translation}
            lang={props.lang}
          />
        </div>
      </section>
    </>
  );
};

const Project = (props) => {
  const [projectName, setProjectName] = useState("");
  const [projectImg, setProjectImg] = useState("");

  const [projectImg1, setProjectImg1] = useState("");
  const [projectImg2, setProjectImg2] = useState("");
  const [projectImg3, setProjectImg3] = useState("");

  const [projectDesc, setProjectDesc] = useState("");
  const [check, setCheck] = useState("");

  useEffect(() => {
    if (props.projectNum === 1) {
      setProjectName("Habitrio");
      setProjectImg("./images/habitrio.png");
      setProjectImg1("./images/project1img1.png");
      setProjectImg2("./images/project1img2.png");
      setProjectImg3("./images/project1img3.png");
      setCheck("https://habitrio.netlify.app");

      let projects = props.translation.projects;
      setProjectDesc(projects.project1.desc);

      document.querySelector("#technologies").innerHTML = `
      <i class='bx bxl-html5' style="color: #ED3D2B;font-size: 1.7rem"></i>
      <i class='bx bxl-css3' style="color: #0052D6;font-size: 1.7rem"></i>
      <i class='bx bxl-react' style="color: #00D6F1;font-size: 1.7rem"></i>
      `;
    } else if (props.projectNum === 2) {
      setProjectName("Local gym");
      setProjectImg("./images/localGym.png");
      setProjectImg1("./images/project2img1.png");
      setProjectImg2("./images/project2img2.png");
      setProjectImg3("./images/project2img3.png");
      setCheck("https://fitness-gymwebsite.netlify.app");

      let projects = props.translation.projects;
      setProjectDesc(projects.project2.desc);

      document.querySelector("#technologies").innerHTML = `
      <i class='bx bxl-html5' style="color: #ED3D2B;font-size: 1.7rem"></i>
      <i class='bx bxl-css3' style="color: #0052D6;font-size: 1.7rem"></i>
      <i class='bx bxl-javascript' style="color: #F6D548;font-size: 1.7rem"></i>
      `;
    }
  }, [props.projectNum, props.lang]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        className="upperBodyProject"
        style={{
          padding: "0 5vw",
          width: "90%",
          maxWidth: "60.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {" "}
            <img
              src={projectImg}
              alt="project logo"
              style={{
                width: props.projectNum === 2 ? "5.3rem" : "5rem",
                margin: "0.5rem 0",
              }}
            />
            <h1 style={{ marginLeft: "0.5rem" }}>{projectName}</h1>
          </div>

          <a
            href={check}
            target="_blank"
            style={{
              color: "#1b1b1b",
              fontWeight: "600",
              backgroundColor: "#fff",
              padding: "0.5rem 1.1rem",
              borderRadius: "5px",
            }}
          >
            {props.lang === "ar" ? "زر" : "Check"}
          </a>
        </div>
      </div>
      <div
        className="midBodyProject"
        style={{
          padding: "4vh 5vw",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img
          src={projectImg1}
          alt=""
          style={{
            width: "80%",
            maxWidth: "50rem",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        />
        <div
          className="sidePics"
          style={{
            marginTop: "0.5rem",
            width: "80%",
            maxWidth: "50rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <img
            src={projectImg2}
            alt=""
            style={{
              width: "30%",
              maxWidth: "24rem",
              borderRadius: "5px",
              margin: "0.5rem",
              cursor: "pointer",
            }}
            onClick={() => {
              setProjectImg1(projectImg2);
              setProjectImg2(projectImg1);
            }}
          />
          <img
            src={projectImg3}
            alt=""
            style={{
              width: "30%",
              maxWidth: "24rem",
              borderRadius: "5px",
              margin: "0.5rem",
              cursor: "pointer",
            }}
            onClick={() => {
              setProjectImg1(projectImg3);
              setProjectImg3(projectImg1);
            }}
          />
        </div>
      </div>
      <div
        className="lowerBodyProject"
        style={{ width: "70%", maxWidth: "40rem" }}
      >
        <h3 style={{ margin: "0.5rem 0", textAlign: "center" }}>
          {props.lang === "ar" ? ":الوصف" : "Description:"}
        </h3>
        <p style={{ textAlign: "center" }}>{projectDesc}</p>
        <h3 style={{ margin: "0.5rem 0", textAlign: "center" }}>
          {props.lang === "ar" ? ":التقنيات" : "Technologies:"}
        </h3>
        <p id="technologies" style={{ textAlign: "center" }}></p>
      </div>
    </div>
  );
};

export default Projects;
