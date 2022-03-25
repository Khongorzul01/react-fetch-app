import "./App.css";
import React, { Component } from "react";
import SearchForm from "./components/SearchForm";
import GifList from "./components/GifList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }
  componentDidMount() {
    fetch(
      "http://api.giphy.com/v1/gifs/trending?api_key=d6LPIdAeDq2hKSjtR8SgQAzSbDzyGU51"
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ gifs: data.data });
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
  render() {
    console.log(this.state.gifs);
    return (
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">Hello</h1>
          <SearchForm />
        </div>
        <div className="main-content">
          <GifList data={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
