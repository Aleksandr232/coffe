import React from "react";
import ForYourPleasure from "../for_your_pleasure";
import CoffeHouse from "../coffee house";
import OurCoffe from "../our_coffe";
import CoffeeBrazil from "../coffee_brazil";
import CoffeeBrazilMonoarabica from "../coffee_brazil_monoarabica";
import CoffeeBrazilMargogype from "../coffee_brazil_margogype";
import CoffeeBrazilLe from "../coffee_brazil_le";
import CoffeeKenya from "../coffee_kenya";
import CoffeeColumbia from "../coffee_columbia";
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
          <Route path="coffee_brazil_monoarabica" element={<CoffeeBrazilMonoarabica />}></Route>
          <Route path="/coffee_brazil_margogype" element={<CoffeeBrazilMargogype />}></Route>
          <Route path="/coffee_brazil_le" element={<CoffeeBrazilLe />}></Route>
          <Route path="/coffee_kenya" element={<CoffeeKenya />}></Route>
          <Route path="/coffee_columbia" element={<CoffeeColumbia />}></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
