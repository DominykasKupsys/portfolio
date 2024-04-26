import React, { useState } from "react";
import left from "../../assets/IMG/arrowleft.png";
import right from "../../assets/IMG/arrowright.png";
import share_folder from "../../assets/IMG/sharefolder.png";
import search from "../../assets/IMG/searchicon.png";
import openFolder from "../../assets/IMG/openfolder.png";
import foldericon2 from "../../assets/IMG/foldericon.png";
import goIcon from "../../assets/IMG/go.png";
import folderSearchIcon from "../../assets/IMG/folder_search_icom.png";
import AboutMe from "./InternetExplorerContent/AboutMe";
import Projects from "./InternetExplorerContent/Projects";

const InternetExplorer = ({ size }) => {
  const [address, setAddress] = useState("C:\\Portfolio\\Projects");
  console.log(address);

  const handleAddressChange = (newValue) => {
    setAddress(newValue);
  };
  return (
    <>
      <div className="Folder_nav py-1">
        <div className="d-flex flex-row align-items-center gap-2">
          <div className="d-flex align-items-center arrows_sharing ">
            <button
              className="btn btn-link p-0"
              onClick={() => handleAddressChange("C:\\Portfolio\\Projects")}
            >
              <img src={left} alt="left arrow" className="arrows" /> Back
            </button>
            <button
              className="btn btn-link p-0"
              onClick={() => handleAddressChange("C:\\Portfolio\\About Me")}
            >
              <img src={right} alt="right arrow" className="arrows" />
            </button>
            <div className="folder_icon_hover">
              <img
                src={share_folder}
                alt="share folder"
                className="share_folder"
              />
            </div>
          </div>
          <div className="Search_folders px-1  d-flex">
            <div className="search_folder_item folder_icon_hover">
              <img src={search} alt="search" className="Search_folders_icons" />{" "}
              Search
            </div>
            <div className="search_folder_item folder_icon_hover">
              <img
                src={openFolder}
                alt="search"
                className="Search_folders_icons"
              />{" "}
              Folders
            </div>
          </div>
          <div className="folder_icon_hover">
            <img src={foldericon2} alt="move to" className="other_icons" />
          </div>
        </div>
      </div>
      <div className="Folder_search">
        <div className="row">
          <div className="col-1 d-flex align-items-center text-secondary">
            Address
          </div>
          <div className="col-10 search_box">
            <span>{address}</span>
            <img
              src={folderSearchIcon}
              alt="folder search icon"
              className="go_Icon"
            />
          </div>
          <div className="col-1 d-flex align-items-center p-0">
            <button
              className="btn btn-link p-0"
              onClick={() => handleAddressChange("C:\\Portfolio\\About Me")}
            >
              <img src={goIcon} alt="go Icon" className="go_Icon" /> Go
            </button>
          </div>
        </div>
      </div>
      <div className="InternetExplorer_content">
        {address === "C:\\Portfolio\\Projects" && <Projects size={size} />}
        {address === "C:\\Portfolio\\About Me" && <AboutMe size={size} />}
      </div>
    </>
  );
};

export default InternetExplorer;
