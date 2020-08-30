import React, { Component } from "react";
import { CreateUserForm } from "../components";
import { userIsNotAuthenticated } from "../HOCs";

class CreateUser extends Component {
  render() {
    return <CreateUserForm />;
  }
}

export default userIsNotAuthenticated(CreateUser);
