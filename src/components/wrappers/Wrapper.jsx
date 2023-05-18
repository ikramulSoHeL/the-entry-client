import React from "react";
import "./wrapper.scss";

const Wrapper = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="wrapperContent">{children}</div>
    </div>
  );
};

export default Wrapper;
