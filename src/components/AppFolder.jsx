import React from "react";
import left from "../assets/IMG/left.png";
import right from "../assets/IMG/right.png";

const AppFolder = () => {
  return (
    <div className="Folder_nav">
      <img src={left} alt="left arrow" className="arrows" /> Back
      <img src={right} alt="right arrow" className="arrows" /> Next
    </div>
  );
};

export default AppFolder;
