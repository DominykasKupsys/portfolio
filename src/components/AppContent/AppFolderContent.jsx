import React from "react";
import HTML5Logo from "../../assets/IMG/HTML5logo.png";
import CSSLogo from "../../assets/IMG/csslogo.png";
import JSLogo from "../../assets/IMG/JavaScript-Logo.webp";
import ReactLogo from "../../assets/IMG/reactlogo.png";
import BoostrapLogo from "../../assets/IMG/Bootstrap_logo.svg.png";
import MySQL from "../../assets/IMG/MySQLogo.png";
import MongoDB from "../../assets/IMG/MongoDBlogo.png";
import Node from "../../assets/IMG/node.png";
import left from "../../assets/IMG/arrowleft.png";
import right from "../../assets/IMG/arrowright.png";
import share_folder from "../../assets/IMG/sharefolder.png";
import search from "../../assets/IMG/searchicon.png";
import openFolder from "../../assets/IMG/openfolder.png";
import foldericon2 from "../../assets/IMG/foldericon.png";
import goIcon from "../../assets/IMG/go.png";
import folderSearchIcon from "../../assets/IMG/folder_search_icom.png";

const logos = [
  { src: HTML5Logo, alt: "HTML5", name: "HTML" },
  { src: CSSLogo, alt: "CSS", name: "CSS" },
  { src: JSLogo, alt: "JavaScript", name: "JavaScript" },
  { src: ReactLogo, alt: "React", name: "React" },
  { src: BoostrapLogo, alt: "Bootstrap", name: "Bootstrap" },
  { src: Node, alt: "Node", name: "Node" },
  { src: MySQL, alt: "MySQL", name: "MySQL" },
  { src: MongoDB, alt: "MongoDB", name: "MongoDB" },
];

const AppFolderContent = () => {
  return (
    <>
      <div className="Folder_nav py-1">
        <div className="d-flex flex-row align-items-center gap-2">
          <div className="d-flex align-items-center arrows_sharing ">
            <img src={left} alt="left arrow" className="arrows  " /> Back
            <img
              src={right}
              alt="right arrow"
              className="arrows disabled mx-2"
            />
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
            <img
              src={folderSearchIcon}
              alt="folder search icon"
              className="go_Icon"
            />
            C:\\Portfolio\\Technical Skills
          </div>
          <div className="col-1 d-flex align-items-center ">
            <img src={goIcon} alt="go Icon" className="go_Icon" /> Go
          </div>
        </div>
      </div>
      <div className="Folder_content d-flex gap-3 flex-wrap">
        {logos.map((logo, index) => (
          <div key={index} className="ms-2 mt-3 app_icons">
            <div className="d-flex justify-content-center">
              <div className="d-flex flex-row align-items-center">
                <img src={logo.src} alt={logo.alt} className="Skill_icons" />
                <div className="d-flex flex-column">
                  <span>{logo.name}</span>
                  <span>Shortcut</span>
                  <span>1KB</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppFolderContent;
