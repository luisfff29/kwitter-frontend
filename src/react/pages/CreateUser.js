import React from "react";
import { Menus, CreateUserForm } from "../components";
import { userIsNotAuthenticated } from "../HOCs";

class CreateUser extends React.Component {
  render() {
    return (
      <>
        <Menus />
        <CreateUserForm />
      </>
    );
  }
}

export default userIsNotAuthenticated(CreateUser);
