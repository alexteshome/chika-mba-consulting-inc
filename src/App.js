import React from "react";
import { Route, Redirect } from "react-router-dom";
import ResponsiveContainer from "./components/layout/Navbar/ResponsiveContainer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <ResponsiveContainer>
        <Route
          path={process.env.PUBLIC_URL + "/"}
          exact
          render={() => <Redirect to="/home" />}
        />
        <Route path={process.env.PUBLIC_URL + "/home"} component={Home} />
        <Route path={process.env.PUBLIC_URL + "/about"} component={About} />
        <Route path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
      </ResponsiveContainer>
      <Footer />
    </div>
  );
}

export default App;
