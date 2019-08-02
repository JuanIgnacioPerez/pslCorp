import React from "react";
import "./SideBar.css";
import ToggleButton from "../SideMenu/ToggleButton";

import imgLogo from "../../images/logo.png";
import message from "../../images/message.svg";
import menu from "../../images/nav.svg";
import search from "../../images/search.svg";

const SideBar = props => {
  return (
    <header className="sideBar">
      <nav className="sideBar__navigation">
        <div className="sideBar__logo">
          <img className="sideBar__image" src={imgLogo} alt="psl_logo" />
        </div>
      </nav>
      <div>
        <ToggleButton
          click={props.menuClickHandler}
          image={menu}
          type={"toggle-button burger"}
        />
        <ToggleButton
          click={props.searchClickHandler}
          image={search}
          type={"toggle-button search"}
        />
        <ToggleButton
          click={props.emailClickHandler}
          image={message}
          type={"toggle-button email"}
        />
      </div>
    </header>
  );
};

export default SideBar;
