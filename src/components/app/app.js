import React from "react";
import ForYourPleasure from "../for_your_pleasure";
import CoffeHouse from "../coffee house";
import OurCoffe from "../our_coffe";
import CoffeeBrazil from "../coffee_brazil";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.css";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<CoffeHouse/>}></Route>
          <Route path="for_your_pleasure" element={<ForYourPleasure />}></Route>
          <Route path="our_coffe" element={<OurCoffe />}></Route>
          <Route path="coffee_brazil" element={<CoffeeBrazil />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
