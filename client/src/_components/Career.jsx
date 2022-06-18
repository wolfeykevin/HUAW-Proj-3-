import React from "react";
import "../_styled/StartScreen.css"

const Career = (props) => {
  return (
    <div className="career" onClick={() => {
      props.clickHandler()
      for (let element of document.getElementsByClassName("career-name")) {
        if (element.id === props.name) {
          element.classList.add('name-selected')
        } else {
          element.classList.remove('name-selected')
        }
      }
      for (let element of document.getElementsByClassName("career-image")) {
        if (element.id === props.name) {
          element.classList.add('image-selected')
        } else {
          element.classList.remove('image-selected')
        }
      }
      }}>
      <span id={props.name} className="career-name">{props.name}</span>
      <img id={props.name}className="career-image" alt={props.name} src={props.src} />
    </div>
  );
};

export default Career;
