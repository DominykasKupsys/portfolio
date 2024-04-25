import React, { useState } from "react";
import closeButton from "../assets/IMG/windows_close_button.png";
import notepadLogo from "../assets/IMG/notepad_logo.png";
import folderLogo from "../assets/IMG/xp_folder_iconm.png";
import AppFolder from "./AppFolder";
import { Rnd } from "react-rnd";
import InternetExplorer from "./InterentExplorer";
import resizeButton from "../assets/IMG/resizeButton.jpg";

const OpenApp = ({ handleAppClose, showApp }) => {
  const [size, setSize] = useState({ width: 750, height: 500 });
  const [resize, setResize] = useState("");
  const [asis, setAsis] = useState({ x: 400, y: 90 });

  function handleAppResize() {
    if (resize === "fullscreen") {
      setSize({ width: 750, height: 500 });
      setAsis({ x: 400, y: 90 });
      setResize("windowed");
    } else if (resize === "windowed" || resize === "") {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      setAsis({ x: 0, y: 0 });
      setSize({ width: screenWidth, height: screenHeight - 32 });
      setResize("fullscreen");
    }
  }
  const value = `My Soft Skills:
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
      minWidth={500}
      minHeight={300}
      bounds=".container-fluid"
      position={{ x: asis.x, y: asis.y }}
      onResize={(e, direction, ref, delta, position) => {
        setSize({
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        });
      }}
    >
      <div
        className="notepad"
        style={{ width: size.width, height: size.height }}
      >
        <div className="notepad_header d-flex justify-content-between">
          <div>
            {showApp === "notepad is open" && (
              <img
                src={notepadLogo}
                className="notepad_logo"
                alt="notepad logo"
              />
            )}
            {showApp === "folder is open" && (
              <img
                src={folderLogo}
                className="notepad_logo"
                alt="folder logo"
              />
            )}
          </div>
          <div className="d-flex me-2">
            <div className="close_button">
              <img
                src={resizeButton}
                className="close_icon"
                alt="resize button"
                onClick={() => handleAppResize()}
              />
            </div>
            <div className="close_button">
              <img
                src={closeButton}
                className="close_icon"
                alt="close button"
                onClick={() => handleAppClose(showApp)}
              />
            </div>
          </div>
        </div>
        <div
          className="notepad_navbar d-flex flex-start gap-3"
          style={resize === "fullscreen" ? { border: "none" } : {}}
        >
          <div className="notepad_navbar_item">File</div>
          <div className="notepad_navbar_item">Edit</div>
          {showApp === "notepad is open" && (
            <div className="notepad_navbar_item">Format</div>
          )}
          <div className="notepad_navbar_item">View</div>
          {showApp === "folder is open" && (
            <>
              <div className="notepad_navbar_item">Tools</div>
              <div className="notepad_navbar_item">Favourites</div>
            </>
          )}
          <div className="notepad_navbar_item">Help</div>
        </div>
        <div
          className="notepad_content bg-light"
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
              defaultValue={value}
            ></textarea>
          )}
          {showApp === "folder is open" && <AppFolder />}
          {showApp === "Internet Explorer is open" && <InternetExplorer />}
        </div>
      </div>
    </Rnd>
  );
};

export default OpenApp;
