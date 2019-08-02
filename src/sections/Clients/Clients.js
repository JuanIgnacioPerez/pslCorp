import React from "react";
import "./Clients.css";

import brand1 from "../../images/LogoBrinks.svg";
import brand2 from "../../images/LogoCopa.svg";
import brand3 from "../../images/LogoCoreOS.svg";
import brand4 from "../../images/LogoDeloitte.svg";
import brand5 from "../../images/LogoHere.svg";
import brand6 from "../../images/LogoBMC.svg";
import brand7 from "../../images/LogoMediabrands.svg";
import brand8 from "../../images/LogoMicrosoft.svg";
import brand9 from "../../images/LogoMulesoft.svg";
import brand10 from "../../images/logoSafeFleet.svg";
import brand11 from "../../images/LogoXenial.svg";
import brand12 from "../../images/LogoPowerplan.svg";
import brand13 from "../../images/LogoLoanlogics.svg";
import brand14 from "../../images/LogoFlex.svg";
import brand15 from "../../images/LogoLFL.svg";

import Layout from "../../components/Layout/Layout";

const Clients = props => {
  const { name } = props;
  return (
    <div className={name} id="clientsPage">
      <Layout>
        <div className="clients__container">
          <h3 className="clients__title">Our clients</h3>
          <div className="clients__wrapper">
            <div className="clients__logoBox">
              <img src={brand1} alt="logoCompany" className="clients__logo" />
            </div>
            <div className="clients__logoBox">
              <img src={brand2} alt="logoCompany" className="clients__logo" />
            </div>
            <div className="clients__logoBox">
              <img src={brand3} alt="logoCompany" className="clients__logo" />
            </div>
            <div className="clients__logoBox">
              <img src={brand4} alt="logoCompany" className="clients__logo" />
            </div>
            <div className="clients__logoBox">
              <img src={brand5} alt="logoCompany" className="clients__logo" />
            </div>
            <div className="clients__logoBox">
              <img src={brand6} alt="logoCompany" className="clients__logo" />
            </div>
            <div className="clients__logoBox">
              <img src={brand7} alt="logoCompany" className="clients__logo" />
            </div>
            <div className="clients__logoBox">
              <img src={brand8} alt="logoCompany" className="clients__logo" />
            </div>
            <div className="clients__logoBox">
              <img src={brand9} alt="logoCompany" className="clients__logo" />
            </div>
            <div className="clients__logoBox">
              <img src={brand10} alt="logoCompany" className="clients__logo" />
            </div>
            <div className="clients__logoBox">
              <img src={brand11} alt="logoCompany" className="clients__logo" />
            </div>
            <div className="clients__logoBox">
              <img src={brand12} alt="logoCompany" className="clients__logo" />
            </div>
            <div className="clients__logoBox">
              <img src={brand13} alt="logoCompany" className="clients__logo" />
            </div>
            <div className="clients__logoBox">
              <img src={brand14} alt="logoCompany" className="clients__logo" />
            </div>
            <div className="clients__logoBox">
              <img src={brand15} alt="logoCompany" className="clients__logo" />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Clients;
