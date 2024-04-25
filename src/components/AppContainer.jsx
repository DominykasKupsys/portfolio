import React, { useState } from "react";
import closeButton from "../assets/IMG/windows_close_button.png";
import notepadLogo from "../assets/IMG/notepad_logo.png";
import folderLogo from "../assets/IMG/xp_folder_iconm.png";
import { Rnd } from "react-rnd";
import resizeButton from "../assets/IMG/resizeButton.jpg";
import left from "../assets/IMG/left.png";
import right from "../assets/IMG/right.png";
import share_folder from "../assets/IMG/sharefolder.png";
import search from "../assets/IMG/searchicon.png";
import openFolder from "../assets/IMG/openfolder.png";
import foldericon2 from "../assets/IMG/foldericon.png";
import goIcon from "../assets/IMG/go.png";
import folderSearchIcon from "../assets/IMG/folder_search_icom.png";
import AppFolderContent from "./AppContent/AppFolderContent";
import InternetExplorer from "./AppContent/InterentExplorer";

const AppContainer = ({ handleAppClose, showApp }) => {
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
              <div className="d-flex text-light">
                <img
                  src={notepadLogo}
                  className="notepad_logo"
                  alt="notepad logo"
                />
                <p>My Soft Skills - Notepad</p>
              </div>
            )}
            {showApp === "folder is open" && (
              <div className="d-flex text-light">
                <img
                  src={folderLogo}
                  className="notepad_logo"
                  alt="folder logo"
                />
                <p>My Technical Skills</p>
              </div>
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
              defaultValue={NotepadText}
            ></textarea>
          )}
          <div className="Folder_nav">
            <div className="d-flex flex-row align-items-center gap-2">
              <div>
                <img src={left} alt="left arrow" className="arrows disabled" />{" "}
                Back
                <img
                  src={right}
                  alt="right arrow"
                  className="arrows disabled mx-2"
                />
                <img
                  src={share_folder}
                  alt="share folder"
                  className="share_folder"
                />
              </div>
              <div className="Search_folders px-2">
                <img
                  src={search}
                  alt="left arrow"
                  className="Search_folders_icons"
                />{" "}
                Search
                <img
                  src={openFolder}
                  alt="right arrow"
                  className="Search_folders_icons"
                />{" "}
                Folders
              </div>
              <div>
                <img src={foldericon2} alt="move to" className="other_icons" />
              </div>
            </div>
          </div>
          <div className="Folder_search">
            <div className="row">
              <div className="col-2 d-flex align-items-center">Address</div>
              <div className="col-8 search_box">
                <img
                  src={folderSearchIcon}
                  alt="folder search icon"
                  className="go_Icon"
                />
                {showApp === "folder is open" &&
                  "C:\\Portfolio\\Technical Skills"}
                {showApp === "Internet Explorer is open" &&
                  "C:\\Portfolio\\Projects"}
              </div>
              <div className="col-2 d-flex align-items-center ">
                <img src={goIcon} alt="go Icon" className="go_Icon" /> Go
              </div>
            </div>
          </div>
          {showApp === "folder is open" && <AppFolderContent />}
          {showApp === "Internet Explorer is open" && <InternetExplorer />}
        </div>
      </div>
    </Rnd>
  );
};

export default AppContainer;
