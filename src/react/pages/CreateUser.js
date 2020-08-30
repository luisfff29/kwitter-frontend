import React from "react";
import CreateUserForm from "../components/CreateUser/CreateUserForm";
import { userIsNotAuthenticated } from "../HOCs";

class CreateUser extends React.Component {
  render() {
    return <CreateUserForm />;
  }
}

export default userIsNotAuthenticated(CreateUser);
