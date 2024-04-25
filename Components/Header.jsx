import React from "react";

function Header() {
  return (
    <div className="headerComponent">
      <ul>
        <li>
          <a className="gelb" id="home" href="/Home">
            Home
          </a>
        </li>
        <li>
          <a className="white" id="Skills" href="/Skills">
            Skills
          </a>
        </li>
        <li>
          <a className="gelb" id="work/projects" href="/WorkProjects">
            work/projects
          </a>
        </li>
        <li>
          <a className="white" id="about" href="/About">
            about
          </a>
        </li>
        <li>
          <a className="gelb" id="resume" href="/Resume">
            resume
          </a>
        </li>
        <li>
          <a className="white" id="contact/info" href="">
            contact/info
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
