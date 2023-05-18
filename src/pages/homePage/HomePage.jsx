import React from "react";
import "./homePage.scss";

import Carousal from "../../components/carousal/Carousal";
import UpcommingEvents from "../../components/upcommingEvents/UpcommingEvents";

const HomePage = () => {
  return (
    <div className="homePage">
      <Carousal />
      <UpcommingEvents />
    </div>
  );
};

export default HomePage;
