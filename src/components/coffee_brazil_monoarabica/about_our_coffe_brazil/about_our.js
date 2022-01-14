import React from "react";


import braz from './braz_coffe.jpeg'
import cv from './cv.png';



const AboutOurCoffe=()=>{
    return (
        <div className="container_our_coffe">
            <div className="grid_our_coffe">
                <div className="img_our_coffe">
                    <img src={braz} alt="" />
                </div>
                <div className="title_our_coffe">
                Monoarabica Coffee 250 г
                    <div className="divider_img_our_coffe">
                        <img src={cv} alt="" className="divider_img_our_coffe" />
                    </div>
                    <div className="text_our_coffe">
                        Country: Brasil<br/>
                        
                        Price:  8.99$
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutOurCoffe;