import React from "react";
import { Card, Comment, Dimmer, Spinner } from "../components";
import { withAsyncAction, connect } from "../HOCs";
import { DeleteMessage } from "../components";

class MyMessages extends React.Component {
  componentDidMount = () => {
    this.props.getPersonalMessages(this.props.username);
  };

  render() {
    const defaultAvatar = require("./images/default-avatar.png");

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
                    src={
                      message.pictureLocation !== undefined
                        ? `https://kwitter-api.herokuapp.com${message.pictureLocation}`
                        : defaultAvatar
                    }
                  />
                  <Comment.Content>
                    <Comment.Author as="a">{message.username}</Comment.Author>
                    <Comment.Metadata>
                      {new Date(message.createdAt).toLocaleString()}
                    </Comment.Metadata>
                    <Comment.Text>
                      {message.text}
                      <DeleteMessage
                        id={message.id}
                        username={message.username}
                      />
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

export default connect(mapStateToProps)(
  withAsyncAction("messages", "getPersonalMessages")(MyMessages)
);
