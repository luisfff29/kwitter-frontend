import React from "react";
import { Card, Feed } from "../components";

class MyMessages extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>Recent Comments</Card.Header>
        </Card.Content>
        <Card.Content>
          <Feed>
            <Feed.Event>
              <Feed.Label image="/images/avatar/small/jenny.jpg" />
              <Feed.Content>
                <Feed.Date content="1 day ago" />
                <Feed.Summary>
                  You added <a href = "#">Jenny Hess</a> to your <a href = "#">coworker</a> group.
                </Feed.Summary>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Card.Content>
      </Card>
    );
  }
}

export default MyMessages;
