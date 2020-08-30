import React, { Component } from "react";
import { userIsNotAuthenticated } from "../HOCs";
import { LoginForm } from "../components/";

class Home extends Component {
  render() {
    return (
      <>
        <h1
          style={{
            marginTop: "-60px",
            fontFamily: "Bangers",
            fontSize: "100px",
            textAlign: "center",
          }}
        >
          Kwitter
        </h1>
        <h2 style={{ paddingLeft: "10%" }}>
          Your favorite microblogging platform
        </h2>
        <LoginForm />
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
