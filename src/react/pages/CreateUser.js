import React from "react";
import { Menu } from "../components";
import { userIsNotAuthenticated } from "../HOCs";
import { CreateUserForm } from "../components";

class CreateUser extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <CreateUserForm />
      </>
    );
  }
}

export default userIsNotAuthenticated(CreateUser);
