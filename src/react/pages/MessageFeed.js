import React, { Component } from "react";
import { Menus, MessageList, MessageForm } from "../components";
import { userIsAuthenticated } from "../HOCs";
import { Comment, Header } from "../components";

class MessageFeed extends Component {
  render() {
    return (
      <>
        <Menus isAuthenticated={this.props.isAuthenticated} />
        <Comment.Group size="large">
          <MessageForm />
          <Header as="h2" dividing textAlign="center">
            Message List
          </Header>
          <MessageList />
        </Comment.Group>
      </>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
