import React from "react";
import { Card, Image, Icon } from "../components";
import { getUser } from "../../redux/actionCreators";
import { Spinner } from "../components"
import { withAsyncAction } from "../HOCs";

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
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{user.displayName}</Card.Header>
          <Card.Meta>
            <span className="date">{user.createdAt}</span>
          </Card.Meta>
          <Card.Description>{user.about}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="friends" />
          22 Friends
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
