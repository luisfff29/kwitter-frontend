import React, { Component } from "react";
import { Menu, FeedCode } from "../components";

class Feed extends Component {

    render() {
        return (
            <React.Fragment>
            <h2>This is the Feed Page</h2>
            <Menu />
            <FeedCode />
            </React.Fragment>
        )
    }
}

export default Feed;