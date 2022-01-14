import React from "react";
import MainBgOurCoffe from "../coffee_brazil_monoarabica/mainbg_our_coffe";
import FooterOurCoffe from "../coffee_brazil_monoarabica/footer_our_coffe";
import AboutOurCoffe from "../coffee_brazil_monoarabica/about_our_coffe_brazil";

import './our_coffe.css';

const CoffeeBrazilMonoarabica=()=>{
    return(
        <div>
            <MainBgOurCoffe/>
            <AboutOurCoffe/>
            <FooterOurCoffe/>
        </div>
    )
}

export default CoffeeBrazilMonoarabica;