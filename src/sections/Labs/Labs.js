import React from "react";
import "./Labs.css";

import Layout from "../../components/Layout/Layout";

const Labs = props => {
  const { name } = props;
  return (
    <div className={name} id="labsPage">
      <Layout>
        <div className="labs__container">
          <div className="labs__wrapper">
            <div className="labs__infoBox">
              <h3 className="labs__title">PSL labs</h3>
              <h4 className="labs__subTitle">
                Constant evolution <br /> cutting-edge tech
              </h4>
            </div>
          </div>
          <div className="labs__wrapper">
            <div className="labs__dnaBox">
              <div className="labs__description">
                <p>
                  Innovation starts with PSL, it’s in our DNA. PSL Labs is a
                  collaborative program where we explore new technologies and
                  processes in an effort to solve ever more challenging problems
                  with relevant and innovative solutions, and ultimately, make a
                  greater impact on the world.
                </p>
                <a href>Read more</a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Labs;
