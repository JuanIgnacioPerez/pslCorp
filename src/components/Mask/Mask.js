import React from "react";
import "./Mask.css";

const Mask = props => {
  return <div className="mask" onClick={props.click} />;
};

export default Mask;
