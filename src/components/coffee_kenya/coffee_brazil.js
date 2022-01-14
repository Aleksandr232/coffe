import React from "react";
import MainBgOurCoffe from "../coffee_kenya/mainbg_our_coffe";
import FooterOurCoffe from "../coffee_kenya/footer_our_coffe";
import AboutOurCoffe from "../coffee_kenya/about_our_coffe_brazil";

import './our_coffe.css';

const CoffeeKenya=()=>{
    return(
        <div>
            <MainBgOurCoffe/>
            <AboutOurCoffe/>
            <FooterOurCoffe/>
        </div>
    )
}

export default CoffeeKenya;