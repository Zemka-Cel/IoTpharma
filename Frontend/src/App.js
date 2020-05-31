import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Switch, Route, NavLink, Link } from "react-router-dom";

import Homescreen from "./views/HomeScreen";
import DetailsScreen from "./views/DetailsScreen";
import Form from "./views/FormOne";

import FormEdited from "./views/FormEdited";


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand text-white">
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/HomeScreen"} className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/details"} className="nav-link text-white ">
                Details
              </Link>
            </li>
          </div>
          <a href="/edit" className="nav-link text-white">
            Edit
          </a>
          
         
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/HomeScreen"]} component={Homescreen} />
            <Route exact path="/details" component={DetailsScreen} />
            <Route path="/edit" component={FormEdited} />
            <Route path="/edit/:id" component={FormEdited} />
          </Switch>
        </div>
      </div>
      <nav className="navbar navbar-expand text-white mt-5" id="center">
        &copy; Copyright - Azemina Celebic 2020
      </nav>
    </BrowserRouter>
  );
}

export default App;
