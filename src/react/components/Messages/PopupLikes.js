import React, { Component } from "react";
import { Popup, Icon, Feed } from "../../components";
import { connect } from "../../HOCs";
import { addLike, removeLike } from "../../../redux/actionCreators";

class PopupLikes extends Component {
  handleAddLike = () => {
    if (!this.props.disabled) {
      if (
        !this.props.atr.some((user) => user.username === this.props.username)
      ) {
        return this.props.addLike(this.props.id);
      }
      return this.props.removeLike(
        Number(
          this.props.atr
            .filter((user) => user.username === this.props.username)
            .map((user) => user.id)
        )
      );
    }
  };

  render() {
    const WhoLikeIt = (props) => {
      let totalNames = props.atr2.length;
      let names = props.atr2.map((user) => user.username);
      switch (totalNames) {
        case 1:
          return `${names[0]} likes this`;
        case 2:
          return `${names[0]} and ${names[1]} like this`;
        case 3:
          return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        default:
          return `${names[0]}, ${names[1]} and ${
            totalNames - 2
          } others like this`;
      }
    };
    return (
      <Popup
        trigger={
          <Feed.Like style={{ cursor: "pointer" }} onClick={this.handleAddLike}>
            <Icon
              name="like"
              {...(this.props.atr.some(
                (user) => user.username === this.props.username
              ) && {
                color: "red",
              })}
            />
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

const mapDispatchToProps = {
  addLike,
  removeLike,
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.login.result && state.auth.login.result.username,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupLikes);
