import React from "react";
import { Link } from "react-router-dom";

import ve from './ve.png';

const HeaderOurCoffe=()=>{
    return(
        <div className="header">
      <Link className="text" to="/">
        <img src={ve} alt="" className="img_header" />
        Coffee house
      </Link>
      <Link className="text" to="">
        Our coffee
      </Link>
      <Link className="text" to="/for_your_pleasure">
        For your pleasure
      </Link>
    </div>
    )
}

export default HeaderOurCoffe;