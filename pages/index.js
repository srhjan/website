import React from "react";
import Menu from "../components/Menu";
import Banner from "../components/Banner";

export default () => {
  return (
    <div>
      <Menu />
      <Banner imgBanner="/chat-mew.jpg" title="Bienvenue dans la Mewsphère" />
    </div>
  );
};
