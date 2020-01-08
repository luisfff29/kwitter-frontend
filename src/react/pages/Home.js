import React from "react";
import { userIsNotAuthenticated } from "../HOCs";
import { LoginForm, Menus } from "../components";

class Home extends React.Component {
  render() {
    return (
      <>
        <Menus />
        <h2>Your favorite microblogging platform</h2>
        <LoginForm />
      </>
    );
  }
}

export default userIsNotAuthenticated(Home);
