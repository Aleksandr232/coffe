import React from "react";

import coffe_block from './Fabulous.png';
import {Link} from 'react-router-dom';

const Kenya=()=>{
    return(
        <Link to='/coffee_kenya'>
            <div className="block_coffee">
                    <img src={coffe_block} alt="" className="img_aromistico_1" />
                    <div className="name__coffee">Fabulous land 1 кг </div>
                    <div className="thecountry">Kenya</div>
                    <div className="price_coffee">13.99$</div>
                </div>
        </Link>
     
    )
}

export default Kenya;