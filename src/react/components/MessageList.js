import React from "react";
import "./MessageList.css";
import WhoLikeIt from "./WhoLikeIt";
import { Comment, Feed, Icon } from "../components";

const fakeMessages = [
  {
    id: 2121,
    text: "Hello!",
    username: "auser",
    createdAt: "2019-12-20T01:31:21.566Z",
    likes: []
  },
  {
    id: 2114,
    text: "ping",
    username: "And1drew",
    createdAt: "2019-12-12T20:08:39.281Z",
    likes: [
      {
        id: 3140,
        username: "Julia3434",
        messageId: 2114,
        createdAt: "2019-12-12T20:54:47.629Z"
      },
      {
        id: 3141,
        username: "And1drew",
        messageId: 2114,
        createdAt: "2019-12-12T21:33:38.977Z"
      }
    ]
  },
  {
    id: 2112,
    text: "test test",
    username: "slenderdan",
    createdAt: "2019-12-12T14:48:43.168Z",
    likes: []
  },
  {
    id: 2111,
    text: "test test",
    username: "slenderdan",
    createdAt: "2019-12-12T14:48:41.196Z",
    likes: [
      {
        id: 3130,
        username: "slenderdan",
        messageId: 2111,
        createdAt: "2019-12-12T17:46:23.681Z"
      }
    ]
  }
];

class MessageList extends React.Component {
  state = { hovering: false, id: "" };

  mouseOver = theId =>
    this.setState({
      hovering: true,
      id: theId
    });
  mouseOut = () =>
    this.setState({
      hovering: false
    });

  render() {
    return fakeMessages.map(comment => (
      <Comment id={comment.id} key={comment.id}>
        <Comment.Avatar
          id="avatar"
          src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
        />
        <Comment.Content id="espacio-extra">
          <Comment.Author as="a">{comment.username}</Comment.Author>
          <Comment.Metadata>
            <div>
              {new Date(comment.createdAt).toDateString()}
              {", "}
              {comment.createdAt.slice(11, comment.createdAt.length - 5)}
            </div>
          </Comment.Metadata>
          <Comment.Text>{comment.text}</Comment.Text>
          <Feed.Like
            id="like"
            onMouseOver={() => this.mouseOver(comment.id)}
            onMouseOut={this.mouseOut}
          >
            <Icon name="like" esto={comment} />
            {comment.likes.length} Like(s){" "}
            {this.state.hovering &&
            this.state.id === comment.id &&
            comment.likes.length !== 0 ? (
              <WhoLikeIt esto={comment} />
            ) : null}
          </Feed.Like>
        </Comment.Content>
      </Comment>
    ));
  }
}

export default MessageList;
