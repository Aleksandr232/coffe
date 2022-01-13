import React from "react";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Brazil from "../brazil";
import All from "../All";
import Kenya from "../kenya";
import Columbia from "../columbia";

import 'bootstrap/dist/css/bootstrap.min.css';


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
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="profile" title="All">
            <All/>
           </Tab>
        <Tab eventKey="home" title="Brazil">
            <Brazil/>
        </Tab>
        <Tab eventKey="contact" title="Kenya">
            <Kenya/>
        </Tab>
        <Tab eventKey="contact_1" title="Columbia" >
            <Columbia/>
        </Tab>
        </Tabs>
    </div>
)

export default AboutOurCoffe;