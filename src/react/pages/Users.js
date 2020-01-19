import React from "react";
import { Menus, ListOfUsers, ThisIsTheBottom } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Users extends React.Component {
  render() {
    return (
      <>
        <Menus isAuthenticated={this.props.isAuthenticated} />
        <ListOfUsers />
        <ThisIsTheBottom />
      </>
    );
  }
}

export default userIsAuthenticated(Users);
