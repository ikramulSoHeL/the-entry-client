import React from "react";
import "../../styles/components/index.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerLinks">
          <Link to="/" className="f__link">
            Home
          </Link>
          <Link to="/all-events" className="f__link">
            Events
          </Link>
        </div>

        <div className="footerRignt">
          <p>© 2021 All rights reserved by ikramul</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
