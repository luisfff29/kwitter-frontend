import React, { Component } from "react";
import { Button, Form, Modal, Dropdown, Image } from "../../components";
import { connect } from "../../HOCs";
import DefaultAvatar from "../../assets/images/default-avatar.png";
import Dog from "../../assets/images/dog.jpg";
import Cat from "../../assets/images/cat.jpg";
import Landscape from "../../assets/images/landscape.jpg";
import Flower from "../../assets/images/flower.jpg";
import Pineapple from "../../assets/images/pineapple.jpg";
// import { uploadPicture } from "../../../redux/actionCreators";

class UploadPicture extends Component {
  render() {
    return (
      <Modal trigger={<Dropdown.Item>Upload picture</Dropdown.Item>}>
        <Modal.Header>Upload a picture!</Modal.Header>
        <Modal.Content>
          Choose one of the follow pictures or upload a new one.
          <Image.Group size="tiny">
            <Image as="a" src={Dog} />
            <Image as="a" src={Cat} />
            <Image as="a" src={Landscape} />
            <Image as="a" src={Flower} />
            <Image as="a" src={Pineapple} />
          </Image.Group>
          <br />
          <input type="file" />
        </Modal.Content>
        <Modal.Actions>
          <Button>Cancel</Button>
          <Button>Submit</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

// const mapDispatchToProps = {
//   uploadPicture,
// };

// export default connect(null, mapDispatchToProps)(UploadPIcture);
export default UploadPicture;
