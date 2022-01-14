import React from "react";


import bluz from './bluz.jpeg'
import cv from './cv.png';



const AboutOurCoffe=()=>{
    return (
        <div className="container_our_coffe">
            <div className="grid_our_coffe">
                <div className="img_our_coffe">
                    <img src={bluz} alt="" />
                </div>
                <div className="title_our_coffe">
                Maragogype Coffee 1 kg
                    <div className="divider_img_our_coffe">
                        <img src={cv} alt="" className="divider_img_our_coffe" />
                    </div>
                    <div className="text_our_coffe">
                        Country: Brasil<br/>
                        
                        Price:  7.39$
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutOurCoffe;