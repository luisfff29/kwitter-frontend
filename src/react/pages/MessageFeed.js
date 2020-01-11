import React from "react";
import {
  Menus,
  MessageList,
  MessageForm,
  ThisIsTheBottom
} from "../components";
import { userIsAuthenticated } from "../HOCs";
import { Comment, Header } from "../components";
import "../components/DarkMode.css";

class MessageFeed extends React.Component {
  render() {
    return (
      <>
        <Menus isAuthenticated={this.props.isAuthenticated} />
        <Comment.Group size="large" className="dark-mode">
          <MessageForm />
          <Header as="h2" dividing className="white">
            Message List
          </Header>
          <MessageList />
        </Comment.Group>
        <ThisIsTheBottom />
      </>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
