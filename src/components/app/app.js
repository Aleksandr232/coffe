import React from "react";
import Header from "../header";
import MainBg from "../mainbg";
import AboutUs from "../aboutus";
import Ourbest from "../ourbest";
import Footer from "../footer";
import ForYourPleasure from "../for_your_pleasure";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './app.css';


 const App=()=>{
    
        return(
             <Router>
                <div>
                    <Header/> 
                    <MainBg/>
                    <AboutUs/>
                    <Ourbest/>
                    <Footer/>
                    <Routes>
                            <Route path='/for your pleasure' element={<ForYourPleasure/>}/>          
                    </Routes>
                </div>
            </Router>
            )    
    
}

export default App;