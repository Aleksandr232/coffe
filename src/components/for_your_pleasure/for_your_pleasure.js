import React from "react";

import HeaderForOurGoods from "./header_for_our_goods";
import MainBgForOurGoods from "./mainbg_for_our_goods";
import AboutForOurGoods from "./about_for_our_goods";
import FooterOurGoods from "./footer_for_our_goods";

import './for_your_pleasure.css';

const ForYourPleasure = () => {
  return (
    <div>
      <HeaderForOurGoods/>
      <MainBgForOurGoods/>
      <AboutForOurGoods/>
      <FooterOurGoods/>
    </div>
  );
};

export default ForYourPleasure;
