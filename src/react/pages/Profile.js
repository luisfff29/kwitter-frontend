import React from "react";
import { Menus, ThisIsTheBottom } from "../components";
import ProfileCard from "../components/Profile/ProfileCard";
import ProfileMessages from "../components/Profile/ProfileMessages";
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
