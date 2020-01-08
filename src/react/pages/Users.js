import React from "react";
import { Menus, ListOfUsers } from "../components";
import { userIsAuthenticated } from "../HOCs";
//import { Comment, Header } from "../components";

class Users extends React.Component {
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
