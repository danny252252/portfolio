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
          <a className="gelb" id="home" href="/">
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
            Work/Projects
          </a>
        </li>
        <li className={`hamb_menu${isOpen? `_is-open`: ""}`}>
          <a className="white" id="about" href="/About">
            About
          </a>
        </li>
        <li className={`hamb_menu${isOpen? `_is-open`: ""}`}>
          <a className="gelb" id="resume" href="/Resume">
            Resume
          </a>
        </li>
        <li className={`hamb_menu${isOpen? `_is-open`: ""}`}>
          <a className="white" id="contact/info" href="/Contact">
            Contact/Info
          </a>
        </li>
        <li onClick={toggleMenu}>
          <a className="menu_trigger">
            <img src="../public/img/Hamburger_icon.svg.png"></img>
          </a>
        </li>
        
      </ul>
    </div>
  );
}

export default Header;
