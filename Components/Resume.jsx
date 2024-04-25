import React from "react";

function Resume() {
  return (
    <div className="resume">
      <div className="letter">
        <h1>Cover Letter</h1>
        <p>
          Dear Sir or Madam, My name is Daniel Beck. I'm from Hungary. I can
          <br />
          absolutely tell about myself is that I am a hard-
          <br />
          worker. I've started my developer journey for 5-6
          <br /> years ago. In the first few years I learned from Youtube videos
          and from
          <br /> other sites. However
          <br /> when I felt that's not enough ,quickly started to
          <br /> learn from Udemy.
          <br /> Although 1,5 years ago I started to work at a Geo
          <br /> company,where at the first few months I worked
          <br /> as a drilling worker, my boss knew that I have
          <br />
          knowledge for programming, so he offered me to
          <br /> make some office work for the company. I've
          <br /> worked a lot with Ninox and made Forms, which
          <br />
          helped the company to digitalise the protocolls or
          <br /> forms. This is the reason why we used less paper
          <br /> after that in the company.
          <br /> With Autohotkey I wrote a Code which copies the
          <br /> datas out from Pdf, and pastes these into a<br /> program
          (automatically), which name ist Winbohr.
          <br />
          This helps all the workflows at least 50% or more
          <br /> faster.
          <br /> I really love React, web,- and software
          <br /> development. I learn every day new stuffs and
          <br /> have become more deeper understanding how this
          <br /> field works.
          <br />
          <br />
          Yours sincerely Daniel Beck
        </p>
        <button className="floutBtnLeft">
        <a href="../files/Daniel Beck English-cv.pdf" download>English cv download</a>
        </button>
        <button className="floutBtnRight">
        <a href="../files/Daniel Beck Deutsch-cv.pdf" download>Deutsch cv download</a>
        </button>
      </div>
      <div className="cv">
        <img src="../img/cv.png" alt="my cv">
        </img>
        

      </div>
    </div>
  );
}

export default Resume;
