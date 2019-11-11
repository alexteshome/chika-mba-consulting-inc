import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

import ResponsiveContainer from "./components/layout/Navbar/ResponsiveContainer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = props => {
  const [activeTab, setActiveTab] = useState(
    props.location.pathname.substr(1) === ""
      ? "home"
      : props.location.pathname.substr(1)
  );

  return (
    <div>
      <ResponsiveContainer activeTab={activeTab} setActiveTab={setActiveTab}>
        <Route path="/" exact render={() => <Redirect to="/home" />} />
        <Route
          path="/home"
          render={() => <Home setActiveTab={setActiveTab} />}
        />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </ResponsiveContainer>
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
};

export default withRouter(App);
