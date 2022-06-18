import React, { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "../_styled/StyledComponentLibrary";
import "../_styled/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const displayTitle = useRef('Choose Your Career')

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img
          className="af-logo"
          src="/assets/af_logo.png"
          alt="air force logo"
        />
        <div className="title-name">HUAW</div>
        <div className="title-version">v0.5.1</div>
      </div>
      <div className="title">{displayTitle.current}</div>
      <div className="button-container">
        <Button
          className="navbar-button"
          onClick={() => {
            console.log("I don't do anything right now, sorry!");
          }}
        >
          Leaderboard
        </Button>
        {location.pathname === "/cardgallery/*" ? (
          <Button
            className="navbar-button"
            onClick={() => {
              navigate("/");
            }}
          >
            Go Back
          </Button>
        ) : (
          <Button
            className="navbar-button"
            onClick={() => {
              navigate("/cardgallery/*");
            }}
          >
            Card Gallery
          </Button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
