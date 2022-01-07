import React from "react";
import { Link } from "react-router-dom";


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
            <Link className="text" to={'/for your pleasure'}>For your pleasure</Link>
            </div>
                
             
        
       
    )
}

export default Header;