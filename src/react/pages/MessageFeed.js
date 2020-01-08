import React from "react";
import { Menus, MessageList, MessageForm } from "../components";
import { userIsAuthenticated } from "../HOCs";
import { Comment, Header } from "../components";

class MessageFeed extends React.Component {
  render() {
    return (
      <>
        <Menus isAuthenticated={this.props.isAuthenticated} />
        <Comment.Group size="large">
          <MessageForm />
          <Header as="h2" dividing style={{ color: "white" }}>
            Message List
          </Header>
          <MessageList />
        </Comment.Group>
      </>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
