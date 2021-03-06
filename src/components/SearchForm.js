import React, { Component } from "react";
import GifList from "./GifList";

export default class SearchForm extends Component {
  state = {
    searchText: "",
  };
  onSearchChange = (e) => {
    this.setState({ searchText: e.target.value });
  };
  handleSubmit = (e) => {
    this.props.onSearch(this.state.searchText);
    e.preventDefault();
    e.currentTarget.reset();
  };
  render() {
    return (
      <div>
        <form className="search-form" onSubmit={this.handleSubmit}>
          <label className="is-hidden" htmlFor="search">
            Search
          </label>
          <input
            name="search"
            type="search"
            placeholder="Search...."
            onChange={this.onSearchChange}
          ></input>
          <button type="submit" id="submit" className="search-button">
            <i className="material-icons icn-search"></i>
          </button>
        </form>
      </div>
    );
  }
}
