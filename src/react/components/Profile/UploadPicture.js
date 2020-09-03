import React, { Component } from "react";
import { Button, Modal, Dropdown, Image } from "../../components";
import { withAsyncAction } from "../../HOCs";
import { Spinner } from "../../components";
import Dog from "../../assets/images/dog.jpg";
import Cat from "../../assets/images/cat.jpg";
import Landscape from "../../assets/images/landscape.jpg";
import Flower from "../../assets/images/flower.jpg";
import Pineapple from "../../assets/images/pineapple.jpg";

class UploadPicture extends Component {
  state = {
    image: null,
    open: false,
  };

  selectPicture = (event) => {
    this.setState({ image: event.target.files[0] });
  };

  uploadPicture = () => {
    const fd = new FormData();
    fd.append("picture", this.state.image);
    this.props.uploadPicture(fd);
    setTimeout(() => {
      if (this.props.error == null) {
        this.setState({ ...this.state, open: false });
      }
    }, 1750);
  };

  openModal = () => {
    this.setState({ ...this.state, open: true });
  };

  closeModal = () => {
    this.setState({ ...this.state, open: false });
  };

  render() {
    const { loading, error } = this.props;

    return (
      <Modal
        open={this.state.open}
        trigger={
          <Dropdown.Item onClick={this.openModal}>Upload picture</Dropdown.Item>
        }
      >
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
          <input type="file" name="picture" onChange={this.selectPicture} />
          {loading && <Spinner name="circle" color="white" />}
          {error && <p style={{ color: "red" }}>{error.message}</p>}
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.closeModal}>Cancel</Button>
          <Button onClick={this.uploadPicture}>Submit</Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default withAsyncAction("users", "uploadPicture")(UploadPicture);
// export default UploadPicture;
