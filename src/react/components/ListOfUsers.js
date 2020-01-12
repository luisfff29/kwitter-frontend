import React from "react";
import { Link } from ".";
import { Item, Card } from "../components";
import "./DarkMode.css";

class ListOfUsers extends React.Component {
  state = { users: [] };

  componentDidMount = () => {
    fetch("https://kwitter-api.herokuapp.com/users")
      .then(response => response.json())
      .then(data => {
        this.setState({ users: data.users });
      });
  };

  render() {
    const defaultAvatar = require("./images/default-avatar.png");
    return (
      <Card.Group itemsPerRow={4}>
        {this.state.users.map(person => (
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

export default ListOfUsers;
