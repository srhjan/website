import React from "react";
import Menu from "../components/Menu";
import Banner from "../components/Banner";

export default () => {
  return (
    <div>
      <Menu />
      <Banner
        imgBanner="/alimentation-mew.jpg"
        title="L'alimentation pour chat"
      />
    </div>
  );
};
