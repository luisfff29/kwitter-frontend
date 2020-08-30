import React, { Component } from "react";
import { Menus, ListOfUsers } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Users extends Component {
  render() {
    return (
      <>
        <Menus isAuthenticated={this.props.isAuthenticated} />
        <ListOfUsers />
      </>
    );
  }
}

export default userIsAuthenticated(Users);
