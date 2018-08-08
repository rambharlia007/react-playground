import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./component/Login";
import Header from "./component/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Route from "react-router-dom/Route";

class App extends Component {
  state = { isLoggedIn: false };
  loginCallBack = value => {
    this.setState({ isLoggedIn: value });
  };
  render() {
    return (
      <Router>
        <div>
          {this.state.isLoggedIn && (
            <Route path="/" exact strict component={Header} />
          )}
          {!this.state.isLoggedIn && (
            <Route
              path="/"
              exact
              strict
              render={props => {
                return <Login onLoginCallBack={this.loginCallBack} />;
              }}
            />
          )}
        </div>
      </Router>
    );
  }
}

export default App;
