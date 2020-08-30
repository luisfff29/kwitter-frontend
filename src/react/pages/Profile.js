import React, { Component } from "react";
import { Menus, ProfileCard, ProfileMessages } from "../components";
import { Grid, Container } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Profile extends Component {
  render() {
    return (
      <>
        <Menus isAuthenticated={this.props.isAuthenticated} />
        <Container>
          <Grid columns={2} stackable>
            <Grid.Column widescreen={6}>
              <ProfileCard />
            </Grid.Column>
            <Grid.Column widescreen={10}>
              <ProfileMessages />
            </Grid.Column>
          </Grid>
        </Container>
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
