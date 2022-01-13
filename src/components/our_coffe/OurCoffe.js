import React from "react";
import AboutOurCoffe from "./about_our_coffe";
import HeaderOurCoffe from "./header_our_coffe";
import MainBgOurCoffe from "./mainbg_our_coffe";

import './our_coffe.css';


const OurCoffe  = () => {
    return (
        <div>
            <HeaderOurCoffe />
            <MainBgOurCoffe/>
            <AboutOurCoffe />
        </div>
    );
};


export default OurCoffe;