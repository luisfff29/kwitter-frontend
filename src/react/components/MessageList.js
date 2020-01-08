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
        const newDataMessages = [...data.messages];
        data.messages.map((user, index) =>
          fetch("https://kwitter-api.herokuapp.com/users/" + user.username)
            .then(res => res.json())
            .then(prom => {
              newDataMessages[index].pictureLocation =
                "https://kwitter-api.herokuapp.com" + prom.user.pictureLocation;
            })
        );
        this.setState({ messages: newDataMessages });
      });
  };

  render() {
    return this.state.messages.map(comment => (
      <Comment key={comment.id}>
        <Comment.Avatar
          id="avatar"
          src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
        />
        <Comment.Content>
          <Comment.Author style={{ color: "white" }} as="a">
            {comment.username}
          </Comment.Author>
          <Comment.Metadata style={{ color: "gray" }}>
            {new Date(comment.createdAt).toLocaleString()}
          </Comment.Metadata>
          <Comment.Text style={{ color: "white" }}>{comment.text}</Comment.Text>
          <PopupLikes atr={comment.likes} />
        </Comment.Content>
      </Comment>
    ));
  }
}

export default MessageList;
