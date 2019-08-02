import React from "react";
import "./ToggleButton.css";

export const ToggleButton = props => (
  <button className={props.type} onClick={props.click}>
    <img src={props.image} alt="toggleBtn" />
  </button>
);

export default ToggleButton;
