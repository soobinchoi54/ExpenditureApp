import React from "react";
import { Router, NavLink, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./css/Navigation.css";
import Expenditure from "./Expenditure";
import Transactions from "./Transactions";

function Navigation() {
  const newHistory = createBrowserHistory();
  return (
    <div className="Nav">
      <Router history={newHistory}>
        <NavLink className="NavLink" to="/">
          <i className="fa fa-credit-card" aria-hidden="true"></i>Add
          Expenditure
        </NavLink>
        <NavLink className="NavLink" to="/transactions">
          <i className="fa fa-exchange" aria-hidden="true"></i>View Transactions
        </NavLink>
        <NavLink className="NavLink" to="/overview">
          <i className="fa fa-bar-chart" aria-hidden="true"></i>Overview
        </NavLink>

        <Switch>
          <Route exact path="/" component={Expenditure} />
          <Route path="/transactions" component={Transactions} />
          <Route path="/overview" component={Transactions} />
        </Switch>
      </Router>
    </div>
  );
}

export default Navigation;
