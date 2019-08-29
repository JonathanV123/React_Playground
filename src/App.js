import React, { Component } from "react";
import ExampleOne from "./hooks/ExampleOne";
import { ExampleTwo } from "./hooks/ExampleTwo";
import { Button } from "./hooks/Button";

import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  state = {
    loading: true
  };
  render() {
    return (
      <div className="App">
        <ExampleOne />
        <ExampleTwo />
        <Button/>
      </div>
    );
  }
}

const mapStateToProps = ({ home }) => ({
  data: home.data
});

export default connect(mapStateToProps)(App);
