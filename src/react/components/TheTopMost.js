import React, { Component } from "react";
import { Modal, Card, Comment, Item } from "../components";
import { PopupLikes } from "../components";

export class MostLikedMessages extends Component {
  state = { messages: [] };

  componentDidMount = () => {
    fetch("https://kwitter-api.herokuapp.com/messages")
      .then(response => response.json())
      .then(data => {
        this.setState({
          messages: data.messages
            .sort((a, b) => b.likes.length - a.likes.length)
            .slice(0, 3)
        });
      });
  };

  render() {
    return (
      <>
        <Modal.Header>Top 3 most liked messages</Modal.Header>
        <Modal.Content>
          {this.state.messages.map(message => (
            <Card.Content key={message.id} style={{ paddingBottom: "10px" }}>
              <Comment.Group size="big">
                <Comment>
                  <Comment.Avatar src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" />
                  <Comment.Content>
                    <Comment.Author as="a">{message.username}</Comment.Author>
                    <Comment.Metadata className="gray">
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

export class MostRecentUsers extends Component {
  state = { users: [] };

  componentDidMount = () => {
    fetch("https://kwitter-api.herokuapp.com/users")
      .then(response => response.json())
      .then(data => {
        this.setState({
          users: data.users.slice(0, 5)
        });
      });
  };

  render() {
    return (
      <>
        <Modal.Header>Top 5 most recent users</Modal.Header>
        <Modal.Content>
          {this.state.users.map(user => (
            <Item.Group divided>
              <Item>
                <Item.Image
                  size="tiny"
                  src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                />
                <Item.Content verticalAlign="middle">
                  <Item.Header>{user.displayName}</Item.Header>
                </Item.Content>
              </Item>
            </Item.Group>
          ))}
        </Modal.Content>
      </>
    );
  }
}
