import React from "react";
import { Spinner } from ".";
import { withAsyncAction } from "../HOCs";
import { Link } from "../components";
import "./LoginForm.css";

// _____Where the user will be rendered!!!!!!_____
// const loadUsers = () =>
//   fetch("")
//     .then()

// _____Where the user will be rendered!!!!!!_____
// const loadUsers = () =>
//   fetch("")
//     .then()

class LoginForm extends React.Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;
    return (
      <React.Fragment>
        <form id="login-form" onSubmit={this.handleLogin}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            autoFocus
            required
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            required
            onChange={this.handleChange}
          />
          <button type="submit" disabled={loading}>
            Login
          </button>

          <Link to="/createuser">
            <button type="submit" disabled={loading} id="createuser">
              Create Account
            </button>
          </Link>
        </form>

        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </React.Fragment>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
