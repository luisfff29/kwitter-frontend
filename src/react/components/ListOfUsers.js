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
    return (
      <Card.Group itemsPerRow={4}>
        {this.state.users.map((person, index) => (
          <Card
            key={index}
            raised
            image={
              <Link to={"/profile/" + person.username} className="dark-mode2">
                <Item.Group>
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
                          : "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
                      }
                    />
                    <Item.Content verticalAlign="middle">
                      <Item.Header className="white">
                        {person.displayName}
                      </Item.Header>
                      <p className="gray">{person.username}</p>
                    </Item.Content>
                  </Item>
                </Item.Group>
              </Link>
            }
          />
        ))}
      </Card.Group>
    );
  }
}

export default ListOfUsers;
