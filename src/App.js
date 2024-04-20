import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import WindowsFooter from "./components/WindowsFooter";
import { useState } from "react";
import OpenApp from "./components/OpenApp";
import notepadLogo from "./assets/IMG/notepad_logo.png";
import folderLogo from "./assets/IMG/xp_folder_iconm.png";

function App() {
  const [showApp, setShowApp] = useState("no apps are open");
  console.log(showApp);
  const handleAppClose = () => {
    setShowApp("no apps are open");
  };
  return (
    <div className="container-fluid background ">
      <main className="app-content d-flex justify-content-center z-1">
        <div className="app text-center p-0">
          <img
            src={notepadLogo}
            className="app_icon"
            alt="notepad app"
            onClick={() => setShowApp("notepad is open")}
          />
          My Soft Skills
        </div>
        <div className="app text-center p-0">
          <img
            src={folderLogo}
            className="app_icon"
            alt="folder"
            onClick={() => setShowApp("folder is open")}
          />
          My Technical Skills
        </div>
        {showApp === "notepad is open" && (
          <OpenApp handleAppClose={handleAppClose} showApp={showApp} />
        )}
        {showApp === "folder is open" && (
          <OpenApp handleAppClose={handleAppClose} showApp={showApp} />
        )}
      </main>
      <WindowsFooter />
    </div>
  );
}

export default App;
