import React, { Component } from "react";
import { Menus, FeedCode } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Feed extends Component {
  render() {
    return (
      <>
        <Menus isAuthenticated={this.props.isAuthenticated} />
        <FeedCode />
      </>
    );
  }
}

export default userIsAuthenticated(Feed);
