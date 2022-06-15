import React from "react";
import { useNavigate } from "react-router-dom";
import "../_styled/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <div>
        <img
          className="af-logo"
          src="/assets/af_logo.png"
          alt="air force logo"
        />
        <p className="title-version">HUAW v0.1</p>
      </div>
      <p className="title">HURRY UP AND WAIT</p>
      <div className="button-container">
        <button className="navbar-button">Resume Game</button>
        <button
          className="navbar-button"
          onClick={() => {
            navigate("/cardgallery/*");
          }}
        >
          Card Gallery
        </button>
      </div>
    </div>
  );
};

export default Navbar;
