import React, { Component } from "react";
import { Menus, FeedCode, ThisIsTheBottom } from "../components";
import { userIsAuthenticated } from "../HOCs";
import "../components/DarkMode.css";

class Feed extends Component {
  render() {
    return (
      <>
        <Menus isAuthenticated={this.props.isAuthenticated} />
        <FeedCode className="dark-mode2" />
        <ThisIsTheBottom />
      </>
    );
  }
}

export default userIsAuthenticated(Feed);
