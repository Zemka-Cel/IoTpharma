import React from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Switch, Route, NavLink,Link } from "react-router-dom";


import Homescreen from "./views/HomeScreen";
import DetailsScreen from './views/DetailsScreen';
import Edit from './views/Edit';

function App() {
  return (
    <BrowserRouter>
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/HomeScreen" className="navbar-brand">
          Home
          </a>
        <div className="navbar-nav mr-auto">
       
          <li className="nav-item">
            <Link to={"/details"} className="nav-link">
              Details
              </Link>
          </li>
        </div>
        <a href="/edit" className="navbar-brand">
          Edit
          </a>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/HomeScreen"]} component={Homescreen} />
          <Route exact path="/details" component={DetailsScreen} />
          <Route path="/edit" component={Edit} />
         


        </Switch>
      </div>
    </div>

  </BrowserRouter>
  );
}

export default App;
