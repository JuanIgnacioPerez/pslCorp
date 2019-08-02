import React from "react";
import "./SideMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import close from "../../images/close.svg";

const SideMenu = props => {
  let dinamicClass = "sideMenu";
  if (props.show) {
    dinamicClass = "sideMenu open";
  }
  return (
    <nav className={dinamicClass}>
      <a href>
        <img className="close" src={close} alt="close" />
      </a>
      <div className="sideMenu__wrapper">
        <ul className="sideMenu__listBox">
          <li className="sideMenu__list">
            <a className="sideMenu__link" href="https://www.pslcorp.com/about">
              our DNA <FontAwesomeIcon icon={faSortDown} />
            </a>
          </li>
          <li className="sideMenu__list">
            <a
              className="sideMenu__link"
              href="https://www.pslcorp.com/what-we-do/capabilities"
            >
              What we do <FontAwesomeIcon icon={faSortDown} />
            </a>
          </li>
          <li className="sideMenu__list">
            <a
              className="sideMenu__link"
              href="https://www.pslcorp.com/careers"
            >
              careers
            </a>
          </li>
          <li className="sideMenu__list">
            <a
              className="sideMenu__link"
              href="https://www.pslcorp.com/insights"
            >
              our Insights <FontAwesomeIcon icon={faSortDown} />
            </a>
          </li>
          <li className="sideMenu__list">
            <a
              className="sideMenu__link"
              href="https://www.pslcorp.com/contact"
            >
              contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideMenu;
