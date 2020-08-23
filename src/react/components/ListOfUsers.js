import React from "react";
import { Link } from ".";
import { Spinner } from ".";
import { Item, Grid, Dimmer, Input } from "../components";
import { withAsyncAction } from "../HOCs";

class ListOfUsers extends React.Component {
  state = { search: "" };

  componentDidMount = () => {
    this.props.getListOfUsers();
  };

  handleChange = (event) => {
    this.setState({ search: event.target.value });
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

    const searchedUsers = users.filter((user) => {
      return (
        user.username.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      );
    });

    return (
      <>
        <Input
          icon="search"
          placeholder="Search a user..."
          style={{ marginBottom: "50px" }}
          onChange={this.handleChange}
        />

        <Grid relaxed columns={4}>
          {searchedUsers.map((person) => (
            <Grid.Column key={person.username}>
              <Item.Group>
                <Item>
                  <Item.Image
                    style={{
                      width: "60px",
                      height: "60px",
                      overflow: "hidden",
                    }}
                    src={
                      person.pictureLocation !== null
                        ? "https://kwitter-api.herokuapp.com" +
                          person.pictureLocation
                        : defaultAvatar
                    }
                  />
                  <Item.Content verticalAlign="middle">
                    <Item.Header>
                      <Link to={"/profile/" + person.username}>
                        {person.displayName}
                      </Link>
                    </Item.Header>
                    <p>{person.username}</p>
                  </Item.Content>
                </Item>
              </Item.Group>
            </Grid.Column>
          ))}
        </Grid>
      </>
    );
  }
}

export default withAsyncAction("users", "getListOfUsers")(ListOfUsers);
