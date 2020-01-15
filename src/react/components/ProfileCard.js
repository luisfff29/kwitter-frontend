import React from "react";
import { Card, Image, Dimmer, Loader } from "../components";
import "./DarkMode.css";
//import { getUser } from "../../redux/actionCreators";
import { withAsyncAction } from "../HOCs";

class ProfileCard extends React.Component {
  componentDidMount = () => {
    this.props.getUser("luisf");
  };

  render() {
    const defaultAvatar = require("./images/default-avatar.png");

    if (this.props.result === null) {
      return (
        <Dimmer active>
          <Loader size="big">Loading...</Loader>
        </Dimmer>
      );
    }

    const user = this.props.result.user;

    return (
      <Card style={{ flexGrow: "1", margin: "10px" }}>
        <Image
          src={user.pictureLocation ? user.pictureLocation : defaultAvatar}
        />
        <Card.Content className="dark-mode2">
          <Card.Header className="white">{user.displayName}</Card.Header>
          <Card.Meta>
            <span className="gray">{user.username} </span>
          </Card.Meta>
          <Card.Description className="white">
            {user.about ? user.about : <i>-Nothing about the user-</i>}
          </Card.Description>
        </Card.Content>
        <Card.Content extra className="dark-mode2">
          <span className="gray">
            Joined in: {new Date(user.createdAt).toDateString()}
          </span>
          <br />
          <span className="gray">
            Last Updated: {new Date(user.updatedAt).toDateString()}
          </span>
        </Card.Content>
      </Card>
    );
  }
}

/*
mapStateToProps
loading 
error
result

mapdispatchToProps
getUser
*/

export default withAsyncAction("users", "getUser")(ProfileCard);
