import React from "react";
import { Route, Redirect } from "react-router-dom";
import ResponsiveContainer from "./components/layout/Navbar/ResponsiveContainer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div>
      <ResponsiveContainer>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </ResponsiveContainer>
      <Redirect from="/" exact to="/home" />
      <Footer />
    </div>
  );
}

export default App;
