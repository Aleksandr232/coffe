import React from "react";
import { Link } from "react-router-dom";

import coffe_block from './coffe_block.png';
import braz from './braz_coffe.jpeg';
import bluz from './bluz.jpeg';
import le from './le.jpeg';
import fabulous from './Fabulous.png';
import col from './columbia.png';


const All =()=>{
    return(
        <div className="grid_coffee">
            <Link className="grid_coffee" to='/coffee_brazil'>
            <div className="block_coffee">
                    <img src={coffe_block} alt="" className="img_aromistico" />
                    <div className="name__coffee">AROMISTICO Coffee 1 kg</div>
                    <div className="thecountry">Brazil</div>
                    <div className="price_coffee">6.99$</div>
                </div>
            </Link>
            <Link className="grid_coffee" to='/coffee_brazil_monoarabica'>
            <div className="block_coffee">
                    <img src={braz} alt="" id='braz' className="img_aromistico" />
                    <div className="name__coffee">Monoarabica Coffee 250 г</div>
                    <div className="thecountry">Brazil</div>
                    <div className="price_coffee">8.99$</div>
                </div>
            </Link>
            <Link className="grid_coffee" to='/coffee_brazil_margogype'>
            <div className="block_coffee">
                    <img src={bluz} alt="" id='braz' className="img_aromistico" />
                    <div className="name__coffee">Maragogype Coffee 1 kg</div>
                    <div className="thecountry">Brazil</div>
                    <div className="price_coffee">7.39$</div>
                </div>
            </Link>
            <Link className="grid_coffee" to='/coffee_brazil_le'>
            <div className="block_coffee">
                    <img src={le}  id='braz' alt="" className="img_aromistico" />
                    <div className="name__coffee">Le Piantagioni del Coffee 500 г</div>
                    <div className="thecountry">Brazil</div>
                    <div className="price_coffee">5.99$</div>
                </div>
            </Link>
            <Link className="grid_coffee" to='/coffee_kenya'>
            <div className="block_coffee">
                    <img src={fabulous} alt="" className="img_aromistico_1" />
                    <div className="name__coffee">Fabulous land Coffee 1 кг </div>
                    <div className="thecountry">Kenya</div>
                    <div className="price_coffee">13.99$</div>
                </div>
            </Link>
            <Link className="grid_coffee" to='/coffee_columbia'>
            <div className="block_coffee">
                    <img src={col} alt="" className="img_aromistico_2" />
                    <div className="name__coffee">Compagnia Dell'Arabica Coffee 500 г</div>
                    <div className="thecountry">Columbia</div>
                    <div className="price_coffee">15.99$</div>
                </div>
            </Link>   
            </div>
    )
}

export default All;