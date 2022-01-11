import React from "react";
import { Link } from "react-router-dom";

const HeaderFor = () => {
  return (
    <div className="header">
      <Link className="text" to="/">
        <img src="" alt="" className="img_header" />
        Coffee house
      </Link>
      <a className="text" href="#">
        Our coffee
      </a>
      <a className="text" href="#">
        For your pleasure
      </a>
    </div>
  );
};

export default HeaderFor;
