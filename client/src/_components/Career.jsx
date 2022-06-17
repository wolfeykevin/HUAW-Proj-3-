import React from "react";
import "../_styled/StartScreen.css"

const Career = (props) => {
  return (
    <div className="career" onClick={props.clickHandler}>
      <span className="career-name">{props.name}</span>
      <img className="career-image" alt={props.name} src={props.src} />
    </div>
  );
};

export default Career;
