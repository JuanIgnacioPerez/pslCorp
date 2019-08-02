import React from "react";
import "./Services.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layout/Layout";

const Services = props => {
  const { name } = props;
  return (
    <div className={name} id="servicesPage">
      <Layout>
        <div className="services__container">
          <div className="services__wrapper">
            <div className="services__infoBox">
              <h3 className="services__title">Services</h3>
              <div className="services__description">
                <p>
                  Enhance your team with top-talent, cost effective, nearshore
                  software development outsourcing services:
                </p>
              </div>
            </div>
          </div>
          <div className="services__wrapper">
            <ul className="services__list">
              <li className="services__item">
                <a href>
                  <FontAwesomeIcon icon={faSortDown} /> Agile - Software -
                  Development
                </a>
              </li>
              <li className="services__item">
                <a href>
                  <FontAwesomeIcon icon={faSortDown} /> Nearshore IT |
                  Outsourcing | Team augmentation
                </a>
              </li>
              <li className="services__item">
                <a href>
                  <FontAwesomeIcon icon={faSortDown} /> Test Automation and QA
                  Outsourcing
                </a>
              </li>
              <li className="services__item">
                <a href>
                  <FontAwesomeIcon icon={faSortDown} /> DevOps transition
                </a>
              </li>
              <li className="services__item">
                <a href>
                  <FontAwesomeIcon icon={faSortDown} /> Cloud architecture
                  design and implementation
                </a>
              </li>
              <li className="services__item">
                <a href>
                  <FontAwesomeIcon icon={faSortDown} /> Software Re-engineering
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default Services;
