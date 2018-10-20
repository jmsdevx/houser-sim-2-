import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class Wizard extends Component {
  godash() {}

  redirect() {}
  render() {
    return (
      <div>
        <h1>Wizard</h1>
        <Link to="/">Cancel</Link>
      </div>
    );
  }
}

export default Wizard;
