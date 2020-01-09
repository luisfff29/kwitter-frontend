import React from "react";
import { Menus, ListOfUsers, SearchUsers } from "../components";
import { userIsAuthenticated } from "../HOCs";
//import { Comment, Header } from "../components";

class Users extends React.Component {
  render() {
    return (
      <>
        <Menus isAuthenticated={this.props.isAuthenticated} />
        <SearchUsers />
        <ListOfUsers />
      </>
    );
  }
}

export default userIsAuthenticated(Users);
