import "./App.css";
import React, { Component } from "react";
import SearchForm from "./components/SearchForm";
import GifList from "./components/GifList";

class App extends Component {
  render() {
    return (
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">Hello</h1>
          <SearchForm />
        </div>
        <div className="main-content">
          <GifList />
        </div>
      </div>
    );
  }
}

export default App;
