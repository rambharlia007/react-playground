import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";

import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";
import Interviewee from "./components/New/Interviewee";
import { Redirect } from "react-router";
import PrivateRoute from "./components/PrivateRoute";
import AuthService from "./services/auth";
import Applicant from "./components/List/Applicant";

import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

var authService = new AuthService();

class App extends Component {
  state = { isAuthenticated: false };
  constructor(props) {
    super(props);
    if (authService.getLocalStorageData("id_token")) {
      this.setState({ isAuthenticated: true });
    }
  }

  componentWillMount() {
    if (authService.getLocalStorageData("id_token")) {
      this.setState({ isAuthenticated: true });
    }
  }

  authenticateCallBackHandler = () => {
    this.setState({ isAuthenticated: true });
  };

  render() {
    return (
      <Router>
        <div>
          <Route
            path="/login"
            exact
            strict
            render={props => {
              return (
                <Login
                  {...props}
                  authenticateCallBack={this.authenticateCallBackHandler}
                  isAuthenticated={this.state.isAuthenticated}
                />
              );
            }}
          />
          <PrivateRoute
            exact
            path="/new/applicant"
            isAuthenticated={this.state.isAuthenticated}
            component={Interviewee}
          />
          <PrivateRoute
            exact
            path="/"
            isAuthenticated={this.state.isAuthenticated}
            component={Interviewee}
          />
          <PrivateRoute
            exact
            path="/list/applicant"
            isAuthenticated={this.state.isAuthenticated}
            component={Applicant}
          />
        </div>
      </Router>
    );
  }
}

export default App;
