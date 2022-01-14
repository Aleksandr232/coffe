import React from "react";



import cv from './cv.png';
import kenya from './Fabulous.png';


const AboutOurCoffe=()=>{
    return (
        <div className="container_our_coffe">
            <div className="grid_our_coffe">
                <div className="img_our_coffe">
                    <img className="img_aromistico_1" src={kenya} alt="" />
                </div>
                <div className="title_our_coffe">
                Fabulous land 1 кг
                    <div className="divider_img_our_coffe">
                        <img src={cv} alt="" className="divider_img_our_coffe" />
                    </div>
                    <div className="text_our_coffe">
                        Country: Kenya<br/>
                        
                        Price:  13.99$
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutOurCoffe;