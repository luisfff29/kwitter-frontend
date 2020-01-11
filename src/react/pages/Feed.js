import React, { Component } from "react";
import { Menus, FeedCode, ThisIsTheBottom } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Feed extends Component {
  render() {
    return (
      <>
        <Menus isAuthenticated={this.props.isAuthenticated} />
        <FeedCode />
        <ThisIsTheBottom />
      </>
    );
  }
}

export default userIsAuthenticated(Feed);
