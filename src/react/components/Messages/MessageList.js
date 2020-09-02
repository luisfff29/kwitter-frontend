import React, { Component } from "react";
import { Spinner } from "../../components";
import { Comment, PopupLikes, Dimmer } from "../../components";
import { withAsyncAction } from "../../HOCs";
import DefaultAvatar from "../../assets/images/default-avatar.png";

class MessageList extends Component {
  componentDidMount = () => {
    this.props.getMessages();
  };

  addDefaultSrc = (event) => {
    event.target.src = DefaultAvatar;
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
          src={`https://kwitter-api.herokuapp.com/users/${comment.username}/picture/`}
          onError={this.addDefaultSrc}
        />
        <Comment.Content>
          <Comment.Author onClick={(e) => this.props.showCard(e)} as="a">
            {comment.username}
          </Comment.Author>
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
