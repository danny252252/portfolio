import React, {useState} from "react";




function Header() {
// function for hamburger menu not the best and a bit repetitiv...
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
      setIsOpen((open) => !open);
  }
  return (
    <div className="headerComponent">
      <ul>
        <li className={`hamb_menu${isOpen? `_is-open`: ""}`}> 
          <a className="gelb" id="home" href="/Home">
            Home
          </a>
        </li>
        <li className={`hamb_menu${isOpen? `_is-open`: ""}`}>
          <a className="white" id="Skills" href="/Skills">
            Skills
          </a>
        </li>
        <li className={`hamb_menu${isOpen? `_is-open`: ""}`}>
          <a className="gelb" id="work/projects" href="/WorkProjects">
            work/projects
          </a>
        </li>
        <li className={`hamb_menu${isOpen? `_is-open`: ""}`}>
          <a className="white" id="about" href="/About">
            about
          </a>
        </li>
        <li className={`hamb_menu${isOpen? `_is-open`: ""}`}>
          <a className="gelb" id="resume" href="/Resume">
            resume
          </a>
        </li>
        <li className={`hamb_menu${isOpen? `_is-open`: ""}`}>
          <a className="white" id="contact/info" href="/Contact">
            contact/info
          </a>
        </li>
        <li onClick={toggleMenu}>
          <a className="menu_trigger">
            trigger
          </a>
        </li>
        
      </ul>
    </div>
  );
}

export default Header;
