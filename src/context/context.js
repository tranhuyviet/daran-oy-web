import React, { Component } from "react";

import { items } from "./projectData";

const AppContext = React.createContext();

class AppProvider extends Component {
  state = {
    storeProjects: [],
    showLinks: false,
    showFixedNavbar: false
  };
  componentDidMount() {
    this.setProjects(items);
  }

  //set fomat projects
  setProjects = projects => {
    let storeProjects = projects.map(item => {
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      const project = { id, ...item.fields, image };
      return project;
    });

    this.setState(
      {
        storeProjects
      }
      //() => console.log(this.state.storeProjects)
    );
  };

  //handle showlinks
  handleShowLinks = () => {
    this.setState({
      showLinks: !this.state.showLinks
    });
  };

  //handleScoll screen
  handleScoll = () => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset === 0) {
        this.setState({ showFixedNavbar: false });
      } else {
        this.setState({ showFixedNavbar: true });
      }
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          handleShowLinks: this.handleShowLinks
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

const AppConsumer = AppContext.Consumer;

export { AppConsumer, AppProvider, AppContext };
