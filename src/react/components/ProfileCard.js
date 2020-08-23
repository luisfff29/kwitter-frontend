import React from "react";
import { Card, Image, Dimmer, Spinner } from "../components";
import { withAsyncAction, connect } from "../HOCs";

class ProfileCard extends React.Component {
  componentDidMount = () => {
    this.props.getUser(this.props.username);
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

    const user = this.props.result.user;

    return (
      <Card style={{ flexGrow: "1", margin: "10px" }}>
        <Image
          src={user.pictureLocation ? user.pictureLocation : defaultAvatar}
        />
        <Card.Content>
          <Card.Header>{user.displayName}</Card.Header>
          <Card.Meta>
            <span>{user.username}</span>
          </Card.Meta>
          <Card.Description>
            {user.about ? user.about : <i>-Nothing about the user-</i>}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <span>Joined in: {new Date(user.createdAt).toDateString()}</span>
          <br />
          <span>Last Updated: {new Date(user.updatedAt).toDateString()}</span>
        </Card.Content>
      </Card>
    );
  }
}

/*
mapStateToProps
loading 
error
result

mapdispatchToProps
getUser
*/
const mapStateToProps = (state) => {
  return {
    username: state.auth.login.result && state.auth.login.result.username,
  };
};

export default connect(mapStateToProps)(
  withAsyncAction("users", "getUser")(ProfileCard)
);
