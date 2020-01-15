import React from "react";
import { Link } from ".";
import { Spinner } from ".";
import { Item, Card, Dimmer } from "../components";
import "./DarkMode.css";
import { withAsyncAction } from "../HOCs";

class ListOfUsers extends React.Component {
  componentDidMount = () => {
    this.props.getListOfUsers();
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

    const users = this.props.result.users;

    return (
      <Card.Group itemsPerRow={4}>
        {users.map(person => (
          <Card
            key={person.username}
            raised
            image={
              <Item.Group className="dark-mode2">
                <Item>
                  <Item.Image
                    style={{
                      width: "60px",
                      height: "60px",
                      overflow: "hidden"
                    }}
                    src={
                      person.pictureLocation
                        ? "https://kwitter-api.herokuapp.com" +
                          person.pictureLocation
                        : defaultAvatar
                    }
                  />
                  <Item.Content verticalAlign="middle">
                    <Item.Header className="white">
                      <Link to={"/profile/" + person.username}>
                        {person.displayName}
                      </Link>
                    </Item.Header>
                    <p className="gray">{person.username}</p>
                  </Item.Content>
                </Item>
              </Item.Group>
            }
          />
        ))}
      </Card.Group>
    );
  }
}

export default withAsyncAction("users", "getListOfUsers")(ListOfUsers);
