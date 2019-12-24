import React from "react";
import { Spinner } from ".";
import { withAsyncAction } from "../HOCs";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { Button } from "../components";


class LoginForm extends React.Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  // Need a Method for the create account button 
  HandleCreateUser = e => {
    
  }
  

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
        </form>

        <Link to = "/createuser">
          <Button 
          type="button">
            Create Account
          </Button>
        </Link>


        {loading && <Spinner name="circle" color="blue" />}
        {error && <p style={{ color: "red" }}>{error.message}</p>}
      </React.Fragment>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
