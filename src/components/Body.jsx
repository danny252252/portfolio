import React from "react";

import telephone from "../images/telephone.png";
import email from "../images/email.png";
import work from "../images/onwork.jpg";

function Body() {
  return (
    <div>
      <div className="about">
        <h3>About Me!</h3>
        <p>
          Hy mein Name ist Daniel Beck, ich bin ein web Developer. Ich liebe
          Programmierung und Gaming auch. Nur meine Familie ist wichtiger als
          das. Jeden Tag ich probieren lernen etwas neu oder mach besser was ich
          weiße schon. Das ist die dritte Jahre ich mach web Developing.
        </p>
      </div>
      <hr></hr>
      <h2>Skills</h2>
      <div className="skills">
        <h3>Programmierung Sprachen:</h3>
        <ol>
          <li>-JavaScript</li>
          <li>-Python</li>
          <li>-HTML</li>
          <li>-CSS</li>
          <li>-SQL/NOSQL</li>
        </ol>
        <h3>Libraries & frameworks:</h3>
        <ol>
          <li>-EJS</li>
          <li>-Node.js</li>
          <li>-Json</li>
          <li>-DOM</li>
          <li>-jQuery</li>
          <li>-React</li>
        </ol>
        <h3>tools & platforms:</h3>
        <ol>
          <li>-Git</li>
          <li>-Github</li>
          <li>-VScode</li>
          <li>-atom</li>
          <li>-cmd</li>
        </ol>
      </div>
      <hr></hr>
      <div className="contact">
        <h3>contact</h3>

        <ul>
          <li>
            <img src={telephone} alt="015781294331"/>
            :+4915781294332
          </li>
          <li>
            <img src={email}  alt="email"/>
            :danny252252@gmail.com
          </li>
        </ul>
      </div>
      <div className="work">
        <h2>
          "The site is still on work. Every day come new content and function,
          thanks for the understanding."
        </h2>
        <img src={work} alt="still on work"/>
      </div>
    </div>
  );
}

export default Body;
