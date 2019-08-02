import React from "react";
import "./Quotes.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layout/Layout";

const Quotes = props => {
  const { name } = props;
  return (
    <div className={name} id="quotesPage">
      <Layout>
        <div className="quotes__container">
          <div className="quotes__wrapper">
            <div className="quotes__infoBox">
              <h3 className="quotes__title">Clients’ Quotes</h3>
              <h4 className="quotes__description">
                In a relatively short time, we have been able to develop a
                digital business platform that supports operations in 57
                countries worldwide and in 28 languages. Without PSL, this would
                have never been possible.
              </h4>
              <span className="quotes__client">Troy - Kyani</span>
              <div className="quotes__iconBox">
                <a href className="quotes__iconLeft">
                  <FontAwesomeIcon icon={faSortDown} className="quotes__icon" />
                </a>
                <a href className="quotes__iconRigth">
                  <FontAwesomeIcon icon={faSortDown} className="quotes__icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="quotes__wrapper" />
        </div>
      </Layout>
    </div>
  );
};

export default Quotes;
