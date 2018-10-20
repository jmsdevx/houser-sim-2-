import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getHouses } from "../ducks/reducer";
import axios from "axios";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }

  componentDidMount() {
    this.props.getHouses();
  }

  delete(id) {
    axios.delete(`http://localhost:3005/api/animal/${id}`).then(response => {
      this.props.getHouses();
    });
  }

  render() {
    console.log(this.props.state.houses);
    let display = this.props.state.houses.map((e, i) => (
      <div key={i} className="listing">
        <img src={`${e.house_image}`} alt="house" className="houseimg" />
        <div className="address">
          <p>
            Property Name:
            {e.datname}
          </p>
          <p>Address: {e.dataddress}</p>
          <p>City: {e.datcity}</p>
          <p>State: {e.datstate}</p>
          <p>Zip: {e.datzip}</p>
        </div>
        <div className="money">
          <p>Monthly Mortgage: {e.mortgageamt}</p>
          <p>
            Desired Rent:
            {e.rent}
          </p>
        </div>
        <div id="housebuttons">
          <button onClick={() => this.delete(e.id)}>Delete</button>
          <Link to={`/houses/${e.id}`}>Edit</Link>
        </div>
      </div>
    ));
    return (
      <div className="dashbody">
        <div className="dashnav">
          <h1>Dashboard</h1>
          <Link to="/stepone">Add New Property</Link>
        </div>
        <div>
          <h4>Home listings</h4>
          {display}
        </div>
      </div>
    );
  }
}

function mapStatetoProps(state) {
  return { state };
}

export default connect(
  mapStatetoProps,
  { getHouses }
)(Dashboard);
