import React from "react";
import { Comment, PopupLikes, Dimmer, Loader } from "../components";
import "./DarkMode.css";
import { withAsyncAction } from "../HOCs";

class MessageList extends React.Component {
  componentDidMount = () => {
    this.props.getMessages();
  };

  render() {
    const defaultAvatar = require("./images/default-avatar.png");

    if (this.props.result === null) {
      return (
        <Dimmer active>
          <Loader size="big">Loading...</Loader>
        </Dimmer>
      );
    }

    const messages = this.props.result.messages;

    return messages.map(comment => (
      <Comment key={comment.id}>
        <Comment.Avatar
          style={{ height: "60px", width: "60px", marginRight: "10px" }}
          src={defaultAvatar}
        />
        <Comment.Content>
          <Comment.Author as="a" className="white">
            {comment.username}
          </Comment.Author>
          <Comment.Metadata className="gray">
            {new Date(comment.createdAt).toLocaleString()}
          </Comment.Metadata>
          <Comment.Text className="white">{comment.text}</Comment.Text>
          <PopupLikes atr={comment.likes} />
        </Comment.Content>
      </Comment>
    ));
  }
}

export default withAsyncAction("messages", "getMessages")(MessageList);
