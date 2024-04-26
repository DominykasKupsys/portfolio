import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import WindowsFooter from "./components/WindowsFooter";
import { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import AppContainer from "./components/AppContainer";
import notepadLogo from "./assets/IMG/notepadappicom.png";
import folderLogo from "./assets/IMG/openfolder.png";
import githubLogo from "./assets/IMG/githublogo.webp";
import InternetExplorerLogo from "./assets/IMG/internetExplorer_icon.png";
import clippy from "./assets/IMG/clippy.gif";

function App() {
  const [speechText, setSpeechText] = useState(
    "Hey, Welcome to Dominykas Portfolio!"
  );
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const texts = [
      "Hey, Welcome to Dominykas Portfolio!",
      "You can learn about my technical and soft skills by double clicking on the corresponding icons!",
      "You can find out about me and my projects by double clicking on the internet explorer icon and clicking on adress bar!",
    ];

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * texts.length);
      setSpeechText(texts[randomIndex]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  const [AppContainers, setAppContainers] = useState([]);

  const handleAppOpen = (appName) => {
    if (!AppContainers.includes(appName)) {
      setAppContainers([...AppContainers, appName]);
    }
  };

  const handleAppClose = (appName) => {
    setAppContainers(AppContainers.filter((app) => app !== appName));
  };

  const toggleTextInvisibility = () => {
    setShowText(false);
  };
  const toggleTextVisibility = () => {
    setShowText(true);
  };

  return (
    <div className="container-fluid background">
      <main className="app-content d-flex justify-content-center">
        <Rnd default={{ x: 0, y: 0 }}>
          <div className="app text-center p-0">
            <img
              src={notepadLogo}
              className="app_icon"
              alt="notepad app"
              onDoubleClick={() => handleAppOpen("notepad is open")}
            />
            <p>My Soft Skills</p>
          </div>
        </Rnd>
        <Rnd default={{ x: 0, y: 80 }}>
          <div className="app text-center p-0">
            <img
              src={folderLogo}
              className="app_icon"
              alt="folder"
              onDoubleClick={() => handleAppOpen("folder is open")}
            />
            <p>My Technical Skills</p>
          </div>
        </Rnd>
        <Rnd default={{ x: 0, y: 160 }}>
          <div
            className="app text-center p-0"
            onDoubleClick={() =>
              window.open("https://github.com/DominykasKupsys", "_blank")
            }
          >
            <img src={githubLogo} className="app_icon" alt="github app" />
            <p>My Github</p>
          </div>
        </Rnd>
        <Rnd default={{ x: 0, y: 240 }}>
          <div className="app text-center p-0">
            <img
              src={InternetExplorerLogo}
              className="app_icon"
              alt="notepad app"
              onDoubleClick={() => handleAppOpen("Internet Explorer is open")}
            />
            <p>My Projects</p>
          </div>
        </Rnd>
        <Rnd default={{ x: 1100, y: 300 }}>
          <div className="gif-container">
            <div
              className="speech-bubble d-flex flex-column"
              style={{ visibility: showText ? "visible" : "hidden" }}
            >
              <button
                className="speech-bubble-close-button d-flex ms-auto align-items-center"
                onClick={toggleTextInvisibility}
              >
                X
              </button>
              {speechText}
            </div>
            <img
              src={clippy}
              className="gif"
              alt="clippy gif"
              onClick={toggleTextVisibility}
            />
          </div>
        </Rnd>
        {AppContainers.map((showApp, index) => (
          <AppContainer
            key={index}
            handleAppClose={() => handleAppClose(showApp)}
            showApp={showApp}
          />
        ))}
      </main>
      <WindowsFooter />
    </div>
  );
}

export default App;
