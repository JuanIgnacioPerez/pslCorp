import React from "react";
import "./SideForm.css";
import close from "../../images/close.svg";

const SideForm = props => {
  let dinamicClass = "sideForm";
  if (props.show) {
    dinamicClass = "sideForm open";
  }
  return (
    <nav className={dinamicClass}>
      <a href="/">
        <img className="close" src={close} alt="close" />
      </a>
      <div className="sideForm__wrapper">
        <h3 className="sideForm__title">Let's start a conversation</h3>
        <div className="sideForm__form">
          <form action="" method="get">
            <input
              className="sideForm__input"
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              className="sideForm__input"
              type="email"
              placeholder="Email Address"
              required
            />
            <input
              className="sideForm__input"
              type="text"
              placeholder="Phone - City"
              required
            />
            <textarea
              className="sideForm__input"
              rows="8"
              placeholder="Message"
              required
            />
            <button type="button" className="sideForm__btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default SideForm;
