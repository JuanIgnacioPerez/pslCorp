import React from "react";
import "./Capabilities.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../components/Layout/Layout";

const Capabilities = props => {
  const { name } = props;
  return (
    <div className={name} id="capabilitiesPage">
      <Layout>
        <div className="capabilities__container">
          <div className="capabilities__wrapper">
            <div className="capabilities__infoBox">
              <h3 className="capabilities__title">Capabilities</h3>
              <h4 className="capabilities__subTitle">
                Connecting your vision with results
              </h4>
              <div className="capabilities__description">
                <p>
                  We focus on depth, not breadth. PSL equips teams with
                  qualified experts to help you achieve your technology vision.
                </p>
              </div>
            </div>
          </div>
          <div className="capabilities__wrapper">
            <div className="capabilities__listBox">
              <ul className="capabilities__list">
                <li>
                  <a href>
                    DevOps
                    <FontAwesomeIcon icon={faPlus} />
                  </a>
                </li>
                <li>
                  <a href>
                    Machine Learning
                    <FontAwesomeIcon icon={faPlus} />
                  </a>
                </li>
                <li>
                  <a href>
                    Test Automation
                    <FontAwesomeIcon icon={faPlus} />
                  </a>
                </li>
                <li>
                  <a href>
                    UX/UI
                    <FontAwesomeIcon icon={faPlus} />
                  </a>
                </li>
                <li>
                  <a href>
                    Cloud
                    <FontAwesomeIcon icon={faPlus} />
                  </a>
                </li>
                <li>
                  <a href>
                    Blockchain
                    <FontAwesomeIcon icon={faPlus} />
                  </a>
                </li>
                <li>
                  <a href>
                    Analytics
                    <FontAwesomeIcon icon={faPlus} />
                  </a>
                </li>
                <li>
                  <a href>
                    Big Data / Fast Data
                    <FontAwesomeIcon icon={faPlus} />
                  </a>
                </li>
                <li>
                  <a href>
                    Chatbots / Voice Recognition
                    <FontAwesomeIcon icon={faPlus} />
                  </a>
                </li>
                <li>
                  <a href>
                    Modern Scalable Platforms
                    <FontAwesomeIcon icon={faPlus} />
                  </a>
                </li>
                <li>
                  <a href>
                    Mobile
                    <FontAwesomeIcon icon={faPlus} />
                  </a>
                </li>
                <li>
                  <a href>
                    Performance Engineering
                    <FontAwesomeIcon icon={faPlus} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default Capabilities;
