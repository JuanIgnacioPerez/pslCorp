import React from "react";
import "./Main.css";

import Layout from "../../components/Layout/Layout";

const Main = props => {
  const { name } = props;
  return (
    <div className={name} id="main">
      <Layout>
        <div className="main__wrapper">
          <h3 className="main__title">
            Our passion is <br /> coding the future.
          </h3>
          <button className="main__button">Footer Us Today!</button>
        </div>
      </Layout>
    </div>
  );
};

export default Main;
