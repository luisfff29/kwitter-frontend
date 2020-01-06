import React, { Component } from "react";
import { Menu, FeedCode } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Feed extends Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <FeedCode />
      </>
    );
  }
}

export default userIsAuthenticated(Feed);
