import React, { useEffect, useState } from "react";
import WindowsStartButton from "../assets/IMG/windows_xp_start_button (2).png";

const WindowsFooter = () => {
  const [showTime, setShowTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      const timeString =
        currentDate.getHours() + ":" + currentDate.getMinutes();
      setShowTime(timeString);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

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
