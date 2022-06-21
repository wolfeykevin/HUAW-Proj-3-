import React, { useRef, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { GlobalContext } from "../_context/AppProvider";
import { Button } from "../_styled/StyledComponentLibrary";
import "../_styled/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { store } = useContext(GlobalContext);
  let title = store.displayTitle.current

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
      <div className="title">{title}</div>
      <div className="button-container">
        {location.pathname === "/" ?
          <>
          <Button
            className="navbar-button"
            onClick={() => {
              store.displayTitle.current = 'Leaderboard'
              navigate("/leaderboard/");
            }}
          >
            Leaderboard
          </Button>
          <Button
            className="navbar-button"
            onClick={() => {
              store.displayTitle.current = 'All Cards';
              navigate("/cardgallery/");
            }}
          >
            Card Gallery
          </Button>
          </>: <></>
        }
        {(location.pathname !== "/") ? (
          <Button
            className="navbar-button"
            onClick={() => {
              store.displayTitle.current = ''
              navigate("/");
            }}
          >
            Go Back
          </Button>
        ) : <></>}
      </div>
    </div>
  );
};

export default Navbar;
