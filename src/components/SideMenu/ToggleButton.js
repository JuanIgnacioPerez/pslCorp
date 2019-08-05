import React from "react";
import "./ToggleButton.css";

export const ToggleButton = props => (
  <button className={props.type} onClick={props.click}>
    <img className="filter" src={props.image} alt="toggleBtn" />
  </button>
);

export default ToggleButton;
