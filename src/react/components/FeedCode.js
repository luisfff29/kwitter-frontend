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
      <Card>
        <Image src={pic1} />
        <Card.Content extra textAlign="center" className="dark-mode2">
          <Icon className="gray" name="mail" />
          <spam className="gray">Top 3 Messages</spam>
        </Card.Content>
      </Card>
    );

    const card2 = (
      <Card>
        <Image src={pic2} />
        <Card.Content extra textAlign="center" className="dark-mode2">
          <Icon className="gray" name="users" />
          <spam className="gray"> 3 New Users</spam>
        </Card.Content>
      </Card>
    );

    const card3 = (
      <Card>
        <Image src={pic3} />
        <Card.Content extra textAlign="center" className="dark-mode2">
          <Icon className="gray" name="like" />
          <spam className="gray">5 BFFs</spam>
        </Card.Content>
      </Card>
    );

    const card4 = (
      <Card>
        <Image src={pic4} />
        <Card.Content extra textAlign="center" className="dark-mode2">
          <Icon className="gray" name="user plus" />
          <spam className="gray">5 Friends</spam>
        </Card.Content>
      </Card>
    );

    return (
      <Grid verticalAlign="middle" columns={4} centered>
        <Grid.Row stretched>
          <Grid.Column>
            <Modal trigger={card1} size="mini" closeIcon>
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
              content="Call Benjamin regarding the reports."
            />
          </Grid.Column>
          <Grid.Column>
            <Modal
              trigger={card4}
              closeIcon
              header="Reminder!"
              content="Call Benjamin regarding the reports."
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default FeedCode;
