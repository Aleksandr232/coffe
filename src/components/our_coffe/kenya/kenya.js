import React from "react";

import coffe_block from './coffe_block.png';
import {Link} from 'react-router-dom';

const Kenya=()=>{
    return(
        <Link to='/'>
            <div className="block_coffee">
                    <img src={coffe_block} alt="" className="img_aromistico" />
                    <div className="name__coffee">AROMISTICO Coffee 1 kg</div>
                    <div className="thecountry">Kenya</div>
                    <div className="price_coffee">6.99$</div>
                </div>
        </Link>
     
    )
}

export default Kenya;