import React, { Component } from "react";
import { Card, Image, Dimmer, Dropdown } from "../../components";
import { Spinner } from "../../components";
import { withAsyncAction, connect } from "../../HOCs";
import UploadPicture from "./UploadPicture";
import DefaultAvatar from "../../assets/images/default-avatar.png";
import { withRouter } from "react-router-dom";

class ProfileCard extends Component {
  componentDidMount = () => {
    this.props.getUser(this.props.match.params.username);
  };

  render() {
    if (this.props.result === null) {
      return (
        <Dimmer active>
          <Spinner name="pacman" color="white" />
        </Dimmer>
      );
    }

    const user = this.props.result.user;

    return (
      <Card fluid>
        <Image
          src={
            user.pictureLocation !== null
              ? `https://kwitter-api.herokuapp.com${user.pictureLocation}`
              : DefaultAvatar
          }
          wrapped
        />
        <Card.Content>
          <Card.Header>
            {user.displayName}
            <Dropdown
              icon="ellipsis vertical"
              direction="left"
              style={{ float: "right" }}
            >
              <Dropdown.Menu>
                <Dropdown.Item>
                  <UploadPicture />
                </Dropdown.Item>
                <Dropdown.Item>Update profile</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Card.Header>
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

export default withRouter(
  connect(mapStateToProps)(withAsyncAction("users", "getUser")(ProfileCard))
);
