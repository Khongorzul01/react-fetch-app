import "./App.css";
import React, { Component } from "react";
import SearchForm from "./components/SearchForm";

class App extends Component {
  render() {
    return (
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">Hello</h1>
          <SearchForm />
        </div>
      </div>
    );
  }
}

export default App;
