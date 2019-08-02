import React from "react";
import "./Nutshell.css";

import Layout from "../../components/Layout/Layout";

const Nutshell = props => {
  const { name } = props;
  return (
    <div className={name} id="nutshellPage">
      <Layout>
        <div className="nutshell__container">
          <div className="nutshell__titleBox">
            <h2 className="nutshell__backTitle">PSL</h2>
            <h3 className="nutshell__title">in a Nutshell</h3>
          </div>
          <div className="nutshell__info">
            <div className="nutshell__item">
              <div className="nutshell__subtitle">650+</div>
              <h4 className="nutshell__description">engineers</h4>
            </div>
            <div className="nutshell__item">
              <div className="nutshell__subtitle">33+</div>
              <h4 className="nutshell__description">Years’ experience</h4>
            </div>
            <div className="nutshell__item">
              <div className="nutshell__subtitle">Agile</div>
              <h4 className="nutshell__description">
                experts + CMMi 5 + ISO27001
              </h4>
            </div>
            <div className="nutshell__item">
              <div className="nutshell__subtitle">1.200+</div>
              <h4 className="nutshell__description">
                projects successfully delivered
              </h4>
            </div>
            <div className="nutshell__item">
              <div className="nutshell__subtitle nutshell__last">5</div>
              <h4 className="nutshell__description">
                development centers in LATAM
              </h4>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Nutshell;
