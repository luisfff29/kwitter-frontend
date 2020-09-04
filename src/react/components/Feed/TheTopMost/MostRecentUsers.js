import React, { Component } from "react";
import { Spinner } from "../../../components";
import { Modal, Image, Dimmer, List } from "../../../components";
import { withAsyncAction } from "../../../HOCs";
import DefaultAvatar from "../../../assets/images/default-avatar.png";

class MostRecentUsers extends Component {
  componentDidMount = () => {
    this.props.getListOfUsers();
  };

  render() {
    if (this.props.result === null) {
      return (
        <Dimmer active>
          <Spinner name="pacman" color="white" />
        </Dimmer>
      );
    }

    const users = this.props.result.users.slice(0, 5);

    return (
      <>
        <Modal.Header>Top 5 most recent users</Modal.Header>
        <Modal.Content>
          <List divided size="massive">
            {users.map((user) => (
              <List.Item key={user.username}>
                <Image
                  avatar
                  src={
                    user.pictureLocation != null
                      ? `https://kwitter-api.herokuapp.com${user.pictureLocation}`
                      : DefaultAvatar
                  }
                />
                <List.Content verticalAlign="middle">
                  <List.Header>{user.username}</List.Header>
                </List.Content>
              </List.Item>
            ))}
          </List>
        </Modal.Content>
      </>
    );
  }
}

export default withAsyncAction("users", "getListOfUsers")(MostRecentUsers);
