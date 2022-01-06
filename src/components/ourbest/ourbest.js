import React from "react";

import one from './one.png';
import two from './two.png';
import fri from './fri.png';

import './ourbest.css';

const Ourbest=()=>{
    return(
        <section className="ourbest">
            <div className="title_name_ourbest">Our best</div>
            <div className="container_ourbest">
                <div className="grid_coffe">
                    <div className="block_coffe">
                        <img src={one} alt="" className="img_coffe"/>
                            <div className="name_coffe">Solimo Coffee Beans 2 kg</div>
                                <div className="price_coffe">10.73$</div>                
                    </div>
                    <div className="block_coffe">
                    <img src={two} alt="" className="img_coffe"/>
                            <div className="name_coffe">Presto Coffee Beans 1 kg</div>
                                <div className="price_coffe">15.99$</div>
                    </div>
                    <div className="block_coffe">
                    <img src={fri} alt="" className="img_coffe"/>
                            <div className="name_coffe">AROMISTICO Coffee 1 kg</div>
                                <div className="price_coffe">6.99$</div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Ourbest;