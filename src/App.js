import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <>
        <div className="app_container">
          <Navbar />
        </div>
      </>
    );
  }
}

export default App;
