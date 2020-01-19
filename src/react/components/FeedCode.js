import React, { Component } from "react";
import { Grid, Card, Icon, Image, Modal } from "../components";
import "./DarkMode.css";
import MostLikedMessages from "./TheTopMost/MostLikedMessages";
import MostRecentUsers from "./TheTopMost/MostRecentUsers";

const pic1 = require("./images/mostLikedMessages.png");
const pic2 = require("./images/mostRecentUsers.png");
const pic3 = require("./images/myBestFriends.png");
const pic4 = require("./images/suggestionsForYou.png");

class FeedCode extends Component {
  render() {
    const cards = (img, icon, span) => {
      return (
        <Card style={{ width: "100%" }}>
          <Image src={img} />
          <Card.Content extra textAlign="center" className="dark-mode2">
            <Icon className="gray" name={icon} />
            <span className="gray">{span}</span>
          </Card.Content>
        </Card>
      );
    };

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
            <Modal
              trigger={cards(pic1, "mail", "Top 5 Messages")}
              size="tiny"
              closeIcon
            >
              <MostLikedMessages />
            </Modal>
          </Grid.Column>
          <Grid.Column>
            <Modal
              trigger={cards(pic2, "users", "Top 5 New Users")}
              size="mini"
              closeIcon
            >
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
