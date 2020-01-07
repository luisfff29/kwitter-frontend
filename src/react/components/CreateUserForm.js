import React from "react";
import { Link } from "../components";
import { Button, Form } from "semantic-ui-react";
//import "./CreateUser.css"

const CreateUserForm = () => (
  <React.Fragment>
    <h1>Welcome to Kwitter!</h1>

    <Form>
      <Form.Field>
        <label>Username</label>
        <input placeholder="Username" />
      </Form.Field>

      <Form.Field>
        <label>Display Name</label>
        <input placeholder="Display Name" />
      </Form.Field>

      <Form.Field>
        <label>Password</label>
        <input placeholder="Password" />
      </Form.Field>

      <Form.Field>
        <label>Confirm Password</label>
        <input placeholder="Confirm Password" />
      </Form.Field>

      <Button type="submit">Create</Button>
    </Form>

    <Link to="/">Go Back</Link>
  </React.Fragment>
);

export default CreateUserForm;
