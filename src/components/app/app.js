import React, {Component} from "react";
import Header from "../header";
import MainBg from "../mainbg";
import AboutUs from "../aboutus";
import Ourbest from "../ourbest";
import Footer from "../footer";

import './app.css';


export default class App extends Component{
    render(){
        return(
                <div>
                    <Header/>
                    <MainBg/>
                    <AboutUs/>
                    <Ourbest/>
                    <Footer/>
                </div>
            )    
    }
}