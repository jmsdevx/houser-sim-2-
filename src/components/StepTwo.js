import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";

class StepTwo extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      name: "",
      image: ""
    };
  }

  componentDidMount() {
    this.setState({ name: this.props.location.state.name });
  }

  imagehandler(input) {
    this.setState({ image: input });
  }

  submitStepTwo() {
    const { image } = this.state;
    axios
      .post("http://localhost:3005/api/houses/img", {
        house_image: image,
        datname: this.props.location.state.name
      })
      .then(response => {
        console.log(response);
      });
  }
  render() {
    return (
      <div>
        <h2>Step Two</h2>
        <input
          type="text"
          value={this.state.image}
          placeholder="Insert Image URL"
          onChange={e => this.imagehandler(e.target.value)}
        />
        <Link to={{pathname:"/stepthree", state: {name: this.props.location.state.name}}}>
          <button onClick={() => this.submitStepTwo()}>Next</button>
        </Link>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return { state };
}

export default connect(mapStatetoProps)(StepTwo);
