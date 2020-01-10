import React from "react";
import { Menus, ProfileCard, MyMessages, ThisIsTheBottom } from "../components";
import { userIsAuthenticated } from "../HOCs";
import { Grid } from "../components";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menus isAuthenticated={this.props.isAuthenticated} />
        <Grid centered columns={3}>
          <Grid.Column>
            <ProfileCard />
          </Grid.Column>
          <Grid.Column width={7}>
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
