import React, { Component } from "react";
import { Link } from "../components";
import { withAsyncAction } from "../HOCs";
import { Button, Form, Message, Icon, Image } from "../components";
import "./DarkMode.css";

class CreateUserForm extends Component {
  state = { username: "", displayName: "", password: "" };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCreateUser = event => {
    this.props.createNewUser(
      this.state.username,
      this.state.displayName,
      this.state.password
    );
  };

  render() {
    const backgroundPic = require("./images/backgroundDarkMode.jpg");
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-80px"
        }}
      >
        <Image size="large" src={backgroundPic} />
        <div>
          <Message
            className="dark-mode2 white"
            attached
            header="Welcome to Kwitter!"
            content="Fill out the form below to sign-up for a new account"
          />
          <Form className="attached fluid segment dark-mode1">
            <Form.Field>
              <label className="white">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
                required
              />
            </Form.Field>
            <Form.Field>
              <label className="white">Display Name</label>
              <input
                type="text"
                name="displayName"
                placeholder="Display Name"
                onChange={this.handleChange}
                required
              />
            </Form.Field>
            <Form.Field>
              <label className="white">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange}
                required
              />
            </Form.Field>
            <Button color="blue" type="submit" onClick={this.handleCreateUser}>
              Submit
            </Button>
          </Form>
          <Message className="dark-mode2 white" attached="bottom" warning>
            <Icon name="help" />
            Already signed up?&nbsp;<Link to="/">Login here</Link>
            &nbsp;instead.
          </Message>
        </div>
      </div>
    );
  }
}

export default withAsyncAction("users", "createNewUser")(CreateUserForm);
