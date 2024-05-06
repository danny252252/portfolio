import React from "react";

function Home(props) {
  return (
    <div className="homepage">
      <div className="h1">
        <h1>
          Hy I’m Daniel Beck, <br />a Web Developer
        </h1>
      </div>
      <div>
        <h2 className="h2">
          About myself: My passion
          <br /> is coding. I like challenges;
          <br /> mostly if it’s something
          <br /> what I’ve never done before
        </h2>
      </div>
      <div className="btn">
      <button className="hpb">
        <a  href="/Contact">
          Contact Me!
        </a>
        </button>
      </div>
      <div className="pict">
          <img src="../public/img/myself.jpg" alt="picture from me"></img>
      </div>
    </div>
  );
}

export default Home;
