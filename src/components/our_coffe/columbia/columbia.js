import React from "react";
import { Link } from "react-router-dom";

import coffe_block from './columbia.png';

const Columbia=()=>{
    return(
        <Link to='/coffee_columbia'>
            <div className="block_coffee">
                    <img src={coffe_block} alt="" className="img_aromistico_2" />
                    <div className="name__coffee">Compagnia Dell'Arabica 500 г</div>
                    <div className="thecountry">Columbia</div>
                    <div className="price_coffee">15.99$</div>
        </div>
        </Link>
        
    )
}

export default Columbia;