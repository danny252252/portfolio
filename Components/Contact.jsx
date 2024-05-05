import React from "react";
import ContactPic from "./ContactPic";
function Contact() {
  return (
    <div className="contact">
      {/* <div className="sub">
        <form>
          <label for="name"></label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name:"
          ></input>
          <br />
          <label for="email"></label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email Address:"
          ></input>
          <br />
          <label for="Phone nummber:"></label>
          <input
            type="text"
            id="Phone nummber:"
            name="Phone nummber:"
            placeholder="Phone nummber:"
          ></input>
          <br />
          <label for="Your Company:"></label>
          <input
            type="text"
            id="Your Company:"
            name="Your Company:"
            placeholder="Your Company:"
          ></input>
          <br />
          <label for="Something to say:"></label>
          <input
            className="buttomInput"
            type="text"
            id="Something to say:"
            name="Something to say:"
            placeholder="Something to say:"
          ></input>
          <br />
          <button type="submit"> Submit</button>
        </form>
      </div> */}
      <div className="social">
        <h1>Contact me!</h1>
        <ContactPic
          href="https://www.instagram.com/beck.dani/"
          src="../img/insta.png"
          alt="instagram"
        />
        <ContactPic
          href="https://linkedin.com/in/daniel-beck-3b0244223"
          src="../img/linkiden.png"
          alt="linkiden"
        />
        <ContactPic
          href="https://github.com/danny252252?tab=repositories"
          src="../img/github.png"
          alt="github"
        />
        <button><a href="mailto: danny252252@gmail.com">Send an Email</a></button>
      </div>
    </div>
  );
}

export default Contact;
