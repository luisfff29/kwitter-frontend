import React, { Component } from "react";
import _ from "lodash";
import { Search } from "../components";

class SearchUsers extends Component {
  state = { isLoading: false, results: [], value: "" };

  componentDidMount = () => {
    fetch("https://kwitter-api.herokuapp.com/users")
      .then(response => response.json())
      .then(data => {
        this.setState({ results: data.users });
      });
  };

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.username });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) {
        fetch("https://kwitter-api.herokuapp.com/users")
          .then(response => response.json())
          .then(data => {
            this.setState({ results: data.users, isLoading: false, value: "" });
          });
      }

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.username);

      this.setState({
        isLoading: false,
        results: _.filter(this.state.results, isMatch)
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;
    const resultRenderer = ({ pictureLocation, username, displayName }) => [
      pictureLocation && (
        <img
          alt=""
          key="image"
          className="image"
          src={"https://kwitter-api.herokuapp.com" + pictureLocation}
          style={{ width: "50px", height: "50px" }}
        />
      ),
      <div key="content" className="content">
        {displayName && <div className="displayName">{displayName}</div>}
        {username && <div className="username">{username}</div>}
      </div>
    ];

    return (
      <Search
        style={{ paddingBottom: "30px" }}
        placeholder="Find a user"
        resultRenderer={resultRenderer}
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
