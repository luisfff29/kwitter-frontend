import React from "react";
import { Card, Comment } from "../components";

class MyMessages extends React.Component {
  state = { comment: [] };

  componentDidMount = () => {
    fetch("https://kwitter-api.herokuapp.com/messages")
      .then(response => response.json())
      .then(data =>
        this.setState({
          comment: data.messages.filter(user => user.username === "luisf")
        })
      );
  };

  render() {
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>Recent Comments</Card.Header>
        </Card.Content>
        {this.state.comment === [] ? (
          this.state.comment.map(message => (
            <Card.Content key={message.id}>
              <Comment.Group>
                <Comment>
                  <Comment.Avatar src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" />
                  <Comment.Content>
                    <Comment.Author as="a">{message.username}</Comment.Author>
                    <Comment.Metadata className="gray">
                      {new Date(message.createdAt).toLocaleString()}
                    </Comment.Metadata>
                    <Comment.Text>{message.text}</Comment.Text>
                  </Comment.Content>
                </Comment>
              </Comment.Group>
            </Card.Content>
          ))
        ) : (
          <i className="gray" style={{ padding: "20px" }}>
            No recent comments
          </i>
        )}
      </Card>
    );
  }
}

export default MyMessages;
