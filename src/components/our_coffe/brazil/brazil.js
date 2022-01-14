import React from "react";

import { Link } from "react-router-dom";

import coffe_block from './coffe_block.png';
import braz_coffe from './braz_coffe.jpeg';
import bluz from './bluz.jpeg';
import le from './le.jpeg';

const Brazil =()=>{
    return(
        <div className="grid_coffee">
            <Link  className="grid_coffee" to='/coffee_brazil'>
                <div className="block_coffee">
                    <img src={coffe_block} alt="" className="img_aromistico" />
                    <div className="name__coffee">AROMISTICO Coffee 1 kg</div>
                    <div className="thecountry">Brazil</div>
                    <div className="price_coffee">6.99$</div>
                </div>
            </Link>
            <Link className="grid_coffee" to='/coffee_brazil_monoarabica' >
                <div className="block_coffee">
                    <img src={braz_coffe}  id='braz' alt="" className="img_aromistico" />
                    <div className="name__coffee">Monoarabica Coffee 250 г</div>
                    <div className="thecountry">Brazil</div>
                    <div className="price_coffee">8.99$</div>
                </div>
            </Link>
            <Link className="grid_coffee" to='/coffee_brazil_margogype'>
                <div className="block_coffee">
                    <img src={bluz} id='braz' alt=""  className="img_aromistico" />
                    <div className="name__coffee">Maragogype Coffee 1 kg</div>
                    <div className="thecountry">Brazil</div>
                    <div className="price_coffee">7.39$</div>
                </div>
            </Link>
            <Link className="grid_coffee" to='/coffee_brazil_le'>
                <div className="block_coffee">
                    <img src={le} id='braz' alt="" className="img_aromistico" />
                    <div className="name__coffee">Le Piantagioni del Caffe Coffee 500 г</div>
                    <div className="thecountry">Brazil</div>
                    <div className="price_coffee">5.99$</div>
                </div>
            </Link>
        </div>        
            
    )
}

export default Brazil;