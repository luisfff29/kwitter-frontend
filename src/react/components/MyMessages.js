import React from "react";
import { Card, Comment, Dimmer, Loader } from "../components";
import "./DarkMode.css";
import { withAsyncAction } from "../HOCs";
import { DeleteButton } from "../components";

class MyMessages extends React.Component {
  componentDidMount = () => {
    this.props.getPersonalMessages("luisf");
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

    return (
      <Card className="dark-mode2" style={{ flexGrow: "2" }}>
        <Card.Content>
          <Card.Header className="white">Recent Comments</Card.Header>
        </Card.Content>
        {this.props.result.count !== 0 ? (
          messages.map(message => (
            <Card.Content key={message.id} className="dark-mode1">
              <Comment.Group>
                <Comment>
                  <Comment.Avatar src={defaultAvatar} />
                  <Comment.Content>
                    <Comment.Author as="a" className="white">
                      {message.username}
                    </Comment.Author>
                    <Comment.Metadata className="gray">
                      {new Date(message.createdAt).toLocaleString()}
                    </Comment.Metadata>
                    <Comment.Text className="white">
                      {message.text}
                      <DeleteButton
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
          <i className="white" style={{ padding: "20px" }}>
            -No recent comments-
          </i>
        )}
      </Card>
    );
  }
}

export default withAsyncAction("messages", "getPersonalMessages")(MyMessages);
