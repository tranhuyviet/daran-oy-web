import React from "react";
import "./App.css";

//import all pages for router setup
import HomePage from "./pages/HomePage";
import DefaultPage from "./pages/DefaultPage";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route component={DefaultPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
