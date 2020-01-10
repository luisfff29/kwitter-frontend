import React from "react";
import { Card, Image, Icon } from "../components";
import "./DarkMode.css";

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
        />
        <Card.Content className="dark-mode2">
          <Card.Header className="white">
            {this.state.user.displayName}
          </Card.Header>
          <Card.Meta>
            <span className="date gray">{this.state.user.createdAt}</span>
          </Card.Meta>
          <Card.Description className="white">
            {this.state.user.about}
          </Card.Description>
        </Card.Content>
        <Card.Content extra className="dark-mode2">
          <Icon name="user" className="gray" />
          <spam className="gray">22 Friends</spam>
        </Card.Content>
      </Card>
    );
  }
}

export default ProfileCard;
