import React from "react";
import "../css/WindowsFooter.css";
import WindowsStartButton from "../assets/IMG/windows_xp_start_button (2).png";

const WindowsFooter = () => {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const showTime = `${hours}:${minutes}`;
  return (
    <footer className="WindowsFooter">
      <div className="footer_items start_button">
        <img
          src={WindowsStartButton}
          alt="Start Button"
          className="start_icon"
        />
      </div>
      <div className="footer_items time_button text-light">{showTime}</div>
    </footer>
  );
};

export default WindowsFooter;
