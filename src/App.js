import React from "react";
import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";

import Mask from "./components/Mask/Mask";
import SideBar from "./components/SideBar/SideBar";
import SideMenu from "./components/SideMenu/SideMenu";
import SideForm from "./components/SideForm/SideForm";
import SideSearch from "./components/SideSearch/SideSearch";

import Main from "./sections/Main/Main";
import About from "./sections/About/About";
import Nutshell from "./sections/Nutshell/Nutshell";
import Services from "./sections/Services/Services";
import Capabilities from "./sections/Capabilities/Capabilities";
import Insights from "./sections/Insights/Insights";
import Labs from "./sections/Labs/Labs";
import Clients from "./sections/Clients/Clients";
import Quotes from "./sections/Quotes/Quotes";
import Footer from "./sections/Footer/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideMenuOpen: false,
      sideFormOpen: false,
      sideSearchOpen: false
    };
  }

  menuToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideMenuOpen: !prevState.sideMenuOpen };
    });
  };

  searchToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideSearchOpen: !prevState.sideSearchOpen };
    });
  };

  emailToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideFormOpen: !prevState.sideFormOpen };
    });
  };

  maskClickHandler = () => {
    this.setState({
      sideMenuOpen: false,
      sideFormOpen: false,
      sideSearchOpen: false
    });
  };

  render() {
    let { sideMenuOpen, sideFormOpen, sideSearchOpen } = this.state;
    let mask;
    if (sideMenuOpen || sideSearchOpen || sideFormOpen) {
      mask = <Mask click={this.maskClickHandler} />;
    }

    return (
      <div>
        <SideBar
          menuClickHandler={this.menuToggleClickHandler}
          searchClickHandler={this.searchToggleClickHandler}
          emailClickHandler={this.emailToggleClickHandler}
        />
        <SideMenu show={sideMenuOpen} />
        <SideSearch show={sideSearchOpen} />
        <SideForm show={sideFormOpen} />
        {mask}
        <ReactFullpage
          licenseKey={null}
          anchors={[
            "home",
            "about",
            "nutshell",
            "services",
            "capabilities",
            "insights",
            "labs",
            "clients",
            "quotes",
            "footer"
          ]}
          sectionsColor={[
            "transparent",
            "#21d1fa",
            "#fff",
            "#2d2045",
            "transparent",
            "#21d1fa",
            "transparent",
            "#2d2045",
            "transparent",
            "#2d2045"
          ]}
          navigation={true}
          navigationPosition={"left"}
          scrollOverflow={true}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                <Main name="section section1 main" />
                <About name="section" />
                <Nutshell name="section" />
                <Services name="section" />
                <Capabilities name="section capabilities" />
                <Insights name="section" />
                <Labs name="section labs" />
                <Clients name="section" />
                <Quotes name="section quotes" />
                <Footer name="section" />
              </div>
            );
          }}
        />
      </div>
    );
  }
}
export default App;
