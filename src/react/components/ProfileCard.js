import React from "react";
import { Card, Image, Icon } from "../components";

class ProfileCard extends React.Component {
  state = { user: [] };

  componentDidMount = () => {
    fetch("https://kwitter-api.herokuapp.com/users/luisf")
      .then(response => response.json())
      .then(data => {
        this.setState({ user: data.user });
      });
  };

  render() {
    return (
      <Card>
        <Image
          src={
            this.state.user.pictureLocation !== null
              ? "https://kwitter-api.herokuapp.com" +
                this.state.user.pictureLocation
              : "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
          }
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{this.state.user.displayName}</Card.Header>
          <Card.Meta>
            <span className="date">{this.state.user.createdAt}</span>
          </Card.Meta>
          <Card.Description>{this.state.user.about}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="user" />
          22 Friends
        </Card.Content>
      </Card>
    );
  }
}

export default ProfileCard;
