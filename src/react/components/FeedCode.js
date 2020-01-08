import React, { Component } from "react";
import "./FeedCode.css";
import { Grid, Segment } from "../components";

class FeedCode extends Component {
  render() {
    return (
      <Grid verticalAlign="middle" columns={4} centered>
        <Grid.Row>
          <Grid.Column>
            <Segment></Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Numbers</Segment>
            <br />
            <Segment>Numbers</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Numbers</Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default FeedCode;
