import React from "react";
import { Menu } from "../components";
import { userIsAuthenticated } from "../HOCs";

class MessageFeed extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <h2>Message Feed</h2>
      </>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
