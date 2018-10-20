import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

class StepThree extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      mortgageamt: 0,
      rent: 0,
      name: ""
    };
  }

  renthandler(input) {
    this.setState({ rent: input });
  }
  mortgagehandler(input) {
    this.setState({ mortgageamt: input });
  }

  submitStepThree() {
    const { mortgageamt, rent } = this.state;
    axios
      .post("http://localhost:3005/api/houses/rent", {
        mortgageamt: mortgageamt,
        rent: rent,
        datname: this.props.location.state.name
      })
      .then(response => {
        console.log(response);
      });
  }
  render() {
    return (
      <div>
        <h2>Step Three</h2>
        <input
          type="number"
          value={this.state.mortgageamt}
          placeholder="Mortgage Amount"
          onChange={e => this.mortgagehandler(e.target.value)}
        />
        <input
          type="number"
          value={this.state.rent}
          placeholder="Expected Rent"
          onChange={e => this.renthandler(e.target.value)}
        />
        <Link to="/">
          <button onClick={() => this.submitStepThree()}>Complete</button>
        </Link>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return { state };
}

export default connect(mapStatetoProps)(StepThree);
