import React from "react";
import { Menus } from "../components";
import { userIsNotAuthenticated } from "../HOCs";
import { CreateUserForm } from "../components";

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
