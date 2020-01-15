import React, { Component } from "react";
import { Grid, Card, Icon, Image, Modal } from "../components";
import "./DarkMode.css";
import { MostLikedMessages, MostRecentUsers } from "./TheTopMost";

class FeedCode extends Component {
  render() {
    const pic1 = require("./images/mostLikedMessages.png");
    const pic2 = require("./images/mostRecentUsers.png");
    const pic3 = require("./images/myBestFriends.png");
    const pic4 = require("./images/suggestionsForYou.png");

    const card1 = (
      <Card style={{ width: "100%" }}>
        <Image src={pic1} />
        <Card.Content extra textAlign="center" className="dark-mode2">
          <Icon className="gray" name="mail" />
          <span className="gray">Top 3 Messages</span>
        </Card.Content>
      </Card>
    );

    const card2 = (
      <Card style={{ width: "100%" }}>
        <Image src={pic2} />
        <Card.Content extra textAlign="center" className="dark-mode2">
          <Icon className="gray" name="users" />
          <span className="gray"> 5 New Users</span>
        </Card.Content>
      </Card>
    );

    const card3 = (
      <Card style={{ width: "100%" }}>
        <Image src={pic3} />
        <Card.Content extra textAlign="center" className="dark-mode2">
          <Icon className="gray" name="like" />
          <span className="gray">0 BFFs</span>
        </Card.Content>
      </Card>
    );

    const card4 = (
      <Card style={{ width: "100%" }}>
        <Image src={pic4} />
        <Card.Content extra textAlign="center" className="dark-mode2">
          <Icon className="gray" name="user plus" />
          <span className="gray">5 Friends</span>
        </Card.Content>
      </Card>
    );

    return (
      <Grid verticalAlign="middle" columns={3} centered>
        <Grid.Row>
          <Grid.Column>
            <Modal trigger={card1} size="tiny" closeIcon>
              <MostLikedMessages />
            </Modal>
          </Grid.Column>
          <Grid.Column>
            <Modal trigger={card2} size="mini" closeIcon>
              <MostRecentUsers />
            </Modal>
            <br />
            <Modal
              trigger={card3}
              closeIcon
              header="Reminder!"
              content="My best friends!"
            />
          </Grid.Column>
          <Grid.Column>
            <Modal
              trigger={card4}
              closeIcon
              header="Reminder!"
              content="Suggestions for you!"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default FeedCode;
