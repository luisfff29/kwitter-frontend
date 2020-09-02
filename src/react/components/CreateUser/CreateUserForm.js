import React, { Component } from "react";
import { Link, Spinner } from "../../components";
import { withAsyncAction } from "../../HOCs";
import { Button, Form, Message, Icon, Image } from "../../components";
import BackgroundDarkMode from "../../assets/images/backgroundDarkMode.jpg";

class CreateUserForm extends Component {
  state = { username: "", displayName: "", password: "" };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCreateUser = (event) => {
    this.props.createNewUser(
      this.state.username,
      this.state.displayName,
      this.state.password
    );
  };

  render() {
    const { loading, error } = this.props;

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "-80px",
        }}
      >
        <Image size="large" src={BackgroundDarkMode} />
        <div>
          <Message
            attached
            header="Welcome to Kwitter!"
            content="Fill out the form below to sign-up for a new account"
          />
          <Form className="attached fluid segment">
            <Form.Field>
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={this.handleChange}
                required
              />
            </Form.Field>
            <Form.Field>
              <label>Display Name</label>
              <input
                type="text"
                name="displayName"
                placeholder="Display Name"
                onChange={this.handleChange}
                required
              />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
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
          {loading && <Spinner name="circle" color="white" />}
          {error && <p style={{ color: "red" }}>{error.message}</p>}
          <Message attached="bottom" warning>
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
