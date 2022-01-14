import React from "react";


import colum from './columbia.png'
import cv from './cv.png';



const AboutOurCoffe=()=>{
    return (
        <div className="container_our_coffe">
            <div className="grid_our_coffe">
                <div className="img_our_coffe">
                    <img className="img_aromistico_2" src={colum} alt="" />
                </div>
                <div className="title_our_coffe">
                Compagnia Dell'Arabica 500 г
                    <div className="divider_img_our_coffe">
                        <img src={cv} alt="" className="divider_img_our_coffe" />
                    </div>
                    <div className="text_our_coffe">
                        Country: Columbia<br/>
                        
                        Price:  15.99$
                    </div>
                </div>

            </div>
        </div>
    );
}

export default AboutOurCoffe;