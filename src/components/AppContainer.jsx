import React, { useState } from "react";
import closeButton from "../assets/IMG/windows_close_button.png";
import notepadLogo from "../assets/IMG/notepad_logo.png";
import folderLogo from "../assets/IMG/xp_folder_iconm.png";
import { Rnd } from "react-rnd";
import resizeButton from "../assets/IMG/resizeButton.jpg";
import Folder from "./AppContent/Folder";
import InternetExplorer from "./AppContent/InterentExplorer";
import MinimizeIcon from "../assets/IMG/Minimize_icon.jpg";
import windowsLogo from "../assets/IMG/windowsxplogo.webp";

const AppContainer = ({ handleAppClose, showApp }) => {
  const [size, setSize] = useState({ width: 844, height: 500 });
  console.log(size);
  const [resize, setResize] = useState("");
  const [asis, setAsis] = useState({ x: 400, y: 90 });
  const [prevSize, setPrevSize] = useState({ width: 844, height: 500 });

  function handleAppResize() {
    if (resize === "fullscreen") {
      setSize(prevSize);
      setResize("windowed");
    } else if (resize === "windowed" || resize === "") {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      setPrevSize(size);
      setAsis({ x: 0, y: 0 });
      setSize({ width: screenWidth, height: screenHeight - 32 });
      setResize("fullscreen");
    }
  }
  const NotepadText = `My Soft Skills:
  Honesty, 
  Hard work, 
  Responsibility, 
  Loyalty, 
  Always trying to improve.`;
  return (
    <Rnd
      default={{
        x: asis.x,
        y: asis.y,
        width: size.width,
        height: size.height,
      }}
      minWidth={740}
      minHeight={510}
      bounds="window"
      onDragStop={(e, d) => {
        setAsis({ x: d.x, y: d.y });
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setAsis({ x: position.x, y: position.y });
      }}
      position={{ x: asis.x, y: asis.y }}
      onResize={(e, direction, ref, delta, position) => {
        setSize({
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        });
      }}
    >
      <div
        className="OpenApp"
        style={{ width: size.width, height: size.height }}
      >
        <div className="OpenApp_header d-flex justify-content-between">
          <div>
            {showApp === "notepad is open" && (
              <div className="d-flex text-light">
                <img
                  src={notepadLogo}
                  className="header_logo"
                  alt="notepad logo"
                />
                <p>My Soft Skills - Notepad</p>
              </div>
            )}
            {showApp === "folder is open" && (
              <div className="d-flex text-light">
                <img
                  src={folderLogo}
                  className="header_logo"
                  alt="folder logo"
                />
                <p>My Technical Skills</p>
              </div>
            )}
          </div>
          <div className="d-flex me-2">
            <div className="close_button">
              <img
                src={MinimizeIcon}
                className="title_bar_icon"
                alt="minimize button"
              />
            </div>
            <div className="close_button">
              <img
                src={resizeButton}
                className="title_bar_icon"
                alt="resize button"
                onClick={() => handleAppResize()}
              />
            </div>
            <div className="close_button">
              <img
                src={closeButton}
                className="title_bar_icon"
                alt="close button"
                onClick={() => handleAppClose(showApp)}
              />
            </div>
          </div>
        </div>
        <div
          className="OpenApp_navbar d-flex align-items-center"
          style={resize === "fullscreen" ? { border: "none" } : {}}
        >
          <div className="OpenApp_navbar_item">File</div>
          <div className="OpenApp_navbar_item">Edit</div>
          {showApp === "notepad is open" && (
            <div className="OpenApp_navbar_item">Format</div>
          )}
          <div className="OpenApp_navbar_item">View</div>
          {(showApp === "folder is open" ||
            showApp === "Internet Explorer is open") && (
            <>
              <div className="OpenApp_navbar_item">Tools</div>
              <div className="OpenApp_navbar_item">Favourites</div>
            </>
          )}
          <div className="OpenApp_navbar_item">Help</div>
          {(showApp === "folder is open" ||
            showApp === "Internet Explorer is open") && (
            <div className="ms-auto OpenApp_navbar_logo">
              <img
                className="img-fluid "
                src={windowsLogo}
                alt="windows logo"
              />
            </div>
          )}
        </div>
        <div
          className="OpenApp_content bg-light"
          style={{
            height: `calc(100% - 3.5rem)`,
            ...(resize === "fullscreen" ? { border: "none" } : {}),
          }}
        >
          {showApp === "notepad is open" && (
            <textarea
              className="w-100 h-100 p-2 border-0"
              style={{
                resize: "none",
                outline: "none",
                textDecoration: "none",
              }}
              defaultValue={NotepadText}
            ></textarea>
          )}
          {showApp === "folder is open" && <Folder />}
          {showApp === "Internet Explorer is open" && (
            <InternetExplorer size={size} />
          )}
        </div>
      </div>
    </Rnd>
  );
};

export default AppContainer;
