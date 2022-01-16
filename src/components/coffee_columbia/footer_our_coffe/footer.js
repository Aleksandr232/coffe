import React from "react";
import { Link } from "react-router-dom";

import divider from './divider.png';
import fo from './fo.png';



const FooterOurCoffe=()=>{
    return(
        <section className="footer">
            <div className="container_footer">
                <div className="grid_footer">
                    <Link  to="/" className="coffe_footer"> 
                    <img src={divider} alt="" className="img_footer"/>
                    Coffee house
                    </Link>
                    <Link to="/our_coffe" className="coffe_footer">Our coffee</Link>
                    <Link to="/for_your_pleasure" className="coffe_footer">For your pleasure</Link>
                </div>
                <img src={fo} alt="" className="img_divider"/>
            </div>
        </section>
    )
}


export default FooterOurCoffe;