import React from "react";

import coffe_block from './coffe_block.png';

const Columbia=()=>{
    return(
        <div className="block_coffee">
                    <img src={coffe_block} alt="" className="img_aromistico" />
                    <div className="name__coffee">AROMISTICO Coffee 1 kg</div>
                    <div className="thecountry">Columbia</div>
                    <div className="price_coffee">6.99$</div>
        </div>
    )
}

export default Columbia;