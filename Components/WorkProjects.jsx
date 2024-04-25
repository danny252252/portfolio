import React from "react";
import ProjectWindow from "./ProjectWindow";

// always if i give a new window it's going to the right place 

function WrokProject(props) {
  return (
    <div className="workproject">
        <ProjectWindow 
            href=""
            src="../img/comingSoon.jpg"
            alt="raincolor"
        />
        <ProjectWindow 
            href=""
            src="../img/comingSoon.jpg"
            alt="raincolor"
        />
        <ProjectWindow 
            href=""
            src="../img/comingSoon.jpg"
            alt="raincolor"
        />
        <ProjectWindow 
            href=""
            src="../img/comingSoon.jpg"
            alt="raincolor"
        />
    </div>
  );
}

export default WrokProject;