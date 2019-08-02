import React from "react";
import "./Footer.css";

import img from "../../images/logo.png";
import Layout from "../../components/Layout/Layout";

const Footer = props => {
  const { name } = props;
  return (
    <footer className={name} id="footerPage">
      <Layout>
        <div className="footer__container">
          <div className="footer__wrapper">
            <img className="footer__logo" src={img} alt="" />
            <p className="footer__chat">
              Tired of trying to coordinate time zones?
            </p>
            <button className="footer__button">Let’s chat</button>
            <p className="footer__chat">
              Lookinf to scale your software team? Leave it to the experts.
            </p>
            <button className="footer__button">Give us a Call</button>
          </div>
          <div className="footer__wrapper">
            <h3 className="footer__title">IT outsourcing services</h3>
            <ul className="footer__content">
              <li className="footer__item">Agile software development</li>
              <li className="footer__item">
                Nearshore IT outsourcing team augmentation
              </li>
              <li className="footer__item">
                Test Automation and QA outsourcing
              </li>
              <li className="footer__item">DevOps transition support</li>
              <li className="footer__item">
                Cloud architecture design and implementation
              </li>
            </ul>
          </div>
          <div className="footer__wrapper">
            <h3 className="footer__title">Our DNA</h3>
            <ul className="footer__content">
              <li className="footer__item">About PSL Outsourcing</li>
              <li className="footer__item">Culture</li>
              <li className="footer__item">Telent</li>
              <li className="footer__item">CSR</li>
              <li className="footer__item">Footer us</li>
            </ul>
          </div>
          <div className="footer__wrapper">
            <h3 className="footer__title">About PSL</h3>
            <p className="footer__content">
              Building on over 30 years of experience we employ cu a technology
              to deli er orldass solutions from a neashore model
            </p>
          </div>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
