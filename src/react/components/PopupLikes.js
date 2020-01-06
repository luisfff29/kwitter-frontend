import React, { Component } from "react";
import { Popup, Icon, Feed } from ".";

class PopupLikes extends Component {
  render() {
    const WhoLikeIt = props => {
      let totalNames = props.atr2.length;
      let names = props.atr2.map(user => user.username);
      switch (totalNames) {
        case 1:
          return names[0] + " likes this";
        case 2:
          return names[0] + " and " + names[1] + " like this";
        case 3:
          return names[0] + ", " + names[1] + " and " + names[2] + " like this";
        default:
          return (
            names[0] +
            ", " +
            names[1] +
            " and " +
            (totalNames - 2) +
            " others like this"
          );
      }
    };
    return (
      <Popup
        trigger={
          <Feed.Like id="like">
            <Icon name="like" />
            {this.props.atr.length} Like(s)
          </Feed.Like>
        }
        position="right center"
        content={<WhoLikeIt atr2={this.props.atr} />}
        {...(this.props.atr.length === 0 && { disabled: true })}
      />
    );
  }
}
export default PopupLikes;
