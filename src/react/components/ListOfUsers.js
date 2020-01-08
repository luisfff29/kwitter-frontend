import React from "react";
import { Link } from ".";
import { Item, Card } from "../components";

class ListOfUsers extends React.Component {
  state = { users: [], isLoading: false, value: "" };

  componentDidMount = () => {
    fetch("https://kwitter-api.herokuapp.com/users")
      .then(response => response.json())
      .then(data => {
        this.setState({ users: data.users });
      });
  };

  render() {
    return (
      <Card.Group itemsPerRow={4} style={{ margin: "0 auto" }}>
        {this.state.users.map((person, index) => (
          <Card
            key={index}
            raised
            image={
              <Link to={"/profile/" + person.username}>
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
                      <Item.Header>{person.displayName}</Item.Header>
                      <p style={{ color: "gray" }}>{person.username}</p>
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
