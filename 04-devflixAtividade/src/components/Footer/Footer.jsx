import React, { Children } from "react";
import "./Footer.module.css";

const Footer = ({ children, link }) => {
  return (
    <footer>
      <p>
        Feito com 💖 por <a href={link} target= "_blank" >{children}</a>
      </p>
    </footer>
  );
};

export default Footer;
