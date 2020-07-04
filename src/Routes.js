import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home, Error, About, Contact, Cv, Portfolio } from "./pages";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/cv" component={Cv} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/error" component={Error} />
      <Redirect to="/error" />
    </Switch>
  );
}
