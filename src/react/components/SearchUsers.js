import React, { Component } from "react";
import _ from "lodash";
import { Search } from "../components";

const source = [
  {
    pictureLocation: null,
    username: "njk",
    displayName: "test",
    about: "",
    googleId: null,
    createdAt: "2020-01-08T02:34:42.341Z",
    updatedAt: "2020-01-08T02:34:42.341Z"
  },
  {
    pictureLocation: "/users/poop/picture?t=1578447753046",
    username: "poop",
    displayName: "poop",
    about: "",
    googleId: null,
    createdAt: "2020-01-08T01:42:07.527Z",
    updatedAt: "2020-01-08T01:42:33.046Z"
  },
  {
    pictureLocation: null,
    username: "newnew",
    displayName: "newnew",
    about: "",
    googleId: null,
    createdAt: "2020-01-08T00:53:14.840Z",
    updatedAt: "2020-01-08T00:53:14.840Z"
  },
  {
    pictureLocation: null,
    username: "asdasd",
    displayName: "asd",
    about: "",
    googleId: null,
    createdAt: "2020-01-08T00:48:56.082Z",
    updatedAt: "2020-01-08T00:48:56.082Z"
  },
  {
    pictureLocation: null,
    username: "Cveal063",
    displayName: "Cveal063",
    about: "",
    googleId: null,
    createdAt: "2020-01-07T17:06:27.251Z",
    updatedAt: "2020-01-07T17:06:27.251Z"
  }
];

class SearchUsers extends Component {
  state = { isLoading: false, results: [], value: "" };

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.username });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1)
        return this.setState({ isLoading: false, results: [], value: "" });

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.username);

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch)
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Search
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true
        })}
        results={results}
        value={value}
        {...this.props}
      />
    );
  }
}

export default SearchUsers;
