import React from "react";
import { Menus, ProfileCard, MyMessages } from "../components";
import { userIsAuthenticated } from "../HOCs";
import { Grid } from "../components";

class Profile extends React.Component {
  render() {
    return (
      <>
        <Menus isAuthenticated={this.props.isAuthenticated} />
        <Grid columns={3}>
          <Grid.Column>
            <ProfileCard />
          </Grid.Column>
          <Grid.Column>
            <MyMessages />
          </Grid.Column>
        </Grid>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
