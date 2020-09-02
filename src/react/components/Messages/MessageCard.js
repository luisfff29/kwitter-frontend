import React from "react";
import { Card, Image, Icon } from "../../components";
import DefaultAvatar from "../../assets/images/default-avatar.png";
import "./Message.css";

const messageCard = (props) => {
  return (
    <>
      <Card className="MessageCard">
        <Icon
          className="CloseIcon"
          size="large"
          name="close"
          onClick={() => props.hide()}
        ></Icon>
        <Image
          className="Image"
          src={
            props.card.pictureLocation !== null
              ? `https://kwitter-api.herokuapp.com${props.card.pictureLocation}`
              : DefaultAvatar
          }
        />
        <Card.Content>
          <Card.Header>{props.card.displayName}</Card.Header>
          <Card.Meta>
            <span className="date">{props.card.username}</span>
          </Card.Meta>
          <Card.Description>{props.card.about}</Card.Description>
        </Card.Content>
      </Card>
    </>
  );
};

export default messageCard;
