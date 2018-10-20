import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

class StepOne extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      datname: "",
      dataddress: "",
      datcity: "",
      datstate: "",
      datzip: ""
    };
  }

  namehandler(input) {
    this.setState({ datname: input });
  }

  addhandler(input) {
    this.setState({ dataddress: input });
  }

  cityhandler(input) {
    this.setState({ datcity: input });
  }

  statehandler(input) {
    this.setState({ datstate: input });
  }

  ziphandler(input) {
    this.setState({ datzip: input });
  }

  submitStepOne() {
    const { datname, dataddress, datcity, datstate, datzip } = this.state;
    axios
      .post("http://localhost:3005/api/houses", {
        datname: datname,
        dataddress: dataddress,
        datcity: datcity,
        datstate: datstate,
        datzip: datzip
      })
      .then(response => {
        console.log(response);
      });
  }
  render() {
    return (
      <div>
        <h2>Step One</h2>
        <input
          type="text"
          value={this.state.datname}
          placeholder="Property Name"
          onChange={e => this.namehandler(e.target.value)}
        />
        <input
          type="text"
          value={this.state.dataddress}
          placeholder="Address"
          onChange={e => this.addhandler(e.target.value)}
        />
        <input
          type="text"
          value={this.state.datcity}
          placeholder="City"
          onChange={e => this.cityhandler(e.target.value)}
        />
        <input
          type="text"
          value={this.state.datstate}
          placeholder="State"
          onChange={e => this.statehandler(e.target.value)}
        />
        <input
          type="number"
          value={this.state.datzip}
          placeholder="Zip Code"
          onChange={e => this.ziphandler(e.target.value)}
        />
        <Link
          to={{ pathname: "/steptwo", state: { name: this.state.datname } }}
        >
          <button onClick={() => this.submitStepOne()}>Next</button>
        </Link>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return { state };
}

export default connect(mapStatetoProps)(StepOne);
