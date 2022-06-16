import React from "react";

const Career = (props) => {
  return (
    <div className="career">
      <img alt={props.name} src={props.src} />
      <span>{props.name}</span>
    </div>
  );
};

export default Career;
