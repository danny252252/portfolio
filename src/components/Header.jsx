import React from "react";
import githubPic from "../images/github.png";
import linkidnPic from "../images/linkedin.png";

function Header() {
  return (
    <div className="header">
      <nav>
        <ul>
          <div className="left-nav-bar">
            <li>
              <a href="http://">
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="http://">
                <span>About</span>
              </a>
            </li>
            <li>
              <a href="http://">
                <span>Contact</span>
              </a>
            </li>
          </div>
          <div className="right-nav-bar">
            <li>
              <a href="https://github.com/danny252252" target="_blank">
                <img
                  className="navpic"
                  src={githubPic}
                  alt="github"
                  target="_blank"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/daniel-beck-3b0244223/"
                target="_blank"
              >
                <img className="navpic" src={linkidnPic} alt="github" />
              </a>
            </li>
          </div>
        </ul>
      </nav>

      <h1>Web developer!</h1>
    </div>
  );
}

export default Header;
