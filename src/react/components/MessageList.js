import React from "react";
import "./MessageList.css";
import PopupLikes from "./PopupLikes";
import { Comment } from "../components";

class MessageList extends React.Component {
  state = { messages: [] };
  componentDidMount = () => {
    fetch("https://kwitter-api.herokuapp.com/messages")
      .then(response => response.json())
      .then(data => {
        this.setState({ messages: data.messages });
      });
  };

  render() {
    return this.state.messages.map(comment => (
      <Comment id={comment.id} key={comment.id}>
        <Comment.Avatar
          id="avatar"
          src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
        />
        <Comment.Content>
          <Comment.Author as="a">{comment.username}</Comment.Author>
          <Comment.Metadata>
            {new Date(comment.createdAt).toLocaleString()}
          </Comment.Metadata>
          <Comment.Text>{comment.text}</Comment.Text>
          <PopupLikes atr={comment.likes} />
        </Comment.Content>
      </Comment>
    ));
  }
}

export default MessageList;
