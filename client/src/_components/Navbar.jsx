import React from "react";
import { useNavigate } from "react-router-dom";
import "../_styled/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navbar-container">
      <img
        className="af-logo"
        src="/cards/Antidepressants.png"
        alt="air force logo"
      />
      <p className="title-version">HUAW v0.1</p>
      <p className="title">HURRY UP AND WAIT</p>
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
  );
};

export default Navbar;
