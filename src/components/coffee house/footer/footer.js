import React from "react";

import divider from './divider.png';
import fo from './fo.png';

import './footer.css';

const Footer=()=>{
    return(
        <section className="footer">
            <div className="container_footer">
                <div className="grid_footer">
                    <a  href="" className="coffe_footer"> 
                    <img src={divider} alt="" className="img_footer"/>
                    Coffee house
                    </a>
                    <a href="" className="coffe_footer">Our coffee</a>
                    <a href="" className="coffe_footer">For your pleasure</a>
                </div>
                <img src={fo} alt="" className="img_divider"/>
            </div>
        </section>
    )
}


export default Footer;