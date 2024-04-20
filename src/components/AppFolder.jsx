import React from "react";
import left from "../assets/IMG/left.png";
import right from "../assets/IMG/right.png";
import "../css/AppFolders.css";
import share_folder from "../assets/IMG/share_folder_icon.png";
import search from "../assets/IMG/searchicon.png";
import folder from "../assets/IMG/xp_folder_iconm.png";
import deleteIcon from "../assets/IMG/delete.png";
import undoIcon from "../assets/IMG/Undo.png";
import moveToIcon from "../assets/IMG/move_to_icon.png";
import copyToIcon from "../assets/IMG/copy_to.png";
import goIcon from "../assets/IMG/go.png";
import folderSearchIcon from "../assets/IMG/folder_search_icom.png";
import AppFolderContent from "./AppFolderParts/AppFolderContent";

const AppFolder = () => {
  return (
    <>
      <div className="Folder_nav">
        <div className="row">
          <div className="navigation_sharing col-4 d-flex justify-content-around align-items-center">
            <img src={left} alt="left arrow" className="arrows disabled" /> Back
            <img
              src={right}
              alt="right arrow"
              className="arrows disabled"
            />{" "}
            Next
            <img
              src={share_folder}
              alt="share folder"
              className="share_folder"
            />
          </div>
          <div className="Search_folders col-4 d-flex justify-content-around align-items-center">
            <img
              src={search}
              alt="left arrow"
              className="Search_folders_icons"
            />{" "}
            Search
            <img
              src={folder}
              alt="right arrow"
              className="Search_folders_icons"
            />{" "}
            Folders
          </div>
          <div className="col-4 other_icons d-flex justify-content-around align-items-center">
            <img
              src={moveToIcon}
              alt="move to"
              className="other_icons disabled"
            />
            <img
              src={copyToIcon}
              alt="copy to"
              className="other_icons disabled"
            />
            <img src={deleteIcon} alt="delete" className="other_icons" />
            <img src={undoIcon} alt="undo" className="other_icons" />
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
            C:\Portfolio\Technical Skills
          </div>
          <div className="col-2 d-flex align-items-center ">
            <img src={goIcon} alt="go Icon" className="go_Icon" /> Go
          </div>
        </div>
      </div>
      <AppFolderContent />
    </>
  );
};

export default AppFolder;
