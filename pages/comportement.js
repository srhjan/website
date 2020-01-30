import React from "react";
import Menu from "../components/Menu";
import Banner from "../components/Banner";

export default () => {
  return (
    <div>
      <Menu />
      <Banner
        imgBanner="/comportement-mew.jpg"
        title="Les comportements du chat"
      />
    </div>
  );
};
