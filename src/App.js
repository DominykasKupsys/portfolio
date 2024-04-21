import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import WindowsFooter from "./components/WindowsFooter";
import { useState } from "react";
import OpenApp from "./components/OpenApp";
import notepadLogo from "./assets/IMG/notepad_logo.png";
import folderLogo from "./assets/IMG/xp_folder_iconm.png";
import githubLogo from "./assets/IMG/githublogo.webp";
import { Rnd } from "react-rnd";

function App() {
  const [openApps, setOpenApps] = useState([]);

  const handleAppOpen = (appName) => {
    if (!openApps.includes(appName)) {
      setOpenApps([...openApps, appName]);
    }
  };

  const handleAppClose = (appName) => {
    setOpenApps(openApps.filter((app) => app !== appName));
  };

  return (
    <div className="container-fluid background">
      <main className="app-content d-flex justify-content-center">
        <div className="app text-center p-0">
          <img
            src={notepadLogo}
            className="app_icon"
            alt="notepad app"
            onClick={() => handleAppOpen("notepad is open")}
          />
          My Soft Skills
        </div>
        <div className="app text-center p-0">
          <img
            src={folderLogo}
            className="app_icon"
            alt="folder"
            onClick={() => handleAppOpen("folder is open")}
          />
          My Technical Skills
        </div>
        <div className="app text-center p-0">
          <a
            href="https://github.com/DominykasKupsys"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} className="app_icon" alt="github app" />
            My GitHub
          </a>
        </div>
        {openApps.map((showApp, index) => (
          <Rnd bounds=".container-fluid">
            <OpenApp
              key={index}
              handleAppClose={() => handleAppClose(showApp)}
              showApp={showApp}
            />
          </Rnd>
        ))}
      </main>
      <WindowsFooter />
    </div>
  );
}

export default App;
