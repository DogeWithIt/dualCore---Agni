import React from "react";
import BurgerNavBar from "./Components/NavBar/BurgerNavBar";
import Report from "./Components/report_popup/report";
import Map from "./Components/Map/Map";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <BurgerNavBar />
        <Map/>
        <Switch>
          <Route path="/report" component={Report} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
