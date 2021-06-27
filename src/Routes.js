import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import ProductPage from "./pages/ProductPage/ProductPage";
import Favourites from "./pages/Favourites/Favourites";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/favourites" component={Favourites} />
      </Switch>
    </Router>
  );
};

export default Routes;
