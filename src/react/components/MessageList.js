import React from "react";
import { Spinner } from ".";
import { Comment, PopupLikes, Dimmer } from "../components";
import { withAsyncAction } from "../HOCs";

const defaultAvatar = require("./images/default-avatar.png");

class MessageList extends React.Component {
  componentDidMount = () => {
    this.props.getMessages();
  };

  render() {
    if (this.props.result === null) {
      return (
        <Dimmer active>
          <Spinner name="pacman" color="white" />
        </Dimmer>
      );
    }

    const messages = this.props.result.messages;

    return messages.map((comment) => (
      <Comment key={comment.id}>
        <Comment.Avatar
          style={{ height: "60px", width: "60px", marginRight: "10px" }}
          src={defaultAvatar}
        />
        <Comment.Content>
          <Comment.Author as="a">{comment.username}</Comment.Author>
          <Comment.Metadata className="gray">
            {new Date(comment.createdAt).toLocaleString()}
          </Comment.Metadata>
          <Comment.Text>{comment.text}</Comment.Text>
          <PopupLikes
            atr={comment.likes}
            id={comment.id}
            li={comment.likes.map((like) => like.id)}
          />
        </Comment.Content>
      </Comment>
    ));
  }
}

export default withAsyncAction("messages", "getMessages")(MessageList);
