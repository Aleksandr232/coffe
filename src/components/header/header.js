import React from "react";


import header from './vector.png';
import './header.css'

const Header=()=>{
    return(
             <div className="header">
            <a className="text" href="#">
                <img src={header} alt="" className="img_header" />
                 Coffee house
                 </a>
            <a className="text" href="#">Our coffee</a>
            <a className="text" href="#">For your pleasure</a>
            </div>
        
       
    )
}

export default Header;