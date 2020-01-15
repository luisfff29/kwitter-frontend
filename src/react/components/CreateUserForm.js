import React, { Component } from "react";
import { Link } from "../components";
import {
  Button,
  Form,
  Message,
  Icon,
  Image,
  Checkbox
} from "semantic-ui-react";
import "./DarkMode.css";

class CreateUserForm extends Component {
  render() {
    const backgroundPic = require("./images/backgroundDarkMode.jpg");
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
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
                autoFocus
                required
              />
            </Form.Field>
            <Form.Field>
              <label className="white">Display name</label>
              <input
                type="text"
                name="displayname"
                placeholder="Display name"
                autoFocus
                required
              />
            </Form.Field>
            <Form.Field>
              <label className="white">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Field>
            <Form.Field
              required
              control={Checkbox}
              label={
                <label className="white">
                  I agree to the Terms and Conditions
                </label>
              }
            />
            <Button color="blue">Submit</Button>
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

export default CreateUserForm;
