import React, { Component } from "react";
import { Card, Comment, Dimmer, Spinner } from "../../components";
import { withAsyncAction, connect } from "../../HOCs";
import { DeleteMessage } from "../../components";
import DefaultAvatar from "../../assets/images/default-avatar.png";
import { withRouter } from "react-router-dom";

class MyMessages extends Component {
  addDefaultSrc = (event) => {
    event.target.src = DefaultAvatar;
  };

  componentDidMount = () => {
    this.props.getPersonalMessages(this.props.match.params.username);
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

    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>Recent Comments</Card.Header>
        </Card.Content>
        {this.props.result.count !== 0 ? (
          messages.map((message) => (
            <Card.Content key={message.id}>
              <Comment.Group>
                <Comment>
                  <Comment.Avatar
                    src={`https://kwitter-api.herokuapp.com/users/${message.username}/picture/`}
                    onError={this.addDefaultSrc}
                  />
                  <Comment.Content>
                    <Comment.Author as="a">{message.username}</Comment.Author>
                    <Comment.Metadata>
                      {new Date(message.createdAt).toLocaleString()}
                    </Comment.Metadata>
                    <Comment.Text>
                      {message.text}
                      {this.props.username ===
                      this.props.match.params.username ? (
                        <DeleteMessage
                          id={message.id}
                          username={message.username}
                        />
                      ) : null}
                    </Comment.Text>
                  </Comment.Content>
                </Comment>
              </Comment.Group>
            </Card.Content>
          ))
        ) : (
          <i style={{ padding: "20px" }}>-No recent comments-</i>
        )}
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.auth.login.result && state.auth.login.result.username,
  };
};

export default withRouter(
  connect(mapStateToProps)(
    withAsyncAction("messages", "getPersonalMessages")(MyMessages)
  )
);
