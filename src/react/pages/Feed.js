import React, { Component } from "react";
import { Menus, ThisIsTheBottom } from "../components";
import FeedCode from "../components/Feed/FeedCode";
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
