import React from "react";
import { Link } from ".";
import { Spinner } from ".";
import { Item, Grid, Dimmer, Input } from "../components";
import { withAsyncAction } from "../HOCs";
import DefaultAvatar from "../assets/images/default-avatar.png";

class ListOfUsers extends React.Component {
  state = { search: "" };

  componentDidMount = () => {
    this.props.getListOfUsers();
  };

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
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

        <Grid>
          {searchedUsers.map((person) => (
            <Grid.Column
              key={person.username}
              computer={4}
              mobile={5}
              tablet={5}
            >
              <Item.Group>
                <Item>
                  <Item.Image
                    avatar
                    size="tiny"
                    src={
                      person.pictureLocation !== null
                        ? `https://kwitter-api.herokuapp.com${person.pictureLocation}`
                        : DefaultAvatar
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
