import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import WindowsFooter from "./components/WindowsFooter";
import { useState } from "react";
import { Rnd } from "react-rnd";
import AppContainer from "./components/AppContainer";
import notepadLogo from "./assets/IMG/notepadappicom.png";
import folderLogo from "./assets/IMG/openfolder.png";
import githubLogo from "./assets/IMG/githublogo.webp";
import InternetExplorerLogo from "./assets/IMG/internetExplorer_icon.png";

function App() {
  const [AppContainers, setAppContainers] = useState([]);

  const handleAppOpen = (appName) => {
    if (!AppContainers.includes(appName)) {
      setAppContainers([...AppContainers, appName]);
    }
  };

  const handleAppClose = (appName) => {
    setAppContainers(AppContainers.filter((app) => app !== appName));
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
