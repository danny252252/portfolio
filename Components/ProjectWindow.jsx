import React from "react";

function ProjectWindow(props) {
  return (
    <div className="prw-btn">
      <a  href={props.href}>
        <img src={props.src} alt={props.alt}></img>
      </a>
    </div>
  );
}

export default ProjectWindow;
