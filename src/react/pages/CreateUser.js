import React from "react";
import { CreateUserForm } from "../components";
import { userIsNotAuthenticated } from "../HOCs";

class CreateUser extends React.Component {
  render() {
    return (
      <>
        <h1
          style={{
            marginTop: "-100px",
            fontFamily: "Bangers",
            fontSize: "70px",
            backgroundColor: "#171725",
            color: "white",
            textAlign: "center"
          }}
        >
          Kwitter
        </h1>
        <CreateUserForm />
      </>
    );
  }
}

export default userIsNotAuthenticated(CreateUser);
