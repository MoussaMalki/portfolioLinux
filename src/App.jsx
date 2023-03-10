import "./index.css";
import NavBar from "./pages/NavBar";
import HomeSec from "./pages/HomeSec";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="App">
        {loading ? (
          <div id="loading-screen">
            <div
              className="spinner"
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="ring"></div>
              <div className="ring"></div>
              <div className="ring"></div>
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#fff",
                  position: "absolute",
                  top: "3.8rem",
                  left: "50%",
                  transform: "translate(-50%)",
                }}
              >
                Loading
              </p>
            </div>
          </div>
        ) : (
          <div>
            <HomeSec />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
