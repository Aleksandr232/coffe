import React from "react";
import MainBgOurCoffe from "../coffee_columbia/mainbg_our_coffe";
import FooterOurCoffe from "../coffee_columbia/footer_our_coffe";
import AboutOurCoffe from "../coffee_columbia/about_our_coffe_brazil";

import './our_coffe.css';

const CoffeeColumbia=()=>{
    return(
        <div>
            <MainBgOurCoffe/>
            <AboutOurCoffe/>
            <FooterOurCoffe/>
        </div>
    )
}

export default CoffeeColumbia;