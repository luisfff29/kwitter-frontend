import React from "react";
import { Link } from "../components";
import { Button, Checkbox, Form } from 'semantic-ui-react'
//import "./CreateUser.css"


const CreateUserForm = () => (
  <React.Fragment>
  <h1>Welcome to Kwitter!</h1>

  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>

    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>

    <Form.Field>
    <label>Username</label>
    <input placeholder='Username' />
    </Form.Field>

    <Form.Field>
    <label>Email</label>
    <input placeholder='Email' />
    </Form.Field>

    <Form.Field>
    <label>Password</label>
    <input placeholder='Password' />
    </Form.Field>

    <Form.Field>
    <label>Confirm Password</label>
    <input placeholder='Confirm Password' />
    </Form.Field>

    <Button type='submit'>Create</Button>
  </Form>

  <Link to = "/">Go Back</Link>
  </React.Fragment>
)

export default CreateUserForm;
