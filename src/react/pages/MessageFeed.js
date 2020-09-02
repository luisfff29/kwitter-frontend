import React, { Component } from "react";
import { Menus, MessageList, MessageForm, MessageCard } from "../components";
import { userIsAuthenticated } from "../HOCs";
import { Comment, Header } from "../components";

class MessageFeed extends Component {
  state = { card: {}, show: false };

  showCard = (event) => {
    fetch(`https://kwitter-api.herokuapp.com/users/${event.target.text}`)
      .then((res) => res.json())
      .then((data) => this.setState({ show: true, card: data.user }));
  };

  hideCard = () => {
    this.setState({ show: false, card: {} });
  };

  render() {
    return (
      <>
        <Menus isAuthenticated={this.props.isAuthenticated} />
        <MessageForm />
        {this.state.show && (
          <MessageCard card={this.state.card} hide={this.hideCard} />
        )}
        <Comment.Group size="large">
          <Header as="h2" dividing textAlign="center">
            Message List
          </Header>
          <MessageList showCard={this.showCard} />
        </Comment.Group>
      </>
    );
  }
}

export default userIsAuthenticated(MessageFeed);
