import React from "react";
import { Menus, ProfileCard, MyMessages, ThisIsTheBottom } from "../components";
import { userIsAuthenticated } from "../HOCs";
import { Grid } from "../components";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menus isAuthenticated={this.props.isAuthenticated} />
        <Grid centered>
          <Grid.Column width={4}>
            <ProfileCard />
          </Grid.Column>
          <Grid.Column width={8}>
            <MyMessages />
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid>
        <ThisIsTheBottom />
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
