import React from "react";
import { Link } from "react-router-dom";

import vector from './vector.png';

const HeaderForOurGoods = () => {
  return (
    <div className="header">
      <Link className="text" to="/">
        <img src={vector} alt="" className="img_header" />
        Coffee house
      </Link>
      <Link className="text" to="">
        Our coffee
      </Link>
      <Link className="text" to="">
        For your pleasure
      </Link>
    </div>
  );
};

export default HeaderForOurGoods;
