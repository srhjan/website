import React from "react";
import Menu from "../components/Menu";
import Banner from "../components/Banner";

export default () => {
  return (
    <div>
      <Menu />
      <Banner imgBanner="/mew-jouet.jpg" title="Les jouets pour chat" />
    </div>
  );
};
