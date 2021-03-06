import React, { Component } from "react";
import { Spinner } from "../../components";
import { withAsyncAction } from "../../HOCs";
import {
  Link,
  Segment,
  Grid,
  Form,
  Button,
  Divider,
  Responsive,
} from "../../components";

class LoginForm extends Component {
  state = { username: "", password: "" };

  handleLogin = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { loading, error } = this.props;

    return (
      <Segment placeholder style={{ width: "80%", margin: "0 auto" }}>
        <Grid columns={2} relaxed stackable textAlign="left">
          <Grid.Column>
            <Form onSubmit={this.handleLogin}>
              <Form.Field>
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  autoFocus
                  required
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  onChange={this.handleChange}
                />
              </Form.Field>

              <Button
                color="blue"
                content="Login"
                type="submit"
                disabled={loading}
              />
              {loading && <Spinner name="circle" color="white" />}
              {error && <p style={{ color: "red" }}>{error.message}</p>}
            </Form>
            <Responsive {...Responsive.onlyMobile}>
              <Divider horizontal>OR</Divider>
            </Responsive>
          </Grid.Column>

          <Grid.Column verticalAlign="middle">
            <Button
              as={Link}
              to="/createuser"
              color="blue"
              content="Sign up"
              icon="signup"
              size="huge"
            />
          </Grid.Column>
        </Grid>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Divider vertical>OR</Divider>
        </Responsive>
      </Segment>
    );
  }
}

export default withAsyncAction("auth", "login")(LoginForm);
