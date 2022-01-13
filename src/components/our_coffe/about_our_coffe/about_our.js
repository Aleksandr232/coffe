import React from "react";

import cv from './cv.png';
import girl from './girl.jpg';


const AboutOurCoffe=()=>(
    <div className="container_our_coffe">
        <div className="grid_our_coffe">
            <div className="img_our_coffe">
                <img src={girl} alt="" />
            </div>
            <div className="title_our_coffe">
                Our Coffee
                <div className="divider_img_our_coffe">
                    <img src={cv} alt="" className="divider_img_our_coffe" />
                </div>
                <div className="text_our_coffe">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions.
                    As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                </div>
            </div>

        </div>

        <div className="divider_our_coffe"></div>

    </div>
)

export default AboutOurCoffe;