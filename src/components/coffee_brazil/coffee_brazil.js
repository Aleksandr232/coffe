import React from "react";
import MainBgOurCoffe from "../coffee_brazil/mainbg_our_coffe";
import FooterOurCoffe from "../coffee_brazil/footer_our_coffe";
import AboutOurCoffe from "../coffee_brazil/about_our_coffe_brazil";

import './our_coffe.css';

const CoffeeBrazil=()=>{
    return(
        <div>
            <MainBgOurCoffe/>
            <AboutOurCoffe/>
            <FooterOurCoffe/>
        </div>
    )
}

export default CoffeeBrazil;