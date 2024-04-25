import React from "react";
import HTML5Logo from "../../assets/IMG/HTML5logo.png";
import CSSLogo from "../../assets/IMG/csslogo.png";
import JSLogo from "../../assets/IMG/JavaScript-Logo.webp";
import ReactLogo from "../../assets/IMG/reactlogo.png";
import BoostrapLogo from "../../assets/IMG/Bootstrap_logo.svg.png";
import MySQL from "../../assets/IMG/MySQLogo.png";
import MongoDB from "../../assets/IMG/MongoDBlogo.png";
import Node from "../../assets/IMG/node.png";

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
  );
};

export default AppFolderContent;
