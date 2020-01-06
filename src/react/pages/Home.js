import React from "react";
import { userIsNotAuthenticated } from "../HOCs";
import { LoginForm, Menu } from "../components";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menu />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
