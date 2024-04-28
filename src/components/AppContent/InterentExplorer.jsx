import React, { useState } from "react";
import left from "../../assets/IMG/arrowleft.png";
import right from "../../assets/IMG/arrowright.png";
import search from "../../assets/IMG/searchicon.png";
import goIcon from "../../assets/IMG/go.png";
import AboutMe from "./InternetExplorerContent/AboutMe";
import Projects from "./InternetExplorerContent/Projects";
import ClosePage from "../../assets/IMG/pagex.png";
import RefreshPage from "../../assets/IMG/pagerefresh.png";
import GoHomeIcon from "../../assets/IMG/house.png";
import FavouriteIcon from "../../assets/IMG/start.png";
import shareTime from "../../assets/IMG/clock.png";
import email from "../../assets/IMG/letter.png";
import print from "../../assets/IMG/taxmachine.png";
import text from "../../assets/IMG/writing.png";
import share from "../../assets/IMG/people.png";
import ExplorerPage from "../../assets/IMG/internetexplorerpage.png";

const InternetExplorer = ({ size }) => {
  const [address, setAddress] = useState("DomykasDev.com/Portfolio/Projects");

  const handleAddressChange = (newValue) => {
    setAddress(newValue);
  };
  return (
    <>
      <div className="Folder_nav py-1">
        <div className="d-flex flex-row align-items-center gap-2">
          <div className="d-flex align-items-center arrows_sharing ">
            <button
              className="btn btn-link p-0"
              onClick={() =>
                handleAddressChange("DomykasDev.com/Portfolio/Projects")
              }
            >
              <img src={left} alt="left arrow" className="arrows" /> Back{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0.5rem"
                height="0.5rem"
                fill="currentColor"
                class="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </button>
            <button
              className="btn btn-link p-0"
              onClick={() =>
                handleAddressChange("DomykasDev.com/Portfolio/About Me")
              }
            >
              <img src={right} alt="right arrow" className="arrows" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0.5rem"
                height="0.5rem"
                fill="currentColor"
                class="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </button>
            <div className="folder_icon_hover">
              <img src={ClosePage} alt="close page" className="share_folder" />
            </div>
            <div className="folder_icon_hover">
              <img
                src={RefreshPage}
                alt="refresh page"
                className="share_folder"
              />
            </div>
            <div className="folder_icon_hover">
              <img src={GoHomeIcon} alt="home" className="share_folder" />
            </div>
          </div>
          <div className="Search_folders px-1  d-flex">
            <div className="search_folder_item folder_icon_hover">
              <img src={search} alt="search" className="Search_folders_icons" />{" "}
              Search
            </div>
            <div className="search_folder_item folder_icon_hover">
              <img
                src={FavouriteIcon}
                alt="favourite"
                className="Search_folders_icons"
              />{" "}
              Favourites
            </div>
            <div className="search_folder_item folder_icon_hover">
              <img
                src={shareTime}
                alt="share_clock"
                className="Search_folders_icons"
              />
            </div>
          </div>
          <div className="folder_icon_hover">
            <img src={email} alt="email" className="other_icons" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.5rem"
              height="0.5rem"
              fill="currentColor"
              class="bi bi-caret-down-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </div>
          <div className="folder_icon_hover">
            <img src={print} alt="print" className="other_icons" />
          </div>
          <img src={text} alt="write" className="other_icons" />
          <div className="folder_icon_hover">
            <img src={share} alt="friends" className="other_icons" />
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
              src={ExplorerPage}
              alt="Internet Explorer page"
              className="go_Icon me-2"
            />
            <span>{address}</span>
          </div>
          <div className="col-1 d-flex align-items-center p-0">
            <img src={goIcon} alt="go Icon" className="go_Icon" /> Go
          </div>
        </div>
      </div>
      <div className="InternetExplorer_content">
        {address === "DomykasDev.com/Portfolio/Projects" && (
          <Projects size={size} />
        )}
        {address === "DomykasDev.com/Portfolio/About Me" && (
          <AboutMe size={size} />
        )}
      </div>
    </>
  );
};

export default InternetExplorer;
