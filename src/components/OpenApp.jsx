// OpenApp.js
import React from "react";
import closeButton from "../assets/IMG/windows_close_button.png";
import notepadLogo from "../assets/IMG/notepad_logo.png";
import folderLogo from "../assets/IMG/xp_folder_iconm.png";
import "../css/Notepad.css";
import AppFolder from "./AppFolder";

const OpenApp = ({ handleAppClose, showApp }) => {
  const value = `My Soft Skills:
  Honesty, 
  Hard work, 
  Responsibility, 
  Loyalty, 
  Always trying to improve.`;
  return (
    <div className="notepad">
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
            <img src={folderLogo} className="notepad_logo" alt="folder logo" />
          )}
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
      <div className="notepad_navbar d-flex flex-start gap-3">
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
      <div className="notepad_content bg-light h-100">
        {showApp === "notepad is open" && (
          <textarea
            className="w-100 h-100 p-2 border-0"
            style={{ resize: "none", outline: "none", textDecoration: "none" }}
            defaultValue={value}
          ></textarea>
        )}
        {showApp === "folder is open" && <AppFolder />}
      </div>
    </div>
  );
};

export default OpenApp;
