import React from "react";
import {
  Menus,
  ProfileCard,
  ProfileMessages,
  ThisIsTheBottom,
} from "../components";
import { Grid, Container } from "../components";
import { userIsAuthenticated } from "../HOCs";

class Profile extends React.Component {
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
        <ThisIsTheBottom />
      </>
    );
  }
}

export default userIsAuthenticated(Profile);
