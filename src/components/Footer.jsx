import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <p>runinng figura form left to right</p>
    </footer>
  );
}

export default Footer;
