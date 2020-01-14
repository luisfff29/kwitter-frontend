import React from "react";
import { Dimmer, Loader, Button } from "../components";
import { connect } from "../HOCs";
import { deleteMessages } from "../../redux/actionCreators";

class MyMessageDeleted extends React.Component {
  render() {
    if (this.props.result === null) {
      return (
        <Dimmer active>
          <Loader size="big">Loading...</Loader>
        </Dimmer>
      );
    }

    return (
      <Button
        onClick={event => this.props.deleteMessages(this.props.id)}
        icon="trash alternate"
        size="mini"
        floated="right"
      ></Button>
    );
  }
}

const mapDispatchToProps = {
  deleteMessages
};

export default connect(null, mapDispatchToProps)(MyMessageDeleted);
