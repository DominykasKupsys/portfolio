import React from "react";
import PetWars from "../../../assets/IMG/PetWars.png";
import MySQL from "../../../assets/IMG/MySQLogo.png";
import Node from "../../../assets/IMG/node.png";
import CSSLogo from "../../../assets/IMG/csslogo.png";
import JSLogo from "../../../assets/IMG/JavaScript-Logo.webp";
import expressLogo from "../../../assets/IMG/expressJSlogo.png";
import prismaLogo from "../../../assets/IMG/primsaIcON.png";
import ReactLogo from "../../../assets/IMG/reactlogo.png";
import BoostrapLogo from "../../../assets/IMG/Bootstrap_logo.svg.png";
import typescriptLogo from "../../../assets/IMG/Typescript_logo_2020.svg.png";

const Projects = ({ size }) => {
  return (
    <>
      <h1 className="text-danger text-center">My projects</h1>
      <div
        className="project_list"
        style={{
          maxHeight: `calc(${size.height}px - 11rem)`,
          overflowY: "auto",
        }}
      >
        <div className="project_list_item text-light my-5 mx-5 d-flex flex-column">
          <h3 className="text-center flex-grow-1">
            Voting For Your favourite Animal Website
          </h3>
          <div className="d-flex flex-row justify-content-between align-items-center mb-3">
            <p className="text-danger">Front-End Back-End</p>
            <div>
              <img className="Skill_icons" src={Node} alt="" />
              <img className="Skill_icons" src={MySQL} alt="" />
              <img className="Skill_icons" src={CSSLogo} alt="" />
              <img className="Skill_icons" src={JSLogo} alt="" />
              <img className="Skill_icons" src={expressLogo} alt="" />
            </div>
          </div>
          <div className="row flex-grow-1">
            <div className="col-6 portfolio_text">
              I've developed a school project inspired by the concept of
              Kittenwar website. This platform allows users to create, edit, and
              delete their own virtual pets. These pets then engage in
              competitions to determine who's the better. Additionally, the
              website features a leaderboard showcasing top performers across
              various categories.
            </div>
            <div className="col-6">
              <img className="img-fluid mb-3" src={PetWars} alt="" />
            </div>
          </div>
        </div>
        <div className="project_list_item text-light mb-5 mx-5 d-flex flex-column">
          <h3 className="text-center flex-grow-1">Pet Adoption Website</h3>
          <div className="d-flex flex-row justify-content-between align-items-center mb-3 px-3">
            <p className="text-danger">Front-End Back-End</p>
            <div>
              <img className="Skill_icons" src={Node} alt="" />
              <img className="Skill_icons" src={prismaLogo} alt="" />
              <img className="Skill_icons" src={CSSLogo} alt="" />
              <img className="Skill_icons" src={JSLogo} alt="" />
              <img className="Skill_icons" src={ReactLogo} alt="" />
              <img className="Skill_icons" src={BoostrapLogo} alt="" />
              <img className="Skill_icons" src={typescriptLogo} alt="" />
            </div>
          </div>
          <div className="row flex-grow-1">
            <div className="col-6">
              School project. Together with my classmates, we created a pet
              adoption website. The website allows users to upload, edit, and
              delete their pet posts also they can check out other people posts.
              The website also has a login, register, password recovery, admin
              panel and messaging system. I mostly contributed in backend.
            </div>
            <div className="col-6">
              <img className="img-fluid mb-3" src={PetWars} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
