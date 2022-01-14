import React from "react";



import cv from './cv.png';
import brazil from './brazil.jpg';


const AboutOurCoffe=()=>{
    return (
        <div className="container_our_coffe">
            <div className="grid_our_coffe">
                <div className="img_our_coffe">
                    <img src={brazil} alt="" />
                </div>
                <div className="title_our_coffe">
                    Our Coffee
                    <div className="divider_img_our_coffe">
                        <img src={cv} alt="" className="divider_img_our_coffe" />
                    </div>
                    <div className="text_our_coffe">
                        Country: Brasil<br/>
                        
                        Price:  6.99$
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutOurCoffe;