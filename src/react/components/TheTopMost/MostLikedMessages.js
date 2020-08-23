import React, { Component } from "react";
import { Spinner } from "..";
import { Modal, Card, Comment, Dimmer } from "../../components";
import { PopupLikes } from "../../components";
import { withAsyncAction } from "../../HOCs";

class MostLikedMessages extends Component {
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

    const messages = this.props.result.messages
      .sort((a, b) => b.likes.length - a.likes.length)
      .slice(0, 5);

    return (
      <>
        <Modal.Header>Top 5 most liked messages</Modal.Header>
        <Modal.Content>
          {messages.map((message) => (
            <Card.Content key={message.id} style={{ paddingBottom: "10px" }}>
              <Comment.Group size="big">
                <Comment>
                  <Comment.Avatar src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" />
                  <Comment.Content>
                    <Comment.Author as="a">{message.username}</Comment.Author>
                    <Comment.Metadata>
                      {new Date(message.createdAt).toLocaleString()}
                    </Comment.Metadata>
                    <Comment.Text>{message.text}</Comment.Text>
                    <PopupLikes atr={message.likes} />
                  </Comment.Content>
                </Comment>
              </Comment.Group>
            </Card.Content>
          ))}
        </Modal.Content>
      </>
    );
  }
}

export default withAsyncAction("messages", "getMessages")(MostLikedMessages);
