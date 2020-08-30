import React, { Component } from "react";
import { Grid, Card, Icon, Modal } from "../components";
import MostLikedMessages from "./TheTopMost/MostLikedMessages";
import MostRecentUsers from "./TheTopMost/MostRecentUsers";

class FeedCode extends Component {
  render() {
    const cards = (title, color, icon, span) => {
      var header = `hugeHeader hugeHeader-${color}`;
      return (
        <Card style={{ width: "100%" }}>
          <h1 className={header} size="huge">
            {title}
          </h1>
          <Card.Content extra textAlign="center">
            <Icon name={icon} />
            <span>{span}</span>
          </Card.Content>
        </Card>
      );
    };

    return (
      <Grid verticalAlign="middle" columns={3} stackable centered>
        <Grid.Row>
          <Grid.Column>
            <Modal
              trigger={cards(
                "MOST LIKED MESSAGES",
                "red",
                "mail",
                "Top 5 Messages"
              )}
              size="tiny"
              closeIcon
            >
              <MostLikedMessages />
            </Modal>
          </Grid.Column>
          <Grid.Column>
            <Modal
              trigger={cards(
                "MOST RECENT USERS",
                "turq",
                "users",
                "Top 5 New Users"
              )}
              size="mini"
              closeIcon
            >
              <MostRecentUsers />
            </Modal>
            <br />
            <Modal
              trigger={cards("MY BEST FRIENDS", "blue", "like", "0 BFFs")}
              closeIcon
              header="Reminder!"
              content="My best friends!"
            />
          </Grid.Column>
          <Grid.Column>
            <Modal
              trigger={cards(
                "SUGGESTIONS FOR YOU",
                "green",
                "user plus",
                "5 Friends"
              )}
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
