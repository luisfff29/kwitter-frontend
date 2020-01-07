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
        data.messages.map((user, index) =>
          fetch("https://kwitter-api.herokuapp.com/users/" + user.username)
            .then(res => res.json())
            .then(prom => {
              data.messages[index].pictureLocation =
                "https://kwitter-api.herokuapp.com" + prom.user.pictureLocation;
            })
        );
        this.setState({ messages: data.messages });
      });
  };

  render() {
    console.log(this.state.messages);
    return this.state.messages.map(comment => (
      <Comment key={comment.id}>
        <Comment.Avatar id="avatar" src={comment.pictureLocation} />
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
