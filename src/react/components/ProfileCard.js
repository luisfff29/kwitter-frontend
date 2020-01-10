import React from "react";
import { Card, Image, Icon } from "../components";
<<<<<<< src/react/components/ProfileCard.js
import "./DarkMode.css";
=======
import "./DarkMode.css";
//import { getUser } from "../../redux/actionCreators";
import { Spinner } from "../components"
import { withAsyncAction } from "../HOCs";
>>>>>>> src/react/components/ProfileCard.js

class ProfileCard extends React.Component {

  componentDidMount() {
    this.props.getUser("Cveal063")
  }

  render() {
    if (this.props.result === null) {
      return <Spinner name = "circle" color = "red" />;    
    }

    const user = this.props.result.user;
    
    return (
      <Card>
        <Image
          src={
            user.pictureLocation 
              ? user.pictureLocation
              : "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
          }
        />
<<<<<<< src/react/components/ProfileCard.js
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
=======
        <Card.Content className="dark-mode2">
          <Card.Header className-"white">
            {user.displayName}
          </Card.Header>
          <Card.Meta>
            <span className="date gray">{user.createdAt}</span>
          </Card.Meta>
          <Card.Description className="white">
            {user.about}
          </Card.Description>
        </Card.Content>
        <Card.Content extra className="dark-mode2">
          <Icon name="friends" className="gray" />
          <spam className="gray">22 Friends</spam>
>>>>>>> src/react/components/ProfileCard.js
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

export default withAsyncAction("users", "getUser") (ProfileCard);
