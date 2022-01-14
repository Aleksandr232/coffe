import React from "react";


import le from './le.jpeg'
import cv from './cv.png';



const AboutOurCoffe=()=>{
    return (
        <div className="container_our_coffe">
            <div className="grid_our_coffe">
                <div className="img_our_coffe">
                    <img src={le} alt="" />
                </div>
                <div className="title_our_coffe">
                Le Piantagioni del  Coffe 500 г
                    <div className="divider_img_our_coffe">
                        <img src={cv} alt="" className="divider_img_our_coffe" />
                    </div>
                    <div className="text_our_coffe">
                        Country: Brasil<br/>
                        
                        Price:  5.99$
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutOurCoffe;