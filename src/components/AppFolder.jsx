import React from "react";
import left from "../assets/IMG/left.png";
import right from "../assets/IMG/right.png";
import share_folder from "../assets/IMG/sharefolder.png";
import search from "../assets/IMG/searchicon.png";
import openFolder from "../assets/IMG/openfolder.png";
import foldericon2 from "../assets/IMG/foldericon.png";
import goIcon from "../assets/IMG/go.png";
import folderSearchIcon from "../assets/IMG/folder_search_icom.png";
import AppFolderContent from "./AppFolderParts/AppFolderContent";

const AppFolder = () => {
  return (
    <>
      <div className="Folder_nav">
        <div className="d-flex flex-row align-items-center gap-2">
          <div>
            <img src={left} alt="left arrow" className="arrows disabled" /> Back
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
