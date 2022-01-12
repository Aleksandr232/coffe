import React from "react";

import coffeeforour from './coffeeforour.png';
import cv from './cv.png';
import coffe_block from './coffe_block.png';


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
            <div className="grid_coffee">
                <div className="block_coffee">
                    <img src={coffe_block} alt="" className="img_aromistico" />
                    <div className="name__coffee">AROMISTICO Coffee 1 kg</div>
                    <div className="thecountry">Brazil</div>
                    <div className="price_coffee">6.99$</div>
                </div>
                <div className="block_coffee">
                    <img src={coffe_block} alt="" className="img_aromistico" />
                    <div className="name__coffee">AROMISTICO Coffee 1 kg</div>
                    <div className="thecountry">Kenya</div>
                    <div className="price_coffee">6.99$</div>
                </div>
                <div className="block_coffee">
                    <img src={coffe_block} alt="" className="img_aromistico" />
                    <div className="name__coffee">AROMISTICO Coffee 1 kg</div>
                    <div className="thecountry">Columbia</div>
                    <div className="price_coffee">6.99$</div>
                </div>
                <div className="block_coffee">
                    <img src={coffe_block} alt="" className="img_aromistico" />
                    <div className="name__coffee">AROMISTICO Coffee 1 kg</div>
                    <div className="thecountry">Brazil</div>
                    <div className="price_coffee">6.99$</div>
                </div>
                <div className="block_coffee">
                    <img src={coffe_block} alt="" className="img_aromistico" />
                    <div className="name__coffee">AROMISTICO Coffee 1 kg</div>
                    <div className="thecountry">Brazil</div>
                    <div className="price_coffee">6.99$</div>
                </div>
                <div className="block_coffee">
                    <img src={coffe_block} alt="" className="img_aromistico" />
                    <div className="name__coffee">AROMISTICO Coffee 1 kg</div>
                    <div className="thecountry">Brazil</div>
                    <div className="price_coffee">6.99$</div>
                </div>
            </div>
        </div>
    );
}

export default AboutForOurGoods;