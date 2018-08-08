import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  state = { userName: "", password: "" };

  constructor(props) {
    super(props);
  }

  HandleInputChange = event => {
    var name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  };

  Authenticate = () => {
    console.log("");
    this.props.onLoginCallBack(true);
  };

  render() {
    return (
      <form class="form-signin">
        <img
          class="mb-4"
          src="../../assets/brand/bootstrap-solid.svg"
          alt=""
          width="72"
          height="72"
        />
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" class="sr-only">
          Email address
        </label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          name="userName"
          value={this.state.userName}
          onChange={e => {
            this.HandleInputChange(e);
          }}
        />
        <label for="inputPassword" class="sr-only">
          Password
        </label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          name="password"
          onChange={e => {
            this.HandleInputChange(e);
          }}
        />
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button
          class="btn btn-lg btn-primary btn-block"
          type="submit"
          onClick={() => {
            this.Authenticate();
          }}
          disabled={!(this.state.userName && this.state.password)}
        >
          Sign in
        </button>
        <p class="mt-5 mb-3 text-muted">© 2017-2018</p>
      </form>
    );
  }
}

export default Login;
