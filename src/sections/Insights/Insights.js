import React from "react";
import "./Insights.css";

import Layout from "../../components/Layout/Layout";

const Insights = props => {
  const { name } = props;
  return (
    <div className={name} id="insightsPage">
      <Layout>
        <div className="insights__container">
          <div className="insights__wrapper">
            <div className="insights__infoBox">
              <h3 className="insights__title">Insights</h3>
              <h4 className="insights__subtitle">
                Technology and Outsourcing Insights from the Experts
              </h4>
            </div>
          </div>
          <div className="insights__wrapper">
            <div className="insights__listBox">
              <p className="insights__text">
                Get the latest Insights from the PSL community on trending
                topics in technology, outsourcing and software development.
              </p>
              <div className="insights__items">
                <a href>Blog</a>
                <a href>E-books</a>
                <a href>Case Studies</a>
                <a href>Whitepapers</a>
                <a href>News</a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Insights;
