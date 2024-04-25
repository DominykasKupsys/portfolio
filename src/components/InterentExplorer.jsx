import React from "react";
import left from "../assets/IMG/left.png";
import right from "../assets/IMG/right.png";
import share_folder from "../assets/IMG/sharefolder.png";
import search from "../assets/IMG/searchicon.png";
import folder from "../assets/IMG/xp_folder_iconm.png";
import deleteIcon from "../assets/IMG/delete.png";
import undoIcon from "../assets/IMG/Undo.png";
import moveToIcon from "../assets/IMG/move_to_icon.png";
import copyToIcon from "../assets/IMG/copy_to.png";
import goIcon from "../assets/IMG/go.png";
import folderSearchIcon from "../assets/IMG/folder_search_icom.png";
import PetWars from "../assets/IMG/PetWars.png";
import MySQL from "../assets/IMG/MySQLogo.png";
import Node from "../assets/IMG/node.png";
import CSSLogo from "../assets/IMG/csslogo.png";
import JSLogo from "../assets/IMG/JavaScript-Logo.webp";
import expressLogo from "../assets/IMG/expressJSlogo.png";

const InternetExplorer = () => {
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
            https://myprojects.com/home
          </div>
          <div className="col-2 d-flex align-items-center ">
            <img src={goIcon} alt="go Icon" className="go_Icon" /> Go
          </div>
        </div>
      </div>
      <div
        className="InternetExplorer_content"
        style={{ overflowY: "auto", maxHeight: "calc(100vh - 200px)" }}
      >
        <h1 className="text-warning text-center">My projects</h1>
        <div className="project_list container text-light">
          <div className="project_list_item">
            <h3>Voting For Your favourite Animal Website</h3>
            <div className="d-flex flex-row justify-content-between align-items-center mb-3 px-3">
              <p>Front-End Back-End</p>
              <div>
                <img className="Skill_icons" src={Node} alt="" />
                <img className="Skill_icons" src={MySQL} alt="" />
                <img className="Skill_icons" src={CSSLogo} alt="" />
                <img className="Skill_icons" src={JSLogo} alt="" />
                <img className="Skill_icons" src={expressLogo} alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                I've developed a school project inspired by the concept of
                Kittenwar website. This platform allows users to create, edit,
                and delete their own virtual pets. These pets then engage in
                competitions to determine who's the better. Additionally, the
                website features a leaderboard showcasing top performers across
                various categories.
              </div>
              <div className="col-6">
                <img className="img-fluid mb-3" src={PetWars} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InternetExplorer;
