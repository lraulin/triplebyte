import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Page2 from "./Page2";
import Page3 from "./Page3";

const Main = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/page2" component={Page2} />
      <Route path="/page3" component={Page3} />
    </Switch>
  </div>
);

export default Main;
