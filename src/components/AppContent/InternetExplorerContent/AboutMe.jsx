import React from "react";
import face from "../../../assets/IMG/face.jpg";

const AboutMe = ({ size }) => {
  return (
    <div
      style={{
        maxHeight: `calc(${size.height}px - 8rem)`,
        overflowY: "auto",
      }}
    >
      <h1 className="text-danger text-center ">About Me</h1>
      <div className="d-flex justify-content-center text-center">
        <div className="text-light">
          <h1>
            Dominykas <span className="text-danger">Kupšys</span>
          </h1>
          <img
            className="img-fluid mb-3 rounded-circle"
            src={face}
            alt=""
            style={{ width: "200px" }}
          />
          <h3 className="border-bottom pb-3 w-75 mx-auto text-start">
            My Coding Journey
          </h3>
          <p className="w-75 mx-auto">
            I am a full-stack developer based in Kretinga, Lithuania. My coding
            journey started not too long ago when I began attending programming
            courses at school. At first, I didn't enjoy it, but now coding is
            like a hobby to me. I can't wait to acquire more knowledge and
            skills to create amazing websites or even apps.
          </p>
          <h3 className="border-bottom pb-3 w-75 mx-auto text-start">
            Education
          </h3>
          <p className="w-75 mx-auto">
            I am currently studying at Klaipėdos Technologijų mokymo centras. I
            am currently learning full-stack development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
