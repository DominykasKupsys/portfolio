import React from "react";
import HTML_logo from "../assets/IMG/HTML5logo.png";
import CSS_logo from "../assets/IMG/csslogo.png";
import JS_logo from "../assets/IMG/JavaScript-Logo.png";
import "../css/TechnicalSkills.css";
const TechnicalSkills = () => {
  return (
    <div className="container bg-dark d-flex justify-content-between flex-column">
      <h1 className="text-light text-center">Skills</h1>
      <div className="row">
        <div className="col-6 d-flex flex-row">
          <div>
            <img className="skill_logo" src={HTML_logo} alt="HTML5" />
            <p>HTML5</p>
          </div>
          <div>
            <img className="skill_logo" src={CSS_logo} alt="CSS" />
            <p>CSS</p>
          </div>
          <div>
            <img className="skill_logo" src={JS_logo} alt="JS" />
            <p>JavaScript</p>
          </div>
        </div>
        <div className="col-6">
          <div>
            <ul className="text-light">
              <li>Hard work</li>
              <li>Honesty</li>
              <li>Accountability</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
