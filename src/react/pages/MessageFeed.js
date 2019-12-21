import React from "react";
import { Menu, MessageList } from "../components";
import { userIsAuthenticated } from "../HOCs";
import { Comment, Header } from "../components";

class MessageFeed extends React.Component {
  render() {
    return (
      <>
        <Menu isAuthenticated={this.props.isAuthenticated} />
        <Comment.Group size="large">
          <Header as="h2" dividing>
            Message List
          </Header>
          <MessageList />
        </Comment.Group>
      </>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
