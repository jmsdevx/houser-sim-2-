import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import House from "./components/House";
import Wizard from "./components/Wizard";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import HouseEdit from "./components/HouseEdit";

export default (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path={`/houses/:id`} component={HouseEdit} />
    <Route path="/house" component={House} />
    <Route path="/wizard" component={Wizard} />
    <Route path={`/stepOne`} component={StepOne} />
    <Route path={`/stepTwo`} component={StepTwo} />
    <Route path={`/stepThree`} component={StepThree} />
  </Switch>
);
