import React from "react";
import HTML5Logo from "../../assets/IMG/HTML5logo.png";
import CSSLogo from "../../assets/IMG/csslogo.png";
import JSLogo from "../../assets/IMG/JavaScript-Logo.png";
import ReactLogo from "../../assets/IMG/reactlogo.png";
import BoostrapLogo from "../../assets/IMG/Bootstrap_logo.svg.png";
import MySQL from "../../assets/IMG/MySQLogo.png";
import MongoDB from "../../assets/IMG/MongoDBlogo.png";
import Node from "../../assets/IMG/node.png";

const AppFolderContent = () => {
  return (
    <div className="Folder_content">
      <div className="Folder_content_item">
        <div className="row mt-3">
          <div className="col-4 d-flex justify-content-center">
            <div className="d-flex flex-row align-items-center">
              <img src={HTML5Logo} alt="HTML5" className="Skill_icons" />
              <div className="d-flex flex-column">
                <span>HTML</span>
                <span>Shortcut</span>
                <span>1KB</span>
              </div>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <div className="d-flex flex-row align-items-center">
              <img src={CSSLogo} alt="HTML5" className="Skill_icons" />
              <div className="d-flex flex-column">
                <span>CSS</span>
                <span>Shortcut</span>
                <span>1KB</span>
              </div>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <div className="d-flex flex-row align-items-center">
              <img src={JSLogo} alt="HTML5" className="Skill_icons" />
              <div className="d-flex flex-column">
                <span>JavaScript</span>
                <span>Shortcut</span>
                <span>1KB</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-4 d-flex justify-content-center">
            <div className="d-flex flex-row align-items-center">
              <img src={ReactLogo} alt="HTML5" className="Skill_icons" />
              <div className="d-flex flex-column">
                <span>React</span>
                <span>Shortcut</span>
                <span>1KB</span>
              </div>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <div className="d-flex flex-row align-items-center">
              <img src={BoostrapLogo} alt="HTML5" className="Skill_icons" />
              <div className="d-flex flex-column">
                <span>Bootstrap</span>
                <span>Shortcut</span>
                <span>1KB</span>
              </div>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <div className="d-flex flex-row align-items-center">
              <img src={Node} alt="HTML5" className="Skill_icons" />
              <div className="d-flex flex-column">
                <span>Node</span>
                <span>Shortcut</span>
                <span>1KB</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-4 d-flex justify-content-center">
            <div className="d-flex flex-row align-items-center">
              <img src={MySQL} alt="HTML5" className="Skill_icons" />
              <div className="d-flex flex-column">
                <span>MySQL</span>
                <span>Shortcut</span>
                <span>1KB</span>
              </div>
            </div>
          </div>
          <div className="col-4 d-flex justify-content-center">
            <div className="d-flex flex-row align-items-center">
              <img src={MongoDB} alt="HTML5" className="Skill_icons" />
              <div className="d-flex flex-column">
                <span>MongoDB</span>
                <span>Shortcut</span>
                <span>1KB</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFolderContent;
