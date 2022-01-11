import React from "react";
import { Link } from "react-router-dom";

import header from "./vector.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <Link className="text" to="/">
        <img src={header} alt="" className="img_header" />
        Coffee house
      </Link>
      <a className="text" href="#">
        Our coffee
      </a>
      <Link className="text" to="for_your_pleasure">
        For your pleasure
      </Link>
    </div>
  );
};

export default Header;
