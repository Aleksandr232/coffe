import React from "react";
import { Link } from "react-router-dom";

import coffeeforour from './coffeeforour.png';
import cv from './cv.png';
import coffe_block from './coffe_block.png';
import braz from './braz_coffe.jpeg';
import bluz from './bluz.jpeg';
import le from './le.jpeg';
import fabulous from './Fabulous.png';
import col from './columbia.png';


function AboutForOurGoods() {
    return (
        <div className="container_for_our_goods">
            <div className="grid_about_for_our_goods">
                <div className="img_for_our_goods">
                    <img src={coffeeforour} alt="" />
                </div>
                <div className="title_for_our_goods">
                    About our goods
                    <div className="divider_img_for_our_goods">
                        <img src={cv} alt="" className="divider_img_for_our_goods" />
                    </div>
                    <div className="text_for_our_godds">
                        Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br />
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions.<br />
                        As greatly removed calling pleased improve an.<br /> Last ask him cold feel<br />
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                    </div>
                </div>

            </div>

            <div className="divider_for_our_goods"></div>
            <div className="grid_coffee" id='grid'>
            <Link className="grid_coffee" to='/coffee_brazil'>
            <div className="block_coffee">
                    <img src={coffe_block} alt="" className="img_aromistico" />
                    <div className="name__coffee">AROMISTICO Coffee 1 kg</div>
                    <div className="thecountry">Brazil</div>
                    <div className="price_coffee">6.99$</div>
                </div>
            </Link>
            <Link className="grid_coffee"  to='/coffee_brazil_monoarabica'>
            <div className="block_coffee">
                    <img src={braz} alt="" id='braz' className="img_aromistico" />
                    <div className="name__coffee">Monoarabica Coffee 250 г</div>
                    <div className="thecountry">Brazil</div>
                    <div className="price_coffee">8.99$</div>
                </div>
            </Link>
            <Link className="grid_coffee"   to='/coffee_brazil_margogype'>
            <div className="block_coffee">
                    <img src={bluz} alt="" id='braz' className="img_aromistico" />
                    <div className="name__coffee">Maragogype Coffee 1 kg</div>
                    <div className="thecountry">Brazil</div>
                    <div className="price_coffee">7.39$</div>
                </div>
            </Link>
            <Link className="grid_coffee"  to='/coffee_brazil_le'>
            <div className="block_coffee">
                    <img src={le}  id='braz' alt="" className="img_aromistico" />
                    <div className="name__coffee">Le Piantagioni del Coffee 500 г</div>
                    <div className="thecountry">Brazil</div>
                    <div className="price_coffee">5.99$</div>
                </div>
            </Link>
            <Link className="grid_coffee"  to='/coffee_kenya'>
            <div className="block_coffee">
                    <img src={fabulous} alt="" className="img_aromistico_1" />
                    <div className="name__coffee">Fabulous land Coffee 1 кг </div>
                    <div className="thecountry">Kenya</div>
                    <div className="price_coffee">13.99$</div>
                </div>
            </Link>
            <Link className="grid_coffee"  to='/coffee_columbia'>
            <div className="block_coffee">
                    <img src={col} alt="" className="img_aromistico_2" />
                    <div className="name__coffee">Compagnia Dell'Arabica Coffee 500 г</div>
                    <div className="thecountry">Columbia</div>
                    <div className="price_coffee">15.99$</div>
                </div>
            </Link>   
            </div>
        </div>
    );
}

export default AboutForOurGoods;