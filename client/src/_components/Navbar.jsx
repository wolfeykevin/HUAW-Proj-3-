import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../_styled/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img
          className="af-logo"
          src="/assets/af_logo.png"
          alt="air force logo"
        />
        <div className="title-version">HUAW v0.3.5</div>
      </div>
      <div className="title">HURRY UP AND WAIT</div>
      <div className="button-container">
        <button
          className="navbar-button"
          onClick={() => {
            console.log("I don't do anything right now, sorry!");
          }}
        >
          Leaderboard
        </button>
        {location.pathname === "/cardgallery/*" ? (
          <button
            className="navbar-button"
            onClick={() => {
              navigate("/");
            }}
          >
            Go Back
          </button>
        ) : (
          <button
            className="navbar-button"
            onClick={() => {
              navigate("/cardgallery/*");
            }}
          >
            Card Gallery
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
