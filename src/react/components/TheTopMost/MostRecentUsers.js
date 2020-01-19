import React, { Component } from "react";
import { Spinner } from "..";
import { Modal, Item, Dimmer } from "../../components";
import { withAsyncAction } from "../../HOCs";

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
          {users.map(user => (
            <Item.Group divided key={user.username}>
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

export default withAsyncAction("users", "getListOfUsers")(MostRecentUsers);
