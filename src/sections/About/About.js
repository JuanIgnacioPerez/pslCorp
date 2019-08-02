import React from "react";
import "./About.css";

import Layout from "../../components/Layout/Layout";

const About = props => {
  const { name } = props;
  return (
    <div className={name} id="aboutPage">
      <Layout>
        <div className="content">
          <div className="wrapper">
            <div className="about__listBox">
              <div className="about__title">
                <h4 className="about__heading">Nearshore Software</h4>
                <h4 className="about__heading">Development </h4>
                <h4 className="about__heading">Outsourcing</h4>
                <h4 className="about__heading">Offshore Outsourcing </h4>
                <h4 className="about__heading">Development Center</h4>
              </div>
            </div>
          </div>
          <div className="wrapper">
            <div className="about__infoBox">
              <p className="about__text">
                PSL operates at the intersection of drive, quality, and
                innovation. As a purpose-led organization, we strive to become
                your software outsourcing development partner. Our goal is to
                provide the highest quality agile development services from
                nearshore centers in Latin America.
                <br /> <br />
                Ready to deploy nearshore outsourcing teams?
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default About;
