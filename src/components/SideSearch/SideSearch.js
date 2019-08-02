import React from "react";
import "./SideSearch.css";

import close from "../../images/close.svg";

const SideSearch = props => {
  let dinamicClass = "sideSearch";
  if (props.show) {
    dinamicClass = "sideSearch open";
  }
  return (
    <nav className={dinamicClass}>
      <a href="/">
        <img className="close" src={close} alt="close" />
      </a>
      <div className="sideSearch__wrapper">
        <h3 className="sideSearch__title">Search something</h3>
        <div className="sideSearch__form">
          <form action="" method="get">
            <input
              className="sideSearch__input"
              type="search"
              placeholder="Search.."
              required
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default SideSearch;
