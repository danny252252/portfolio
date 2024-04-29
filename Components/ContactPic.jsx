import React from "react";

function ContactPic(props) {
  return (
    <div className="contactpic">
      <a href={props.href}>
        <img src={props.src} alt={props.alt} />
      </a>
    </div>
  );
}

export default ContactPic;
